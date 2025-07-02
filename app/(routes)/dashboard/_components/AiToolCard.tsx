// import { Button } from "@/components/ui/button";
// import { useUser } from "@clerk/nextjs";
// import axios from "axios";
// import Image from "next/image";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import React, { useState } from "react";
// import { v4 as uuidv4 } from "uuid";
// import ResumeUploadDialog from "./ResumeUploadDialog";

// interface TOOL {
//   name: string;
//   desc: string;
//   icon: string;
//   button: string;
//   path: string;
// }

// type AIToolProps = { tool: TOOL };

// function AiToolCard({ tool }: AIToolProps) {
//   const id = uuidv4();

//   const { user } = useUser();
//   const router = useRouter();
//   const [openResumeUpload, setOpenResumeUpload] = useState(false);

//   const onClickButton = async () => {
//     if (tool.name == "AI Resume Analyzer") {
//       setOpenResumeUpload(true);
//       return;
//     }
//     //Create a new record to History Table
//     const result = await axios.post("/api/history", {
//       recordId: id,
//       content: [],
//     });
//     console.log("HISTORY LOGS:", result);
//     router.push(tool.path + "/" + id);
//   };

//   return (
//     <div className="p-3 rounded-lg border">
//       <Image src={tool.icon} alt="icon" width={40} height={40} />
//       <h2 className="font-bold mt-2">{tool.name}</h2>
//       <p className="text-gray-400">{tool.desc}</p>
//       <Link href={tool.path + "/" + id}>
//         <Button
//           onClick={onClickButton}
//           variant={"work1"}
//           className="w-full mt-3"
//         >
//           {tool.button}
//         </Button>
//         <ResumeUploadDialog
//           openResumeUpload={openResumeUpload}
//           setOpenResumeDialog={setOpenResumeUpload}
//         />
//       </Link>
//     </div>
//   );
// }

// export default AiToolCard;

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ResumeUploadDialog from "./ResumeUploadDialog";
import RoadmapGeneratorDialog from "./RoadmapGeneratorDialog";

interface TOOL {
  name: string;
  desc: string;
  icon: string;
  button: string;
  path: string;
}

type AIToolProps = { tool: TOOL };

function AiToolCard({ tool }: AIToolProps) {
  const id = uuidv4();
  const { user } = useUser();
  const router = useRouter();
  const [openResumeUpload, setOpenResumeUpload] = useState(false);
  const [openRoadmapDialog, setOpenRoadmapDialog] = useState(false);

  const onClickButton = async (e: React.MouseEvent) => {
    if (tool.name === "AI Resume Analyzer") {
      e.preventDefault(); // Prevent Link navigation
      setOpenResumeUpload(true); // Open the dialog
      return;
    }
    if (tool.path == "/ai-tools/ai-roadmap-agent") {
      setOpenRoadmapDialog(true);
      return;
    }
    // Create a new record to History Table
    const result = await axios.post("/api/history", {
      recordId: id,
      content: [],
      aiAgentType: tool.path,
    });
    console.log("HISTORY LOGS:", result);
    router.push(tool.path + "/" + id);
  };

  return (
    <div className="p-3 rounded-lg border">
      <Image src={tool.icon} alt="icon" width={40} height={40} />
      <h2 className="font-bold mt-2">{tool.name}</h2>
      <p className="text-gray-400">{tool.desc}</p>
      {/* Conditionally render Link only for non-dialog tools */}
      {tool.name === "AI Resume Analyzer" ||
      tool.name === "Career Roadmap Generator" ? (
        <Button
          onClick={onClickButton}
          variant={"work1"}
          className="w-full mt-3"
        >
          {tool.button}
        </Button>
      ) : (
        <Link href={tool.path + "/" + id}>
          <Button
            onClick={onClickButton}
            variant={"work1"}
            className="w-full mt-3"
          >
            {tool.button}
          </Button>
        </Link>
      )}
      {/* Render ResumeUploadDialog outside Link */}
      <ResumeUploadDialog
        openResumeUpload={openResumeUpload}
        setOpenResumeDialog={setOpenResumeUpload}
      />
      <RoadmapGeneratorDialog
        openDialog={openRoadmapDialog}
        setOpenDialog={() => setOpenRoadmapDialog(false)}
      />
    </div>
  );
}

export default AiToolCard;
