// import { About } from "@/components/home/about";
import { Buy } from "@/components/home/buy";
import { Faq } from "@/components/home/faq";
import { Roadmap } from "@/components/home/roadmap";
import Home from "@/components/home/home/index";
// import { Tokenomics } from "@/components/home/tokenomics";
import { Controller } from "@/components/home/controller";
import { About_token } from "@/components/home/about_token";

const Homepage = () => {
  return (
    <>
    <div className="relative">
      <Home />
      {/* <About /> */}
      {/* <Tokenomics /> */}
      <About_token />
      <Roadmap />
      <Faq />
      <Buy />
      <Controller />
    </div>
    </>
  );
};
export default Homepage;
