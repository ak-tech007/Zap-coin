import { Content } from "./content";

export const About = () => {
  return (
    <>
      <div id="About" className="relative mt-[4.5vw]">
        <img src="/bg/about.jpg" className="w-full " />
        <img src="/bg/dress1.png" className="w-full absolute -top-[9%] " />
        <Content />
      </div>
    </>
  );
};
