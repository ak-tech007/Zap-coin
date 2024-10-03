import { About } from "../about";
import { Tokenomics } from "../tokenomics";

export const About_token = () => {
  return (
    <>
      <div id="About" className=" relative h-[240vh] max-[1000px]:h-[160vh]  about_token">
        <img src="/bg/dress1.png" className="absolute -top-3"/>
        <About />
        <Tokenomics />
      </div>
    </>
  );
};
