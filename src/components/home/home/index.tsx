"use client";
import { NavButton } from "./navButton";
import { Content } from "./content";
import { Tokenpayment } from "./tokenpayment";
import { HiddenBar } from "./hiddenBar";
import { LinkIcon } from "./linkIcon";
import { useAtom } from "jotai";
import { navHiddenAtom } from "@/store";
import { MenuIcon } from "./menuIcon";

const Home = () => {
  const [, setShow] = useAtom<boolean>(navHiddenAtom);
  return (
    <>
      <div id="Home" className=" relative h-svh home">
        <img
          src="/bg/zap.png"
          className=" absolute top-[1%] left-[5%] w-[200px] cursor-pointer"
        />
        <div className="absolute flex flex-wrap  top-[3.5%] left-[23%] right-[10%] gap-[1.5vw] max-[1700px]:hidden  ">
          <NavButton label="Stacking" />
          <NavButton label="About" />
          <NavButton label="How To Buy" />
          <NavButton label="Tokenomics" />
          <NavButton label="Roadmap" />
          <NavButton label="FWB" />
          <NavButton label="FAQs" />
          <NavButton label="White Paper" />
        </div>
        <MenuIcon />
        <HiddenBar />
        <div className=" absolute top-7 right-14 flex gap-2 max-sm:hidden">
          <LinkIcon />
        </div>
        <Content />
        <Tokenpayment></Tokenpayment>
      </div>
    </>
  );
};
export default Home;
