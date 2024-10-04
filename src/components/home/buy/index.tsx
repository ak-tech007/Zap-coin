export const Buy = () => {
  return (
    <>
      <div className=" relative mt-[2vw]">
        <img src="/bg/buy.jpg" className="w-full absolute max-[1076px]:h-[800px] max-[560px]:h-[600px] max-[380px]:h-[700px]" />
        <img src="/bg/dress4.png" className="w-full absolute -top-[9vw] " />
        <div
          id="How To Buy"
          className="max-[640px]:w-[90vw] max-[640px]:left-[5vw] sm:w-[80vw] sm:left-[10vw] md:w-[70vw] md:left-[15vw] xl:w-[60vw] xl:left-[20vw] absolute top-[7vw] text-[#073736] max-[640px]:px-[4rem] 
          max-[640px]:pt-[5rem] max-[640px]:pb-[10rem] sm:px-[5rem] sm:pt-[6rem] sm:pb-[12rem] md:px-[6rem] md:pt-[6rem] md:pb-[12rem] lg:px-[8rem] lg:pt-[6rem] lg:pb-[12rem] xl:px-[8rem] xl:pt-[6rem] xl:pb-[14rem] 2xl:px-[13rem] 2xl:pt-[8rem] 2xl:pb-[17rem] "
          style={{backgroundImage:"url(/bg/howtobuy.png)", backgroundSize:"100% 100%"}}
        >
          <img src="title/header4.png" className="absolute w-[50%] left-[25%] top-0 sm:w-[50%] sm:left-[25%] sm:top-0 md:w-[50%] md:left-[25%] md:top-0 lg:w-[50%] lg:left-[25%] lg:top-0 xl:w-[50%] xl:left-[25%] xl:top-0 2xl:w-[50%] 2xl:left-[25%] 2xl:top-0"></img>
          <div
            className="text-[0.8rem] sm:text-[1rem] md:text-[1.2rem] lg:text-[1.2rem] xl:text-[1.4rem] bottom-[30%] flex flex-col justify-between  text-white font-sans font-[900] leading-[1.6vw]"
            style={{
              // textShadow:
              // "0.1vw 0.1vw 0 #080807, -0.1vw -0.1vw 0 #080807, -0.1vw 0.1vw 0 #080807, 0.1vw -0.1vw 0 #080807",
              WebkitTextStroke: "0.1vw #080807",
            }}
          >
            <p className="text-[1rem] leading-[1.5rem] sm:text-[1.4rem] sm:leading-[2rem] md:text-[1.5rem] md:leading-[2.2rem] lg:text-[1.8rem] lg:leading-[2.5rem] xl:text-[2rem] xl:leading-[3rem]">1. Create Your Crypto Wallet</p>
            <p className="max-[640px]:leading-[0.9rem] pl-[0.7rem] sm:pl-[1.5rem] sm:leading-[1.2rem] md:pl-[1.7rem] md:leading-[1.1rem] lg:pl-[1.9rem] lg:leading-[1.3rem] xl:pl-[2rem] xl:leading-[1.6rem]">
              If you already have a compatible wallet–go to step 2. f not, we
              suggest Metamask for desktop. On mobile, we recommend Best Wallet:
              Simply download the app to get started!
            </p>
            <p className="text-[1rem] leading-[1.5rem] sm:text-[1.2rem] sm:leading-[2rem]  lg:text-[1.8rem] lg:leading-[2.5rem] xl:text-[2rem] xl:leading-[3rem]">2. Load Your Wallet with Crypto</p>
            <p className="max-[640px]:leading-[0.9rem] pl-[0.7rem] sm:pl-[1.5rem] sm:leading-[1.2rem] md:pl-[1.7rem] md:leading-[1.1rem] lg:pl-[1.9rem] lg:leading-[1.3rem] xl:pl-[2rem] xl:leading-[1.6rem]">
              Paying by card? Go to step 3. If paying by crypto, load your fave
              crypto onto your wallet. ETH, USDT, and BNB are accepted.
            </p>
            <p className="text-[1rem] leading-[1.5rem] sm:text-[1.2rem] sm:leading-[2rem]  lg:text-[1.8rem] lg:leading-[2.5rem] xl:text-[2rem] xl:leading-[3rem]">3. Buy $ZAP Tokens</p>
            <p className="max-[640px]:leading-[0.9rem] pl-[0.7rem] sm:pl-[1.5rem] sm:leading-[1.2rem] md:pl-[1.7rem] md:leading-[1.1rem] lg:pl-[1.9rem] lg:leading-[1.3rem] xl:pl-[2rem] xl:leading-[1.6rem]">
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
