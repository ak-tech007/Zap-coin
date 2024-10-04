import { About } from "../about";
import { Tokenomics } from "../tokenomics";

export const About_token = () => {
  return (
    <>
      <div id="About" className=" relative h-[2000px] max-sm:h-[1700px] max-[390px]:h-[1770px]  about_token">
        <img src="/bg/dress1.png" className="absolute -top-3"/>
        <About />
        <Tokenomics />
      </div>
    </>
  );
};
