export const Buy = () => {
  return (
    <>
      <div className=" relative mt-[2vw]">
        <img src="/bg/buy.jpg" className="w-full " />
        <img src="/bg/dress4.png" className="w-full absolute -top-[9vw] " />
        <div
          id="How To Buy"
          className=" w-[60vw] absolute top-[7vw]  left-[20vw] text-[#073736] "
        >
          <img src="/bg/buy.png" />
          <div
            className="absolute top-[20%] left-[23%] right-[23%] bottom-[30%] flex flex-col justify-between text-[1.3vw] text-white font-sans font-[900] scale-y-125 leading-[1.6vw] pt-[2vw] pb-[4vw]"
            style={{
              textShadow:
                "0.1vw 0.1vw 0 #080807, -0.1vw -0.1vw 0 #080807, -0.1vw 0.1vw 0 #080807, 0.1vw -0.1vw 0 #080807",
              WebkitTextStroke: "0.1vw #080807",
            }}
          >
            <p>
              If you already have a compatible wallet–go to step 2. f not, we
              suggest Metamask for desktop. On mobile, we recommend Best Wallet:
              Simply download the app to get started!
            </p>
            <p>
              Paying by card? Go to step 3. If paying by crypto, load your fave
              crypto onto your wallet. ETH, USDT, and BNB are accepted.
            </p>
            <p>
              Want MOAR GAINZZZZ? Connect your wallet to the website. Choose a
              payment method. Choose the amount of $ZAP you want to buy–then Buy
              or Buy and Stake for max gainz.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
