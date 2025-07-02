import { inngest } from "@/inngest/client";
import { currentUser } from "@clerk/nextjs/server";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

// export async function POST(req: NextRequest) {
//   const { roadmapId, userInput } = await req.json();
//   const user = await currentUser();

//   const resultIds = await inngest.send({
//     name: "AIRoadmapAgent",
//     data: {
//       userInput: userInput,
//       roadmapId: roadmapId,
//       userEmail: user?.primaryEmailAddress?.emailAddress,
//     },
//   });

//   const runId = resultIds?.ids[0];

//   let runStatus;

//   //Use Polling to check run status

//   while (true) {
//     runStatus = await getRuns(runId);
//     if (runStatus?.data?.[0]?.status === "Completed") break;
//     await new Promise((resolve) => setTimeout(resolve, 500));
//   }

//   return NextResponse.json(runStatus.data?.[0].output?.output[0]);
// }

export async function POST(req: NextRequest) {
  const { roadmapId, userInput } = await req.json();
  const user = await currentUser();

  const resultIds = await inngest.send({
    name: "AIRoadmapAgent",
    data: {
      userInput: userInput,
      roadmapId: roadmapId,
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

  // Extract the parsed JSON from the output
  const output = runStatus.data?.[0]?.output;
  if (!output) {
    return NextResponse.json({ error: "No output found" }, { status: 500 });
  }
  // Sanitize the output to ensure it’s JSON-serializable
  const sanitizedOutput = JSON.parse(
    JSON.stringify(output, (key, value) => {
      if (
        typeof value === "function" ||
        value === undefined ||
        value === null
      ) {
        return undefined; // Remove non-serializable values
      }
      return value;
    })
  );

  return NextResponse.json(sanitizedOutput);
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
