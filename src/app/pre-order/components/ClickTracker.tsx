"use client";
import { trackAmplitudeData } from "@/utils/amplitude";
import React from "react";

export default function ClickTracker({
  children,
  button,
}: {
  children: React.ReactNode;
  button: string;
}) {
  return (
    <div
      onClick={() => {
        trackAmplitudeData(`click`, {
          button,
        });
      }}
    >
      {children}
    </div>
  );
}
