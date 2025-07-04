"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import RoadmapCanvas from "./_components/RoadmapCanvas";
import RoadmapGeneratorDialog from "@/app/(routes)/dashboard/_components/RoadmapGeneratorDialog";

function RoadmapGeneratorAgent() {
  const { roadmapid } = useParams();
  const [roadMapDetail, setRoadMapDetail] = useState<any>();
  const [openRoadmapDialog, setOpenRoadmapDialog] = useState(false);

  useEffect(() => {
    roadmapid && GetRoadmapDetails();
  }, [roadmapid]);

  const GetRoadmapDetails = async () => {
    const result = await axios.get("/api/history?recordId=" + roadmapid);
    console.log("GET🤩:", result.data);
    setRoadMapDetail(result.data?.content);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      <div className="border rounded-xl p-5 bg-gradient-to-bl from-indigo-500 via-purple-900 to-blue-600">
        <h2 className="font-bold text-2xl">{roadMapDetail?.roadmapTitle}</h2>
        <p className="mt-3 text-gray-400">
          <strong>Description:</strong> <br></br>
          {roadMapDetail?.description}
        </p>
        <h2 className="mt-5 font-medium text-blue-400">
          Duration: {roadMapDetail?.duration}
        </h2>
        <Button
          onClick={() => setOpenRoadmapDialog(true)}
          className="mt-5 w-full"
          variant={"work"}
        >
          + Create Another Roadmap
        </Button>
      </div>
      <div className="md:col-span-2 w-full h-[80vh]">
        <RoadmapCanvas
          initialNodes={roadMapDetail?.initialNodes}
          initialEdges={roadMapDetail?.initialEdges}
        />
      </div>
      <RoadmapGeneratorDialog
        openDialog={openRoadmapDialog}
        setOpenDialog={() => setOpenRoadmapDialog(false)}
      />
    </div>
  );
}

export default RoadmapGeneratorAgent;
