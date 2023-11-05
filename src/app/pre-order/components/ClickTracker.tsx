"use client";
import { trackAmplitudeData } from "@/utils/amplitude";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function ClickTracker({
  children,
  button,
}: {
  children: React.ReactNode;
  button: string;
}) {
  const params = useSearchParams();
  return (
    <div
      onClick={() => {
        trackAmplitudeData(`click`, {
          button,
          params,
        });
      }}
    >
      {children}
    </div>
  );
}
