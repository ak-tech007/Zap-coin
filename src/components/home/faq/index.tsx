import { Content } from "./content";

export const Faq = () => {
  return (
    <>
      <div id="FAQs" className=" relative mt-[6.8vw] ">
        <img src="/bg/faq.jpg" className="w-full " />
        <img src="/bg/dress3.png" className="w-full absolute z-10 -top-[9vw] " />
        <div className="absolute top-[8%] left-[15%] w-[43%]">
          <img
            src="/bg/faqdress.png"
            className=""
          />
          <Content />
        </div>
      </div>
    </>
  );
};
