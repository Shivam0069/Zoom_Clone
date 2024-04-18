import DateTime from "@/components/DateTime";
import MeetingTypeList from "@/components/MeetingTypeList";
import React from "react";

export default function Home() {
  const now = new Date();
  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
    now
  );
  return (
    <section className="flex text-white size-full flex-col gap-10">
      <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex flex-col h-full justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal ">
            Upcoming Meeting at 12:30 PM
          </h2>
          <DateTime />
        </div>
      </div>
      <MeetingTypeList />
    </section>
  );
}
