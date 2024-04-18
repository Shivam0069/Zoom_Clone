"use client";
import React, { useEffect, useState } from "react";

export default function DateTime() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      if (now.getMinutes() !== currentTime.getMinutes()) {
        setCurrentTime(now);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [currentTime]);

  const time = currentTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
    currentTime
  );
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-4xl lg:text-7xl font-extrabold">{time}</h1>
      <p className="text-lg lg:text-2xl font-medium text-sky-1">{date}</p>
    </div>
  );
}
