import Image from "next/image";
import React from "react";

export default function Loader() {
  return (
    <div className="h-screen w-full flex-center">
      <Image
        src="/icons/loading-circle.svg"
        alt="Loading"
        width={50}
        height={50}
      />
    </div>
  );
}
