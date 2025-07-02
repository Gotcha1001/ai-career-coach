// "use client";
// import FeatureMotionWrapper from "@/app/_components/FramerMotion/FeatureMotionWrapper";
// import { Button } from "@/components/ui/button";
// import axios from "axios";
// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import { aiToolsList } from "./AiTools";
// import Link from "next/link";
// import { Skeleton } from "@/components/ui/skeleton";

// function History() {
//   const [userHistory, setUserHistory] = useState([]);

//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     GetHistory();
//   }, []);

//   const GetHistory = async () => {
//     setLoading(true);
//     const result = await axios.get("/api/history");
//     console.log("RESULTS:", result.data);
//     setUserHistory(result.data);
//     setLoading(false);
//   };

//   const GetAgentName = (path: string) => {
//     const agent = aiToolsList.find((item) => item.path == path);
//     return agent;
//   };

//   return (
//     <div className="mt-5 p-5 border rounded-xl">
//       <h2 className="font-bold text-lg">Previous History</h2>
//       <p>What Your Previously worked on, You can find here</p>
//       {loading && (
//         <div>
//           {[1, 2, 3, 4, 5].map((item, index) => (
//             <div key={index}>
//               <Skeleton className="h-[50px] mt-4 w-full rounded-md bg-blue-300" />
//             </div>
//           ))}
//         </div>
//       )}
//       {userHistory?.length == 0 && !loading ? (
//         <div className="flex items-center justify-center flex-col mt-6">
//           <Image src={"/bulb.png"} alt="bulb" width={50} height={50} />
//           <h2>You Do Not Have Any History</h2>
//           <Button className="mt-5">Explore AI Tools</Button>
//         </div>
//       ) : (
//         <div>
//           {userHistory?.map((history: any, index: number) => (
//             <FeatureMotionWrapper index={index} key={index}>
//               <Link
//                 href={history?.aiAgentType + "/" + history?.recordId}
//                 className="flex justify-between items-center my-3 border p-3 rounded-lg gradient-background2"
//               >
//                 <div className="flex gap-5">
//                   <Image
//                     src={GetAgentName(history?.aiAgentType)?.icon}
//                     alt="icon"
//                     width={20}
//                     height={20}
//                   />
//                   <h2 className="text-white">
//                     {GetAgentName(history?.aiAgentType)?.name}
//                   </h2>
//                 </div>
//                 <h2 className="text-white">{history?.createdAt}</h2>
//               </Link>
//             </FeatureMotionWrapper>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default History;

"use client";
import FeatureMotionWrapper from "@/app/_components/FramerMotion/FeatureMotionWrapper";
import { Button } from "@/components/ui/button";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { aiToolsList } from "./AiToolsList";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";

// Define the shape of an AI tool for better type safety
interface AiTool {
  path: string;
  name: string;
  icon: string; // Ensure icon is always a string
}

function History() {
  const [userHistory, setUserHistory] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    GetHistory();
  }, []);

  const GetHistory = async () => {
    setLoading(true);
    try {
      const result = await axios.get("/api/history");
      console.log("RESULTS:", result.data);
      setUserHistory(result.data);
    } catch (error) {
      console.error("Error fetching history:", error);
    } finally {
      setLoading(false);
    }
  };

  const GetAgentName = (path?: string): AiTool => {
    // Default fallback agent with a valid icon
    const defaultAgent: AiTool = {
      path: "",
      name: "Unknown Agent",
      icon: "/bulb.png", // Provide a default icon path
    };

    if (!path) return defaultAgent;
    const agent = aiToolsList.find((item) => item.path === path);
    return agent || defaultAgent;
  };

  return (
    <div className="mt-5 p-5 border rounded-xl">
      <h2 className="font-bold text-lg">Previous History</h2>
      <p>What Your Previously worked on, You can find here</p>
      {loading && (
        <div>
          {[1, 2, 3, 4, 5].map((item, index) => (
            <div key={index}>
              <Skeleton className="h-[50px] mt-4 w-full rounded-md bg-blue-300" />
            </div>
          ))}
        </div>
      )}
      {userHistory?.length === 0 && !loading ? (
        <div className="flex items-center justify-center flex-col mt-6">
          <Image src="/bulb.png" alt="bulb" width={50} height={50} />
          <h2>You Do Not Have Any History</h2>
          <Button className="mt-5">Explore AI Tools</Button>
        </div>
      ) : (
        <div>
          {userHistory?.map((history: any, index: number) => (
            <FeatureMotionWrapper index={index} key={index}>
              <Link
                href={`${history?.aiAgentType}/${history?.recordId}`}
                className="flex justify-between items-center my-3 border p-3 rounded-lg gradient-background2"
              >
                <div className="flex gap-5">
                  <Image
                    src={GetAgentName(history?.aiAgentType).icon} // No optional chaining needed
                    alt="icon"
                    width={20}
                    height={20}
                  />
                  <h2 className="text-white">
                    {GetAgentName(history?.aiAgentType).name}
                  </h2>
                </div>
                <h2 className="text-white">{history?.createdAt}</h2>
              </Link>
            </FeatureMotionWrapper>
          ))}
        </div>
      )}
    </div>
  );
}

export default History;
