"use client";
import { trackAmplitudeData } from "@/utils/amplitude";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function ViewTracker() {
  const pathname = usePathname();
  const params = useSearchParams();
  useEffect(() => {
    trackAmplitudeData("view", {
      pathname,
      params,
    });
  }, [params, pathname]);
  return null;
}
