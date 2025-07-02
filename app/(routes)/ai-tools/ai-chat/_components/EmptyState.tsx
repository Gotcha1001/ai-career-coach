import FeatureMotionWrapper from "@/app/_components/FramerMotion/FeatureMotionWrapper";
import React from "react";

const questionList = [
  "What skills do I need for a Data Analyst Role?",
  "How do I switch careers to UX design?",
];

function EmptyState({ selectedQuestion }: any) {
  return (
    <div>
      <h2 className="font-bold text-xl text-center">
        Ask Anthing To The AI Career Agent
      </h2>
      <div>
        {questionList.map((question, index) => (
          <FeatureMotionWrapper index={index} key={index}>
            <h2
              className="p-4 text-center border rounded-lg my-3 hover:border-purple-900 cursor-pointer"
              onClick={() => selectedQuestion(question)}
            >
              {question}
            </h2>
          </FeatureMotionWrapper>
        ))}
      </div>
    </div>
  );
}

export default EmptyState;
