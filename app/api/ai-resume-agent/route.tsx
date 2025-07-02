import { NextRequest, NextResponse } from "next/server";
import { WebPDFLoader } from "@langchain/community/document_loaders/web/pdf";
import { inngest } from "@/inngest/client";
import axios from "axios";
import { currentUser } from "@clerk/nextjs/server";

// export async function POST(req: NextRequest) {
//   const FormData = await req.formData();
//   const resumeFile: any = FormData.get("resumeFile");
//   const recordId = FormData.get("recordId");
//   const user = await currentUser();

//   const loader = new WebPDFLoader(resumeFile);
//   const docs = await loader.load();
//   console.log("PDF:", docs[0]); //Raw Pdf Text

//   //Convert our resumeFile into a blob to upload to storage
//   const arrayBuffer = await resumeFile.arrayBuffer();
//   const base64 = Buffer.from(arrayBuffer).toString("base64");

//   const resultIds = await inngest.send({
//     name: "AiResumeAgent",
//     data: {
//       recordId: recordId,
//       base64ResumeFile: base64,
//       pdfText: docs[0]?.pageContent,
//       aiAgentType: "/ai-tools/ai-resume-analyzer",
//       userEmail: user?.primaryEmailAddress?.emailAddress,
//     },
//   });

//   const runId = resultIds?.ids[0];

//   let runStatus;
//   while (true) {
//     runStatus = await getRuns(runId);
//     if (runStatus?.data?.[0]?.status === "Completed") break;
//     await new Promise((resolve) => setTimeout(resolve, 500));
//   }

//   return NextResponse.json(runStatus.data?.[0].output?.output[0]);
// }

export async function POST(req: NextRequest) {
  const FormData = await req.formData();
  const resumeFile: any = FormData.get("resumeFile");
  const recordId = FormData.get("recordId");
  const user = await currentUser();

  const loader = new WebPDFLoader(resumeFile);
  const docs = await loader.load();
  console.log("PDF:", docs[0]); // Raw Pdf Text

  // Convert resumeFile into a blob to upload to storage
  const arrayBuffer = await resumeFile.arrayBuffer();
  const base64 = Buffer.from(arrayBuffer).toString("base64");

  const resultIds = await inngest.send({
    name: "AiResumeAgent",
    data: {
      recordId: recordId,
      base64ResumeFile: base64,
      pdfText: docs[0]?.pageContent,
      aiAgentType: "/ai-tools/ai-resume-analyzer",
      userEmail: user?.primaryEmailAddress?.emailAddress,
    },
  });

  const runId = resultIds?.ids[0];

  let runStatus;
  while (true) {
    runStatus = await getRuns(runId);
    if (runStatus?.data?.[0]?.status === "Completed") break;
    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  // Safely extract and validate the output
  const output = runStatus?.data?.[0]?.output;
  if (!output) {
    return NextResponse.json(
      { error: "No output received from Inngest" },
      { status: 500 }
    );
  }

  return NextResponse.json(output);
}

export async function getRuns(runId: string) {
  const url = `${process.env.INNGEST_SERVER_HOST}/v1/events/${runId}/runs`;

  const result = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${process.env.INNGEST_SIGNING_KEY}`,
    },
  });

  return result.data;
}
