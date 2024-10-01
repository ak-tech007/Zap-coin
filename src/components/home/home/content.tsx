export const Content = () => {
  return (
    <>
      <div
        className="absolute top-[15%] left-[30%] text-white  font-extrabold font-sans z-10"
        style={{
          WebkitTextStroke: "0.1vw black",
          // textShadow:
          //   "0.1vw 0.1vw 0 black, -0.1vw -0.1vw 0 black, -0.1vw 0.1vw 0 black, 0.1vw -0.1vw 0 black",
        }}
      >
        <img src={`/title/title1.png`} className="w-[20%] ml-[2%] pb-[0.3%]" />
        <img src={`/title/title2.png`} className="w-[36vw]" />
        <div className="w-[30vw] ml-[2%] scale-y-125 leading-[2vw] py-[1.3vw] text-[1.5vw]">
          Congrats! You're early to the party!
          <br /> Buy and Stake now during Presale to max out your rewards before
          the price skyrockets!
        </div>
        <img src={`/title/title3.png`} className="w-[30%]" />
        <ul className="ml-[2%] w-[20vw] scale-y-125 leading-[1.8vw] py-[2vw] text-[1.3vw]">
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
