import navImg from './assets/logo.png'
import coinImg from './assets/Currency.png'
import './App.css'
import { Suspense } from 'react'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'

const fetchData = async () => {
  const res = await fetch("/players.json")
  return res.json()
}

function App() {

  const playersData = fetchData();

  return (
    <>
      <div className="navbar max-w-[1200px] mx-auto">
        <div className="flex-1">
          <a className="text-xl"><img className='w-[60px] h-[60px]' src={navImg} alt="" /></a>
        </div>
        <div className='flex items-center'>
          <span className='mr-1 font-bold'>60000000</span>
          <span className='mr-1 font-bold'> Coin</span>
          <img src={coinImg} alt="" />
        </div>
      </div>
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <AvailablePlayers playersData={playersData}></AvailablePlayers>
      </Suspense>
    </>
  )
}

export default App
