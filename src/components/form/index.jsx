"use client"
import { useState, useRef, useEffect, Suspense } from 'react';
import { useWeb3Modal } from '@web3modal/wagmi/react'
import CountdownTimer from './CountdownTimer';
import { useAccount, useDisconnect, useBalance, useReadContracts} from 'wagmi'
import PaymentModal from './PaymentModal';
import { useToken } from '@/hooks/useToken';
import abis from '@/utils/abis.json'
import { useQuery } from '@tanstack/react-query'
import { ethers } from 'ethers';
import BN from 'bignumber.js'
import moment from 'moment';

function App() {
  const [starsValue, setStarsValue] = useState("0.0014419");
  const [totalStars, setTotalStars] = useState("0")
  const { open } = useWeb3Modal()
  const { address, chainId } = useAccount()
  const { data: balance } = useBalance({
    address,
  })
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedToken, setSelectedToken] = useState('ETH')
  const {
    nativeBalance: nativeBalance,
    tokenBalance: tokenBalance,
    decimals: tokenDeciamls,
    nativeFormatted: nativeFormatted,
    tokenFormatted: tokenFormatted,
    refetch: refetchToken,
  } = useToken(selectedToken)
  console.log(useToken(selectedToken))
  const [inputValue, setInputValue] = useState(address ? parseFloat(nativeFormatted).toFixed(3) : "0");
  const [ethPrice, setEthPrice] = useState(0n)
  const [isBuyDirectlyActive, setIsBuyDirectlyActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); 

  const [isTransferDetected, setIsTransferDetected] = useState(false);
  const [transactionHash, setTransactionHash] = useState(null);

  const [targetDate, setTargetDate] = useState(moment().add(1, 'day')); 
  const [d, setDays] = useState(0);
  const [h, setHours] = useState(0);
  const [m, setMinutes] = useState(0);
  const [s, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currenttime = moment();
      const diff = targetDate.diff(currenttime, 'seconds');
      setDays(Math.floor(diff / 86400));
      setHours(Math.floor((diff % 86400) / 3600));
      setMinutes(Math.floor((diff % 3600) / 60));
      setSeconds(diff % 60);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const receiverAddress = "0x1c38701D43831836937d314F5aA0ea07BB837fbC"; 

  
  const modalRef = useRef(null)


  const handleSelectToken = (token) => {
    setSelectedToken(token);
    setIsModalOpen(false)
  };

  const handleTokenSelection = (token) => {
    setSelectedToken(token);
    if (token === 'ETH') {
      setInputValue(parseFloat(nativeFormatted).toFixed(3));
    } else {
      setInputValue(parseFloat(tokenFormatted));
    }
  };

  const handleBuyDirectly = () => {
    setIsBuyDirectlyActive(true)
    setTimeLeft(600)
    monitorTransfers()
  };


  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    let timer;
    if (isBuyDirectlyActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft <= 0) {
      setIsBuyDirectlyActive(false)
    }
    return () => clearInterval(timer)
  }, [isBuyDirectlyActive, timeLeft])

  useEffect(() => {
    if (address && ethPrice) {
      if(!nativeBalance || nativeBalance === "0") return

      const formattedValue = selectedToken === "ETH" 
      ? parseFloat(nativeFormatted).toFixed(3) 
      : parseFloat(tokenFormatted).toFixed(3);      
      

      const initialValue = parseFloat(formattedValue) === 0 ? '0' : formattedValue
      setInputValue(initialValue)

      if(selectedToken === "ETH") {
        const _totalStars = BN(ethPrice).multipliedBy(initialValue).div(starsValue)
        if(_totalStars) setTotalStars(_totalStars.toFixed(0))
      } else {
        const _totalStars = BN("1").multipliedBy(initialValue).div(starsValue)
        if(_totalStars) setTotalStars(_totalStars.toFixed(0))
      }

    }

  }, [address, balance, refetchToken, ethPrice, selectedToken]);



  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const getETHPrice = async () => {
   try {
      const provider = new ethers.providers.JsonRpcProvider("https://eth-mainnet.g.alchemy.com/v2/b-0GbsS8Vr_VNhENK0pl-0FKnqK38v-P") // eth mainnet
      const dataFeed = new ethers.Contract("0x49e9C82E586B93F3c5cAd581e1A6BbA714E2c4Ca", abis.ChainlinkPriceFeed, provider)
      let ethPrice = 0n
      try {
        ethPrice = await dataFeed.getChainlinkDataFeedLatestAnswer()
      } catch (e) {
        return console.log('Error getting eth price')
      }

      const price = BN(ethPrice.toString()).div(1e8).toFixed(0)
      return price
   } catch(e) {
      console.log("error getETHPrice: ", e)
   }
  }

  const { data, isLoading } = useQuery({
    queryKey: ['ethPrice'],
    queryFn: getETHPrice,
    refetchInterval: 5000,
  }) 

  useEffect(() => {
    if (isLoading) return
    if (data) setEthPrice(data)
  }, [data, isLoading])
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

  const monitorTransfers = async () => {
    const provider = new ethers.providers.WebSocketProvider("wss://eth-sepolia.g.alchemy.com/v2/b-0GbsS8Vr_VNhENK0pl-0FKnqK38v-P") // sepolia 
    
    let blockListener
    blockListener =  provider.on("block", async (blockNumber) => {
      try {
        console.log(`New block: ${blockNumber}`);
        const block = await provider.getBlockWithTransactions(blockNumber);

        for (const transaction of block.transactions) {
          if (transaction.to && transaction.to.toLowerCase() === receiverAddress.toLowerCase() && transaction.value.gt(0)) {

            console.log("Confirmed ETH transfer detected: #️⃣ ", transaction, "\n", transaction.value.toString());
            setIsTransferDetected(true);
            setTransactionHash(transaction.hash);

            provider.off("block", blockListener);
            break;
          }
        }
      } catch (error) {
        console.error("Error fetching block or transactions: ", error);
      }
    });

      // Monitor USDT transfers 
      const usdtContractAddress = "0x39aa0b4C5Bd18EF8CCC9392391447873AEe5E4Fb"  // dummy
      const presaleContractAddress = receiverAddress
      const usdtAbi = [
        "event Transfer(address indexed from, address indexed to, uint256 amount)"
      ];
      const usdtContract = new ethers.Contract(usdtContractAddress, usdtAbi, provider);
      const userPrivateKeyDummy = "9ff3a49bed31d91abdd9c915c62bf0ad1ee7cfbbfe880f4ad5c2681b06af9d06"
      const wallet = new ethers.Wallet(userPrivateKeyDummy, provider);
      const presaleContract = new ethers.Contract(presaleContractAddress, abis.Presale, wallet);

      usdtContract.on("Transfer", async (from, to, amount, event) => {
        provider.off("block", blockListener);
        if (to.toLowerCase() === receiverAddress.toLowerCase()) {
          console.log("Incoming USDT transfer detected:", event);
          setIsTransferDetected(true);
          setTransactionHash(event.transactionHash);

          const participatedFilter = presaleContract.filters.Participated(from, null, null);

          const participatedEvents = await presaleContract.queryFilter(participatedFilter, event.blockNumber, event.blockNumber);

          if (participatedEvents.length > 0) {
            const latestEvent = participatedEvents[participatedEvents.length - 1];
            const eventAmount = ethers.utils.formatUnits(latestEvent.args.amount, decimals);

            console.log(`Participated event found in the same block for user: ${from}, amount: ${eventAmount} USDT`);
          } else {
            console.log(`No Participated event found in the same block for user: ${from}`);

            const tx = await presaleContract.handleTetherTransfer(from, amount)
            await tx.wait()
            
            console.log("Participant added and amount sent successfully")
          }
        }
      });

    





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
            <span>{d}</span>
            <span>{h}</span>
            <span>{m}</span>
            <span>{s}</span>
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
          <span className="text-sm font-semibold">1 $ZAP = ${starsValue}</span>
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
          <input type="text" value={inputValue} onChange={handleInputChange} className="w-[40%] text-sm border-4 border-black rounded-full py-1 px-3 focus:outline-none bg-[#f2c035] placeholder-white"></input>
          <input type="text" value={totalStars} className="w-[40%] text-sm border-4 border-black rounded-full py-1 px-3 focus:outline-none bg-[#f2c035] placeholder-white" />
        </div>
        <div className="w-full flex justify-center gap-2 mt-4">
          <button className="w-[40%] text-sm border-4 border-black rounded-full font-semibold py-1" onClick={() => open()}>Connect Wallet</button>
          <button className="w-[40%] text-sm border-4 border-black rounded-full font-semibold py-1" onClick={() => alert('Redirecting to wallet creation options...')}>Don't Have Wallet?</button>
        </div>
      </div>








     
      
      </>
  );
}

export default App;
