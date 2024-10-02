import { About } from "@/components/home/about";
import { Buy } from "@/components/home/buy";
import { Faq } from "@/components/home/faq";
import { Roadmap } from "@/components/home/roadmap";
import Home from "@/components/home/home/index";
import { Tokenomics } from "@/components/home/tokenomics";
import { Controller } from "@/components/home/controller";

const Homepage = () => {
  return (
    <>
      <Home />
      <About />
      <Tokenomics />
      <Roadmap />
      <Faq />
      <Buy />
      <Controller />
    </>
  );
};
export default Homepage;
