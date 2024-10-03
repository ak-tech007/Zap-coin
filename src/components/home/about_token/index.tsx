import { About } from "../about";
import { Tokenomics } from "../tokenomics";

export const About_token = () => {
  return (
    <>
      <div id="About" className=" relative h-[240vh] -mt-2 about_token">
        <About />
        <Tokenomics />
      </div>
    </>
  );
};
