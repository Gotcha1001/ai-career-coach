// import React from "react";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { File } from "lucide-react";

// function ResumeUploadDialog({ openResumeUpload, setOpenResumeDialog }: any) {
//   return (
//     <Dialog open={openResumeUpload} onOpenChange={setOpenResumeDialog}>
//       {/* <DialogTrigger>Open</DialogTrigger> */}
//       <DialogContent>
//         <DialogHeader>
//           <DialogTitle>Upload reume PDF File</DialogTitle>
//           <DialogDescription asChild>
//             <div>
//               <label
//                 htmlFor="resumerUpload"
//                 className="flex items-center flex-col justify-center p-7 border border-dashed rounded-2xl hover:bg-slate-400 cursor-pointer"
//               >
//                 <File className="h-10 w-10" />
//                 <h2 className="mt-3">Click Here To Upload PDF File</h2>
//               </label>
//               <input type="file" id="resumeUpload" className="opacity-0" />
//             </div>
//           </DialogDescription>
//         </DialogHeader>
//       </DialogContent>
//     </Dialog>
//   );
// }

// export default ResumeUploadDialog;

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { File, Loader2Icon, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";

function ResumeUploadDialog({ openResumeUpload, setOpenResumeDialog }: any) {
  const [file, setFile] = useState<any>();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { has } = useAuth();

  const onFileChange = (event: any) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("File:", file.name);
      setFile(file);
    }
  };

  // const onUploadAndAnalyze = async () => {
  //   setLoading(true);
  //   const recordId = uuidv4();
  //   const formData = new FormData();
  //   formData.append("recordId", recordId);
  //   formData.append("resumeFile", file);
  //   // formData.append("aiAgentType", "/ai-tools/ai-resume-analyzer");

  //   //Send FormData to Backend Server
  //   const result = await axios.post("/api/ai-resume-agent", formData);
  //   console.log("PDF RESULT:", result.data);
  //   setLoading(false);
  //   router.push("/ai-tools/ai-resume-analyzer/" + recordId);
  //   setOpenResumeDialog(false);
  // };

  const onUploadAndAnalyze = async () => {
    setLoading(true);
    const recordId = uuidv4();
    const formData = new FormData();
    formData.append("recordId", recordId);
    formData.append("resumeFile", file);

    // @ts-ignore
    const hasSubscriptionEnabled = await has({ plan: "pro" });
    if (!hasSubscriptionEnabled) {
      const resultHistory = await axios.get("/api/history");
      const historyList = resultHistory.data;
      const isPresent = await historyList.find(
        (item: any) => item?.aiAgentType == "/ai-tools/ai-resume-analyzer"
      );
      router.push("/billing");
      if (isPresent) {
        return null;
      }
    }

    try {
      const result = await axios.post("/api/ai-resume-agent", formData);
      console.log("PDF RESULT:", result.data);
      setLoading(false);
      router.push("/ai-tools/ai-resume-analyzer/" + recordId);
      setOpenResumeDialog(false);
    } catch (error) {
      console.error("Error uploading resume:", error);
      setLoading(false);
      // Optionally show an error message to the user
      alert("Failed to analyze resume. Please try again.");
    }
  };

  return (
    <Dialog open={openResumeUpload} onOpenChange={setOpenResumeDialog}>
      {/* <DialogTrigger>Open</DialogTrigger> */}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload reume PDF File</DialogTitle>
          <DialogDescription asChild>
            <div>
              <label
                htmlFor="resumeUpload"
                className="flex items-center flex-col justify-center p-7 border border-dashed rounded-2xl hover:bg-slate-400 cursor-pointer"
              >
                <File className="h-10 w-10" />
                {file ? (
                  <h2 className="mt-3 text-blue-600">{file.name}</h2>
                ) : (
                  <h2 className="mt-3">Click Here To Upload PDF File</h2>
                )}
              </label>
              <input
                type="file"
                id="resumeUpload"
                accept="application/pdf"
                className="hidden"
                onChange={onFileChange}
              />
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant={"outline"}>Cancel</Button>
          <Button
            disabled={!file || loading}
            onClick={onUploadAndAnalyze}
            variant={"work1"}
          >
            {loading ? <Loader2Icon className="animate-spin" /> : <Sparkles />}
            Upload & Analyze
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ResumeUploadDialog;
