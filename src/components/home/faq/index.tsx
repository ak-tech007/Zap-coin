import { Content } from "./content";

export const Faq = () => {
  return (
    <>
      <div className=" relative mt-[6.8vw] ">
        <img src="/bg/faq.jpg" className="w-full " />
        <img src="/bg/dress3.png" className="w-full absolute -top-[9vw] " />
        <div id="FAQs" className=" absolute -top-[5%] "></div>
        <div className="absolute top-[8%] left-[15%] w-[43%]">
          <img
            src="/bg/faqdress.png"
            className=""
          />
          <Content />
          <div>aaaa</div>
        </div>
      </div>
    </>
  );
};
