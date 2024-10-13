"use client"
import { useState } from "react";
import { useAccount } from "wagmi";
import { useToken } from "@/hooks/useToken";
import BN from 'bignumber.js'



export const Paymentform = () => {

  const { address, chainId } = useAccount();
  const [selectedToken, setSelectedToken] = useState('ETH')
  const [ethPrice, setEthPrice] = useState(0n)
  
  const {
    nativeBalance: nativeBalance,
    tokenBalance: tokenBalance,
    decimals: tokenDeciamls,
    nativeFormatted: nativeFormatted,
    tokenFormatted: tokenFormatted,
    refetch: refetchToken,
  } = useToken();

  
  const [inputValue, setInputValue] = useState(address ? parseFloat(nativeFormatted).toFixed(3) : "0");

  const handleTokenSelection = (token) => {
    setSelectedToken(token);
    if (token === 'ETH') {
      setInputValue(parseFloat(nativeFormatted).toFixed(3));
    } else {
      setInputValue(parseFloat(tokenFormatted));
    }
  };

  const handleInputChange = (e) => {
    let inputValue = e.target.value.replace(/[^0-9.]/g, ''); // allow only numbers and a single decimal point
  
    if (inputValue.includes('.') && inputValue.indexOf('0') === 0) {
      inputValue = inputValue.replace(/^0+(?=\.)/, '0'); 
    } else {
      inputValue = inputValue.replace(/^0+/g, ''); 
    }
  
    const dotCount = (inputValue.match(/\./g) || []).length;
    if (dotCount > 1) {
      return;
    }
  
    if (inputValue === '') {
      inputValue = '0'
      setInputValue('0');
    } else {
      setInputValue(inputValue);
    }
  
    if (selectedToken === 'ETH') {
      const _totalStars = BN(ethPrice).multipliedBy(inputValue).div(starsValue);
      if (_totalStars) setTotalStars(_totalStars.toFixed(0));
    } else {
      const _totalStars = BN('1').multipliedBy(inputValue).div(starsValue);
      if (_totalStars) setTotalStars(_totalStars.toFixed(0));
    }
  };

  

  return (
    <>
      <div className="w-96 h-[32rem] border-4 rounded-2xl bg-[#f2c035] border-black" style={{boxShadow:"inset 10px -10px 4px #e39b20"}}>
        <div className="w-5 h-5 bg-red-600 rounded-full ml-4 mt-2"></div>
        <div className="w-[90%] mx-auto border-4 border-black rounded-t-3xl">
          <div className="text-lg font-semibold flex justify-between px-4 pt-2">
            <span>Days</span>
            <span>Hours</span>
            <span>Minutes</span>
            <span>Seconds</span>
          </div>
          <div className="text-2xl font-semibold flex justify-between pb-2 px-5">
            <span>00</span>
            <span>00</span>
            <span>00</span>
            <span>00</span>
          </div>
        </div>
        <div className="w-[90%] text-xs flex justify-center text-white border-l-4 border-r-4 border-b-4 border-black bg-[#17769c] rounded-b-3xl mx-auto" >
          <span>Until next Price increase</span>
        </div>
        <div className="w-[90%] mx-auto h-4 border-4 border-black rounded-full my-4"></div>
        <div className="flex justify-center text-md font-semibold">
          <span>Your purchased $ZAP = 0</span>
        </div>
        <div className="flex justify-center text-md font-semibold">
          <span>Your stakeable $ZAP = 0</span>
        </div>
        <div className="flex justify-between w-[90%] mx-auto mt-3 items-center">
          <div className="border-2 border-black w-[25%]"></div>
          <span className="text-sm font-semibold">1 $ZAP = $0.0098</span>
          <div className="border-2 border-black w-[25%]"></div>
        </div>
        <div className="flex justify-center gap-3 mt-3">
          <button onClick={() => handleTokenSelection('ETH')} className="flex w-28 text-xl justify-start gap-2 bg-[#17769c] font-extrabold items-center border-4 border-black rounded-full px-2 py-1 cursor-pointer hover:scale-105">
            <img src="/ETH.svg" className="w-5 h-5"></img>
            <span>ETH</span>
          </button>
          <button onClick={() => handleTokenSelection('USDT')} className="flex w-28 text-xl justify-start gap-1 bg-[#52ff9a] font-extrabold items-center border-4 border-black rounded-full px-2 py-1 cursor-pointer hover:scale-105">
            <img src="/USDT.svg" className="w-5 h-5"></img>
            <span>USDT</span>
          </button>
        </div>
        <div className="w-full flex justify-start text-sm font-bold pl-12 gap-16 mt-5">
          <span>Pay with ETH</span>
          <span>$ZAP You receive</span>
        </div>
        <div className="w-full flex justify-center gap-2">
          <input type="text"value={inputValue} onChange={handleInputChange} className="w-[40%] text-sm border-4 border-black rounded-full py-1 px-3 focus:outline-none bg-[#f2c035] placeholder-white"></input>
          <input type="text" className="w-[40%] text-sm border-4 border-black rounded-full py-1 px-3 focus:outline-none bg-[#f2c035] placeholder-white" />
        </div>
        <div className="w-full flex justify-center gap-2 mt-4">
          <button className="w-[40%] text-sm border-4 border-black rounded-full font-semibold py-1">Connect Wallet</button>
          <button className="w-[40%] text-sm border-4 border-black rounded-full font-semibold py-1">Don't Have Wallet?</button>
        </div>
      </div>
    </>
  );
};
