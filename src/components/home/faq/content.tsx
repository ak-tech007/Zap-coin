"use client";
import { useState } from "react";

export const Content = () => {
  const [show, setShow] = useState<String>("faq1");
  return (
    <>
      <div className="absolute  top-0 left-[15%] right-[16%] bottom-[4%] flex flex-col justify-between gap-[1vw]">
        <div className={`${show==="faq1"?"h-[22vw]":"h-[5.5vw]"} duration-500 overflow-hidden border-[0.5vw] border-black rounded-[1vw] p-[1.5vw] bg-[#6DEDFE]`}>
          <button
            className={`${
              show === "faq1" ? "text-[1.4vw]":"text-[1.1vw]"
            } font-bold cursor-pointer`}
            onClick={() => setShow("faq1")}
          >
            What is ZAP Unchained?
          </button>
          {show === "faq1" && (
            <ul className="text-[0.9vw] font-semibold">
              Pepe Unchained or $ZAP is a better version of the Original Pepe.
              It is not only a token, but a Meme Coin ecosystem built for:
              <br />
              <br />
              <li>-Instant and low fee bridging between ETH and Pepe Chain</li>
              <li>-Lowest transaction fees -Instant transactions</li>
              <li>-Higher Volume Capacity</li>
              <li>-100x faster than ETH</li>
              <li>
                -Dedicated Block explorer to see all transactions on ZAP
                Unchained Layer 2
              </li>
            </ul>
          )}
        </div>
        <div className={`${show==="faq2"?"h-[22vw]":"h-[5.5vw]"} duration-500 overflow-hidden border-[0.5vw] border-black rounded-[1vw] p-[1.5vw] bg-[#6DEDFE]`}>
          <button
            className={`${
              show === "faq2" ? "text-[1.4vw]":"text-[1.1vw]"
            } font-bold cursor-pointer`}
            onClick={() => setShow("faq2")}
          >
            When Can I Claim My Tokens?
          </button>
          {show === "faq2" && (
            <ul className="text-[0.9vw] font-semibold">
              Pepe Unchained or $ZAP is a better version of the Original Pepe.
              It is not only a token, but a Meme Coin ecosystem built for:
              <br />
              <br />
              <li>-Instant and low fee bridging between ETH and Pepe Chain</li>
              <li>-Lowest transaction fees -Instant transactions</li>
              <li>-Higher Volume Capacity</li>
              <li>-100x faster than ETH</li>
              <li>
                -Dedicated Block explorer to see all transactions on ZAP
                Unchained Layer 2
              </li>
            </ul>
          )}
        </div>
        <div className={`${show==="faq3"?"h-[22vw]":"h-[5.5vw]"} duration-500 overflow-hidden border-[0.5vw] border-black rounded-[1vw] p-[1.5vw] bg-[#6DEDFE]`}>
          <button
            className={`${
              show === "faq3" ? "text-[1.4vw]":"text-[1.1vw]"
            } font-bold cursor-pointer`}
            onClick={() => setShow("faq3")}
          >
            What is Layer 2? Why is it better?
          </button>
          {show === "faq3" && (
            <ul className="text-[0.9vw] font-semibold">
              Pepe Unchained or $ZAP is a better version of the Original Pepe.
              It is not only a token, but a Meme Coin ecosystem built for:
              <br />
              <br />
              <li>-Instant and low fee bridging between ETH and Pepe Chain</li>
              <li>-Lowest transaction fees -Instant transactions</li>
              <li>-Higher Volume Capacity</li>
              <li>-100x faster than ETH</li>
              <li>
                -Dedicated Block explorer to see all transactions on ZAP
                Unchained Layer 2
              </li>
            </ul>
          )}
        </div>
        <div className={`${show==="faq4"?"h-[32vw]":"h-[5.5vw]"} duration-500 overflow-hidden border-[0.5vw] border-black rounded-[1vw] !p-[2vw] bg-[#6DEDFE]`}>
          <button
            className={`${
              show === "faq4" ? "text-[1.4vw]":"text-[1.1vw]"
            } font-bold cursor-pointer`}
            onClick={() => setShow("faq4")}
          >
            When will People Unchained L2 Be Released?
          </button>
          {show === "faq4" && (
            <ul className="text-[0.9vw] font-semibold">
              Pepe Unchained or $ZAP is a better version of the Original Pepe.
              It is not only a token, but a Meme Coin ecosystem built for:
              <br />
              <br />
              <li>-Instant and low fee bridging between ETH and Pepe Chain</li>
              <li>-Lowest transaction fees -Instant transactions</li>
              <li>-Higher Volume Capacity</li>
              <li>-100x faster than ETH</li>
              <li>
                -Dedicated Block explorer to see all transactions on ZAP
                Unchained Layer 2
              </li>
            </ul>
          )}
        </div>
      </div>
    </>
  );
};
