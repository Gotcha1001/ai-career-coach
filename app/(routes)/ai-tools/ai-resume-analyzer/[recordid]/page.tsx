"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Report from "./_components/Report";

function AiResumeAnalyzer() {
  const { recordid } = useParams();
  const [pdfUrl, setPdfUrl] = useState();
  const [aiReport, setAiReport] = useState<any>();

  useEffect(() => {
    recordid && GetResumeAnalyzerRecord();
  }, [recordid]);

  const GetResumeAnalyzerRecord = async () => {
    const result = await axios.get("/api/history?recordId=" + recordid);
    console.log("GET🤩:", result.data);
    setPdfUrl(result.data?.metaData);
    setAiReport(result.data?.content);
  };

  return (
    <div className="grid lg:grid-cols-5 gap-4">
      <div className="col-span-2">
        <Report aiReport={aiReport} />
      </div>
      <div className="col-span-3 gradient-background2">
        <h2 className="font-bold mb-5 text-4xl text-center gradient-title">
          Resume Preview
        </h2>
        <iframe
          src={pdfUrl + "#toolbar=0&navpanes=0&scrollbar=0"}
          width={"100%"}
          height={1200}
          className="min-w-lg"
          style={{
            border: "none",
          }}
        />
      </div>
    </div>
  );
}

export default AiResumeAnalyzer;
