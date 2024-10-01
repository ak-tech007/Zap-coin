"use client";
import { Item } from "./item";

export const Content = () => {
  return (
    <>
      <div className="absolute top-[5%] left-[10%] w-[70%]">
        <img src="/bg/tokenomics.png" />
        <Item
          title={"Presale 20%"}
          content={
            "20% is for the frens that get in early, and help Pepe break free of his chains."
          }
          className={"top-[31%] left-[8%]"}
        />
        <Item
          title={"Staking 30%"}
          content={
            "Since rewards are DOUBLED on Layer 2, a fat stack is for staking rewards."
          }
          className={"top-[31%] left-[39%]"}
        />
        <Item
          title={"Marketing 20% "}
          content={
            "Ser, Pepe needs no marketing. But he’s gonna do it anyway. BIGTIME."
          }
          className={"top-[31%] left-[70%]"}
        />
        <Item
          title={"Liquidity 10%"}
          content={
            "Fat liquidity pools for decentralized exchanges. Ape in freely."
          }
          className={"top-[57%] left-[8%]"}
        />
        <Item
          title={"Project Finance 10%"}
          content={
            "Takes an army to create and run a chain. This makes sure it runs smoothly."
          }
          className={"top-[57%] left-[39%]"}
        />
        <Item
          title={"Chain Inventory 10%"}
          content={"An allocation for the $ZAP Layer 2 chain."}
          className={"top-[57%] left-[70%]"}
        />
        <h1
          className="absolute top-[20%] left-[5%] text-[2vw] font-bold "
          style={{
            // WebkitTextStroke: "2px white",
            textShadow:
              "0.1vw 0.1vw 0 white, -0.1vw -0.1vw 0 white, -0.1vw 0.1vw 0 white, 0.1vw -0.1vw 0 white",
          }}
        >
          The engine that makes the $ZAP machine run.
        </h1>
        <p className="absolute bottom-[15%] left-[8%] text-[1.5vw] font-semibold">
          Total Token Amount: 8,000,000,000
        </p>
        <button
          onClick={() => window.open("/white-paper.pdf")}
          className="text-[#073736] absolute bottom-[18%] right-[5%] text-[1.1vw] font-semibold hover:-translate-y-[0.1vw]"
        >
          Read $ZAP Whitepaper
        </button>
      </div>
    </>
  );
};
