import { About } from "../about";
import { Tokenomics } from "../tokenomics";

export const About_token = () => {
  return (
    <>
      <div id="About" className="-mt-2 relative h-[2000px] max-sm:h-[1700px] max-[390px]:h-[1770px]  about_token">
        <About />
        <Tokenomics />
      </div>
    </>
  );
};
