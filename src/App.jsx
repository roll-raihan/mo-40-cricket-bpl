import navImg from './assets/logo.png'
import coinImg from './assets/Currency.png'
import './App.css'
import { Suspense, useState } from 'react'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'

const fetchData = async () => {
  const res = await fetch("/players.json")
  return res.json()
}

const playersData = fetchData();
function App() {

  const [toggle, setToggle] = useState(true);

  const [availableBalance, setAvailableBalance] = useState(800000);

  const [purchasedPlayers, setPurchasedPlayers] = useState([]);

  const removePlayer = (p) => {
    const filteredData = purchasedPlayers.filter(ply => ply.name !== p.name);
    // console.log(filteredData);
    setPurchasedPlayers(filteredData);
    setAvailableBalance(availableBalance + parseInt(p.price.split("$").join("").split(",").join("")));
  }

  //console.log(purchasedPlayers)
  return (

    <>
      <div className="navbar max-w-[1200px] mx-auto">
        <div className="flex-1">
          <a className="text-xl"><img className='w-[60px] h-[60px]' src={navImg} alt="" /></a>
        </div>
        <div className='flex items-center'>
          <span className='mr-1 font-bold'>{availableBalance}</span>
          <span className='mr-1 font-bold'> Coin</span>
          <img src={coinImg} alt="" />
        </div>
      </div>
      <div className='max-w-[1200px] mx-auto flex justify-between items-center'>
        <h1 className='font-bold'>{toggle === true ? "Available Players" : `Selected PLayers(${purchasedPlayers.length}/6)`}</h1>
        <div>
          <button onClick={() => setToggle(true)} className={`py-3 px-4 border-1 border-gray-400 rounded-l-2xl border-r-0 text-xl ${toggle === true ? "bg-[#E7FE29] text-black" : ""} `}>
            Available
          </button>
          <button onClick={() => setToggle(false)} className={`py-3 px-4 border-1 border-gray-400 rounded-r-2xl border-l-0 text-xl ${toggle === false ? "bg-[#E7FE29] text-black" : ""}  `}>
            Selected <span>({purchasedPlayers.length})</span>
          </button>
        </div>
      </div>
      {
        toggle === true ? <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          <AvailablePlayers purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} playersData={playersData}></AvailablePlayers>
        </Suspense> : <SelectedPlayers removePlayer={removePlayer} purchasedPlayers={purchasedPlayers}></SelectedPlayers>
      }

    </>
  )
}

export default App
