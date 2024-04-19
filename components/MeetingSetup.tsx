"use client";
import {
  DeviceSettings,
  VideoPreview,
  useCall,
} from "@stream-io/video-react-sdk";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

export default function MeetingSetup({
  setIsSetupComplete,
}: {
  setIsSetupComplete: (value: boolean) => void;
}) {
  const [isMicCamToggledOn, setIsMicCamToggledOn] = useState(false);
  const call = useCall();
  if (!call)
    throw new Error("useCall must be used within StreamCall component");
  useEffect(() => {
    if (isMicCamToggledOn) {
      call?.camera.disable();
      call?.microphone.disable();
    } else {
      call?.camera.enable();
      call?.microphone.enable();
    }
  }, [isMicCamToggledOn, call?.camera, call?.microphone]);
  return (
    <div className="flex flex-col justify-center items-center gap-3 text-white h-screen w-full">
      <h1 className="font-bold text-2xl mt-10">Setup</h1>
      <VideoPreview
      // mirror={true}
      // className="max-h-[500px] max-w-[500px] md:max-w-[700px] md:max-h-[700px]  border mx-2 md:mx-auto"
      />
      <div className="flex h-16 items-center justify-center gap-3">
        <label className="flex-center gap-2 font-medium px-4 text-sm">
          <input
            type="checkbox"
            checked={isMicCamToggledOn}
            onChange={(e) => setIsMicCamToggledOn(e.target.checked)}
          />
          Join with Camera and Microphone Enabled
        </label>
        <DeviceSettings />
      </div>
      <Button
        onClick={() => {
          call.join();
          setIsSetupComplete(true);
        }}
        className="rounded-md bg-green-500 px-4 py-2.5"
      >
        Join Meeting
      </Button>
    </div>
  );
}
