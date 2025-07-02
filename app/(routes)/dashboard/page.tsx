"use client";
import React from "react";
import WelcomeBanner from "./_components/WelcomeBanner";
import MotionWrapperDelay from "@/app/_components/FramerMotion/MotionWrapperDelay";
import AiTools from "./_components/AiToolsList";
import History from "./_components/History";

function Dashboard() {
  return (
    <div>
      <MotionWrapperDelay
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 1 }}
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <WelcomeBanner />
      </MotionWrapperDelay>
      <AiTools />
      <History />
    </div>
  );
}

export default Dashboard;
