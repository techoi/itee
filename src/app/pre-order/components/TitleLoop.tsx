"use client";
import { useEffect, useState } from "react";

const FADE_IN_OUT_MS = 1000;
const WORD_CHANGE_MS = FADE_IN_OUT_MS * 2;
const TITLES = [
  "IT Workers.",
  "UX Designer.",
  "Graphic Designer.",
  "Motion Designer.",
  "Interaction Designer.",
  "Brand Designer.",
  "Industrial Designer.",
  "FE Developer.",
  "Server Developer.",
  "Software Engineer.",
  "iOS Developer.",
  "Android Developer.",
  "Data Analyst.",
  "Data Scientist.",
  "Data Engineer.",
  "Devops.",
  "QA Engineer.",
  "Product Owner.",
  "Product Manager.",
];

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
    let i = 1;
    const timer = setInterval(() => {
      i++;
      if (i % 10 === 2) {
        setFadeInOut(false);
      }
      if (i % 10 === 9) {
        setFadeInOut(true);
      }
    }, FADE_IN_OUT_MS / 5);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={fadeInOut ? "fade-out" : "fade-in"}>{TITLES[titleIdx]}</div>
  );
}
