export const Content = () => {
  return (
    <>
      <div
        className="min-[1024px]:absolute top-[130px] max-[1200px]:left-[550px] max-[1150px]:left-[450px] left-[600px] text-white  font-extrabold font-sans px-2 py-8 mx-3 
        z-10 rounded-[30px] md:px-5 bg-[#bab2b0c2] "
        style={{
          WebkitTextStroke: "0.1vw black",
          // textShadow:
          //   "0.1vw 0.1vw 0 black, -0.1vw -0.1vw 0 black, -0.1vw 0.1vw 0 black, 0.1vw -0.1vw 0 black",
        }}
      >
        <img
          src={`/title/title1.png`}
          className="w-[250px] max-sm:w-[200px] ml-[10px] pb-[5px]"
        />
        <img src={`/title/title2.png`} className="w-[450px] max-sm:w-[300px]" />
        <div className="sm:w-[500px] ml-[10px] scale-y-125 leading-7 py-[35px] text-[24px] ">
          Congratulations! <br />
          You're early to the party! Buy now during the presale to maximize your
          benefits before the price skyrockets!
        </div>
        <img src={`/title/title3.png`} className="w-[350px] max-sm:w-[250px]" />
        <ul className="ml-[10px] sm:w-[500px] min-[1024px]:w-[400px] scale-y-125 leading-[23px] py-[30px] text-[20px]">
          <li>
            Better speed. Better utility. The fastest meme coin in the crypto
            space.
          </li>
          <li>• Instant bridging between multiple blockchains</li>
          <li>• Fee-free transfers for ZAP holders</li>
          <li>• High volume capacity—outpacing the competition</li>
          <li>• Dedicated blockchain explorer</li>
          <li>• Dedicated blockchain explorer</li>
        </ul>
        <li>
          What is $ZAP?
          <span className="text-black cursor-pointer underline underline-offset-2 ">
            Learn More
          </span>
        </li>
        <div className="hidden">
          ZAPPY was tired of slow, costly transactions holding back the crypto
          world. So, we created ZAP— the fastest meme coin with its own unique
          bridge technology.
        </div>
      </div>
    </>
  );
};
