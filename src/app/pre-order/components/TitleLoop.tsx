"use client";
import { useEffect, useState } from "react";
import { css } from "../../../../styled-system/css";

const FADE_IN_OUT_MS = 1000;
const WORD_CHANGE_MS = FADE_IN_OUT_MS * 2;
const TITLES = ["UX Designer", "Developer", "Data Analyst", "Product Owner"];
export default function TitleLoop() {
  const [titleIdx, setTitleIdx] = useState(0);
  const [fadeInOut, setFadeInOut] = useState(false);
  useEffect(() => {
    const timer = setInterval(() => {
      setTitleIdx((prev) => (prev < TITLES.length - 1 ? prev + 1 : 0));
    }, WORD_CHANGE_MS);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setFadeInOut((prev) => !prev);
    }, FADE_IN_OUT_MS);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={fadeInOut ? "fade-out" : "fade-in"}>{TITLES[titleIdx]}</div>
  );
}
