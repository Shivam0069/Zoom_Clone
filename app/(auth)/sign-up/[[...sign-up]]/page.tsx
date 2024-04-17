import { SignUp } from "@clerk/nextjs";
import React from "react";

export default function SignUpPage() {
  return (
    <main className="h-screen flex-center w-full">
      <SignUp />
    </main>
  );
}
