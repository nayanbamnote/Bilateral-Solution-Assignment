"use client";

import React from "react";
import UserRegistrationForm from "@/components/UserRegistration/UserRegistrationForm";

export default function Home() {
  return (
    <div className="flex-col pb-3 min-h-screen w-full bg-black bg-grid-small-white/[0.2] relative flex items-center justify-center">
      <p className="text-4xl sm:text-5xl text-center font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        Bilateral Solutions Assignment:
      </p>
      <UserRegistrationForm />
    </div>
  );
}