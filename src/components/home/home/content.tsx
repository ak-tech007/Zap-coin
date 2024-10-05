export const Content = () => {
  return (
    <>
      <div
        className="min-[1024px]:absolute top-[150px] max-[1200px]:left-[550px] max-[1150px]:left-[450px] left-[600px] text-white  font-[900] font-sans px-2 py-8 mx-3 
        z-10 rounded-[30px] md:px-5 bg-[#bab2b0c2] ">
        <img
          src={`/title/title1.png`}
          className="w-[200px] max-sm:w-[200px] ml-[10px] pb-[5px]"
        />
        <img src={`/title/title2.png`} className="w-[550px] " />
        <div className="sm:w-[500px] ml-[10px] scale-y-125 leading-7 py-[35px] text-[24px] max-md:text-[20px] proximanova">
          Congratulations! <br />
          You're early to the party! Buy now during the presale to maximize your
          benefits before the price skyrockets!
        </div>
        <img
          src={`/title/title3.png`}
          className="w-[70px] max-sm:w-[70px] pb-2"
        />
        <ul className="ml-[10px] sm:w-[500px] min-[1024px]:w-[400px] scale-y-125 leading-[23px] py-[30px] text-[22px] max-md:text-[18px]">
          <li className="proximanova">
            Better speed. Better utility. The fastest meme coin in the crypto
            space.
          </li>
          <li className="proximanova">• Instant bridging between multiple blockchains</li>
          <li className="proximanova">• Fee-free transfers for ZAP holders</li>
          <li className="proximanova">• High volume capacity—outpacing the competition</li>
          <li className="proximanova">• Dedicated blockchain explorer</li>
          <li className="proximanova">• Dedicated blockchain explorer</li>
          <li
            className="pt-2 text-[#524EEE]"
          >
            What is $ZAP?&nbsp;&nbsp;&nbsp;
            <span className="text-black cursor-pointer underline underline-offset-2  text-[20px]">
              Learn More
            </span>
          </li>
        </ul>
        <div className="hidden">
          ZAPPY was tired of slow, costly transactions holding back the crypto
          world. So, we created ZAP— the fastest meme coin with its own unique
          bridge technology.
        </div>
      </div>
    </>
  );
};
