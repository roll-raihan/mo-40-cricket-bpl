import React, { useState } from 'react';
import nameImg from '../../assets/user-1.png';
import flagImg from '../../assets/report-1.png'
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';

const PlayerCard = ({ player, setAvailableBalance, availableBalance, purchasedPlayers, setPurchasedPlayers }) => {
    const [isSeleected, setIsSelected] = useState(false);

    const handleSelected = (playerData) => {
        const playerPrice = parseInt(playerData.price.split("$").join("").split(",").join(""))
        if (availableBalance < playerPrice) {
            alert("Not sufficient coin!");
            return
        }
        if (purchasedPlayers.length === 6) {
            alert("6 Players already selected!");
            return
        }
        setIsSelected(true);
        setAvailableBalance(availableBalance - playerPrice);
        setPurchasedPlayers([...purchasedPlayers, playerData]);
    }
    return (
        <div className="card bg-base-100 w-96 shadow-sm p-4 rounded-2xl">
            <figure>
                <img className='rounded-2xl w-full h-[300px]'
                    src={player.img}
                    alt="Shoes" />
            </figure>
            <div className="">
                <div className='flex items-center mt-2'>
                    <img className='w-[20px] h-[20px] mr-2 bg-white' src={nameImg} alt="" />
                    <h2 className="card-title">{player.name}</h2>
                </div>
                <div className='flex justify-between items-center mt-2 border-b-1 border-gray-400'>
                    <div className='flex gap-2 mt-2 bg-white'>
                        <img src={flagImg} alt="" />
                        <p className='text-black'>{player.country}</p>
                    </div>
                    <p className='btn border-none shadow-none'>{player.playing_role}</p>
                </div>
                <p className='font-bold mt-2'>Rating: {player.rating}</p>
                <div className='flex justify-between items-center mt-2'>
                    <p>{player.batting_style}</p>
                    <p>{player.bowling_style}</p>
                </div>
                <div className="flex justify-between items-center mt-2">
                    <p className='font-bold'>Price: {player.price}</p>
                    <button disabled={isSeleected} onClick={() => { handleSelected(player) }} className='btn border-none'>{isSeleected ? "Selected" : "Choose Player"}</button>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;