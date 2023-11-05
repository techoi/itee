"use client";

import { initAmplitude } from "@/utils/amplitude";
import { ReactNode, useEffect } from "react";

export default function Provider({ children }: { children: ReactNode }) {
  useEffect(() => {
    initAmplitude();
  }, []);
  return <>{children}</>;
}
