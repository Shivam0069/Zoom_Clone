import { SignIn } from "@clerk/nextjs";
import React from "react";

export default function SignInPage() {
  return (
    <main className="h-screen flex-center w-full">
      <SignIn />
    </main>
  );
}
