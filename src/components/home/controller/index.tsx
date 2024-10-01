"use client";

import { useEffect, useState } from "react";
import { Item } from "./item";

export const Controller = () => {
  const [scrollPercentage, setScrollPercentage] = useState<number>(0);
  const [show, setShow] = useState<boolean>(false);
  const [showItem, setShowItem] = useState<boolean>(false);
  const [isInsideItem, setIsInsideItem] = useState<boolean>(false);
  const [isInsideBtn, setIsInsideBtn] = useState<boolean>(false);
  const scrollToSection = (label: string) => {
    const element = document.getElementById(label);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollY = window.scrollY;

    const scrollPercent = (scrollY / (documentHeight - windowHeight)) * 100;
    setScrollPercentage(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(scrollPercentage);
  useEffect(() => {
    if (scrollPercentage >= 15) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [scrollPercentage]);
  //visible controller items
  useEffect(() => {
    if (isInsideItem || isInsideBtn) {
      setShowItem(true);
    }
    if (!isInsideBtn) {
      if (isInsideItem) {        
        return;
      }
      setTimeout(() => {
        setShowItem(false);
      }, 2000);
    }
  }, [isInsideBtn, isInsideItem]);
  return (
    <>
      {show && (
        <div className="fixed bottom-[3vw] right-[2vw] flex flex-col items-center gap-[1vw]">
          {showItem && (
            <div
              onMouseEnter={() => setIsInsideItem(true)}
              onMouseLeave={() => setIsInsideItem(false)}
              className="flex flex-col items-center"
            >
              <Item label={"About"} />
              <Item label={"Tokenomics"} />
              <Item label={"Roadmap"} />
              <Item label={"FAQs"} />
              <Item label={"HowToBuy"} />
            </div>
          )}
          <button
            onMouseEnter={() => setIsInsideBtn(true)}
            onMouseLeave={() => setIsInsideBtn(false)}
            onClick={() => scrollToSection("About")}
            className="  animate-bounce bg-white dark:bg-slate-800 p-[0.4vw] w-[2.5vw] h-[2.5vw] ring-4 ring-slate-900/30 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center"
          >
            <svg
              className="w-6 h-6 text-violet-500"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
            </svg>
          </button>
        </div>
      )}
    </>
  );
};
