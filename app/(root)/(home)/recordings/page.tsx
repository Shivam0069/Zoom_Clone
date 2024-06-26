import CallList from "@/components/CallList";
import React from "react";

export default function Recordings() {
  return (
    <section className="flex text-white size-full flex-col gap-10">
      <h1 className="text-3xl font-bold">Recordings</h1>
      <CallList type="recordings" />
    </section>
  );
}
