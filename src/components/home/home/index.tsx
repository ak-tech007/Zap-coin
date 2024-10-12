"use client";
import { NavButton } from "./navButton";
import { Content } from "./content";
import { HiddenBar } from "./hiddenBar";
import { LinkIcon } from "./linkIcon";
import { useAtom } from "jotai";
import { navHiddenAtom } from "@/store";
import { MenuIcon } from "./menuIcon";
import Form from "../../form"
import { Logo } from "./logo";
import { Buybutton } from "./buyicon";
import { Paymentform } from "./paymentform";
import { Fistpage } from "./firstpage";

const Home = () => {
  
  return (
    <>
      <div id="Home" className=" relative h-[1100px] home overflow-hidden">
        <div className="flex justify-between items-center pt-5 px-5">
            <Logo />
          <div className="flex w-[70%] justify-end gap-10 items-center max-[1380px]:hidden">
            <div className="w-[60%] flex justify-between">
              <NavButton label="About" />
              <NavButton label="How To Buy" />
              <NavButton label="Tokenomics" />
              <NavButton label="Roadmap" />
              <NavButton label="FAQs" />
            </div>
            <LinkIcon />
            <Buybutton />
          </div>
            <MenuIcon />
            <HiddenBar />
        </div>
        <div className="w-full -mt-10">
          <img className="w-full" src="/bg/dress5.png"></img>
        </div>
        <div className="flex justify-start gap-8 pl-20">
          <Form />
          <Fistpage />
        </div>
        <img src="/bg/ZAP.gif" className="absolute top-[230px] lg:top-[180px] xl:top-[210px] 2xl:top-[275px] right-[-6%] w-[71%] h-auto"></img>
      </div>
    </>
  );
};
export default Home;
