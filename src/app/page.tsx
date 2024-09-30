import { About } from "@/components/home/about";
import { Buy } from "@/components/home/buy";
import { Faq } from "@/components/home/faq";
import { Roadmap } from "@/components/home/roadmap";
import Stacking from "@/components/home/stacking/index";

const Home = () => {
  return (
    <>
      <Stacking />
      <About />
      <Roadmap />
      <Faq />
      <Buy />
    </>
  );
};
export default Home;
