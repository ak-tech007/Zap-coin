"use client";
import { useRouter } from "next/navigation";
import { NavButton } from "./navButton";
import { Content } from "./content";
import { Tokenpayment } from "./tokenpayment";

const Stacking = () => {
  const router = useRouter();
  return (
    <>
      <div className=" relative ">
        <img src="/bg/stacking.jpg" className="w-full" />
        <div className="absolute flex  top-[3.5%] left-[20%] gap-[1.5vw] ">
          <NavButton label="Stacking" />
          <NavButton label="About" />
          <NavButton label="How To Buy" />
          <NavButton label="Tokenomics" />
          <NavButton label="Roadmap" />
          <NavButton label="FWB" />
          <NavButton label="FAQs" />
          <NavButton label="White Paper" />
          <img
            src="/icon/TIcon.png"
            className="w-[3vw] h-[3vw] cursor-pointer hover:scale-105"
            onClick={() => router.push("https://web.telegram.org")}
          />
          <img
            src="/icon/XIcon.png"
            className="w-[3vw] h-[3vw] cursor-pointer hover:scale-105"
            onClick={() => router.push("https://web.telegram.org")}
          />
        </div>
        <Content />
        <Tokenpayment></Tokenpayment>
        <button className="w-[8vw] h-[5.5vw] absolute top-[1%] left-[10%]"></button>
      </div>
    </>
  );
};
export default Stacking;
