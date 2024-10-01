import { Content } from "./content";

export const About = () => {
  return (
    <>
      <div id="About" className="relative mt-[4.5vw] z-30">
        <img src="/bg/about.png" className="w-full " />
        <img src="/bg/dress1.png" className="w-full absolute -top-[9%] " />
        <Content />
      </div>
    </>
  );
};
