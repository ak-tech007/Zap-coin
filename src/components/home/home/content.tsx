export const Content = () => {
  return (
    <>
      <div
        className="min-[1024px]:absolute top-[130px] left-[600px] text-white  font-extrabold font-sans px-2 py-8 mx-3 z-10 rounded-[30px] md:px-5 max-lg:bg-[#08080865]"
        style={{
          WebkitTextStroke: "0.1vw black",
          // textShadow:
          //   "0.1vw 0.1vw 0 black, -0.1vw -0.1vw 0 black, -0.1vw 0.1vw 0 black, 0.1vw -0.1vw 0 black",
        }}
      >
        <img src={`/title/title1.png`} className="w-[300px] max-sm:w-[200px] ml-[10px] pb-[5px]" />
        <img src={`/title/title2.png`} className="w-[450px] max-sm:w-[300px]" />
        <div className="sm:w-[500px] ml-[10px] scale-y-125 leading-7 py-[35px] text-[29px] ">
          Congrats! You're early to the party!
          <br /> Buy and Stake now during Presale to max out your rewards before
          the price skyrockets!
        </div>
        <img src={`/title/title3.png`} className="w-[350px] max-sm:w-[250px]" />
        <ul className="ml-[10px] w-[350px] max-sm:w-[320px] scale-y-125 leading-[23px] py-[30px] text-[23px]">
          <li>Better speed. Better gains. Same delicious Pepe flavor.</li>
          <li>-Instant bridging between ETH and ZAP Chain</li>
          <li>-Lowest transaction fees</li>
          <li>-Higher Volume Capacity 100x faster Than ETH</li>
          <li>-Dedicated Block Explorer</li>
        </ul>
      </div>
    </>
  );
};
