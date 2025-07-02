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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2Icon, SparkleIcon } from "lucide-react";
import axios from "axios";
import { v4 } from "uuid";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";

function RoadmapGeneratorDialog({ openDialog, setOpenDialog }: any) {
  const [userInput, setUserInput] = useState<string>();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { has } = useAuth();

  const GenerateRoadmap = async () => {
    const roadmapId = v4();
    setLoading(true);
    try {
      //@ts-ignore
      const hasSubscriptionEnabled = await has({ plan: "pro" });
      if (!hasSubscriptionEnabled) {
        const resultHistory = await axios.get("/api/history");
        const historyList = resultHistory.data;
        const isPresent = await historyList.find(
          (item: any) => item?.aiAgentType == "/ai-tools/ai-roadmap-agent"
        );
        router.push("/billing");
        if (isPresent) {
          return null;
        }
      }

      const result = await axios.post("/api/ai-roadmap-agent", {
        roadmapId: roadmapId,
        userInput: userInput,
      });
      console.log("ROAD:", result.data);
      router.push("/ai-tools/ai-roadmap-agent/" + roadmapId);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log("Error:", e);
    }
  };

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      {/* <DialogTrigger>Open</DialogTrigger> */}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Enter Position/Skills to Generate Roadmap</DialogTitle>
          <DialogDescription asChild>
            <div className="mt-2">
              <Input
                onChange={(event) => setUserInput(event?.target.value)}
                placeholder="eg. Full Stack Developer"
              />
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant={"work"}>Cancel</Button>
          <Button
            disabled={loading || !userInput}
            onClick={GenerateRoadmap}
            variant={"work2"}
          >
            {loading ? (
              <Loader2Icon className="animate-spin" />
            ) : (
              <SparkleIcon />
            )}
            Generate
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default RoadmapGeneratorDialog;
