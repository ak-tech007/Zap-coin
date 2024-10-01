import { About } from "@/components/home/about";
import { Buy } from "@/components/home/buy";
import { Faq } from "@/components/home/faq";
import { Roadmap } from "@/components/home/roadmap";
import Stacking from "@/components/home/home/index";
import { Tokenomics } from "@/components/home/tokenomics";

const Home = () => {
  return (
    <>
      <Stacking />
      <About />
      <Tokenomics />
      <Roadmap />
      <Faq />
      <Buy />
    </>
  );
};
export default Home;
