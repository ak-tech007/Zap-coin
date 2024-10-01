


export const Tokenpayment = () => {
    return(
        <>
        <div className="absolute top-[20%] " >
            <img className="w-[33%]" src="bg/payment.png"></img>
            <img className="absolute w-[10%] top-[10.3%] left-[11.5%]" src="title/buyzap.png"></img>
            <div className="absolute top-[16%] left-[10%] text-[1vw]">
                <span className="mr-[0.3vw] myriadpro">Days</span>
                <span className="mr-[0.3vw] myriadpro">Hours</span>
                <span className="mr-[0.3vw] myriadpro">Minutes</span>
                <span className="mr-[0.3vw] myriadpro">Seconds</span>
            </div>
            <div className="absolute top-[19%] left-[10.3%] text-[1.5vw]">
                <label className="mr-[1vw] myriadpro">00</label>
                <label className="mr-[1.7vw] myriadpro">00</label>
                <label className="mr-[2.2vw] myriadpro">00</label>
                <label className="mr-[1vw] myriadpro">00</label>
            </div>
            <span className="absolute myriadpro_regular top-[25.4%] text-[0.7vw] text-white left-[12.9%]">Until next Price increase</span>
            <div className="absolute top-[38%] left-[12.3%] text-[0.8vw]">
                <span className="myriadpro">Your purchased $ZAP = </span>
                <span className="myriadpro">0</span>
            </div>
            <div className="absolute top-[41%] left-[12.3%] text-[0.8vw]">
                <span className="myriadpro">Your stakeable $ZAP = </span>
                <span className="myriadpro">0</span>
            </div>
            <div className="absolute top-[45.5%] left-[13.5%] text-[0.8vw]">
                <span className="myriadpro">1 $ZAP = </span>
                <span className="myriadpro">$0.0098</span>
            </div>
            <div className="absolute flex justify-between w-[11%] top-[52%] left-[11.1%]">
                <img className="cursor-pointer rounded-[3rem] w-[47%] hover:shadow-3xl" src="button/ETH.png"></img>
                <img className="cursor-pointer rounded-[3rem] w-[47%] hover:shadow-3xl" src="button/USDT.png"></img>
            </div>
            <div className="absolute top-[63%] left-[8.5%] text-[0.6vw]">
                <span className="myriadpro mr-[6vw]">Pay with ETH</span>
                <span className="myriadpro">$ZAP You receive</span>
            </div>
            <div className="absolute flex justify-between w-[17%] top-[66%] left-[8%] text-[0.6vw]">
                <img src="button/input1.png" className="w-[45%]"></img>
                <img src="button/input2.png" className="w-[45%]"></img>
            </div>
            <div className="absolute flex justify-between w-[15%] top-[66.35%] left-[9%] text-[0.6vw]">
                <input type="number" placeholder="0" className="myriadpro outline-none bg-transparent border-0 text-[1.1vw] p-0 w-[30%]"></input>
                <input type="number" value={`0`} readOnly className="w-[38%] outline-none bg-transparent border-0 myriadpro p-0 text-[1.1vw]"></input>
            </div>
            
        </div>
        </>
    )
}