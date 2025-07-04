import { Handle, Position } from "@xyflow/react";
import Link from "next/link";
import React from "react";

function TurboNode({ data }: any) {
  return (
    <div className="rounded-lg border border-gray-300 bg-yellow-300 shadow-md w-64 p-5">
      <div className="font-bold text-lg tetxt-gray-800">{data.title}</div>
      <p className="text-sm text-gray-500 mt-1 line-clamp-2">
        {data.description}
      </p>
      <Link
        target="_blank"
        className="text-blue-600 underline text-sm mt-2 inline-block"
        href={data?.link}
      >
        Learn More
      </Link>
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}

export default TurboNode;
