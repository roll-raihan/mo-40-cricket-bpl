import React, { use } from 'react';
import nameImg from '../../assets/user-1.png';
import flagImg from '../../assets/report-1.png'

const AvailablePlayers = ({ playersData }) => {

    const playerInfo = use(playersData);
    console.log(playerInfo);

    return (
        <div className='max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4'>
            {
                playerInfo.map(player => <div className="card bg-base-100 w-96 shadow-sm p-4 rounded-2xl">
                    <figure>
                        <img className='rounded-2xl w-full h-[300px]'
                            src={player.img}
                            alt="Shoes" />
                    </figure>
                    <div className="">
                        <div className='flex items-center mt-2'>
                            <img className='w-[20px] h-[20px] mr-2' src={nameImg} alt="" />
                            <h2 className="card-title">{player.name}</h2>
                        </div>
                        <div className='flex justify-between items-center mt-2 border-b-1 border-gray-400'>
                            <div className='flex gap-2 mt-2'>
                                <img src={flagImg} alt="" />
                                <p>{player.country}</p>
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
                            <p className='btn border-none'>Choose Player</p>
                        </div>
                    </div>
                </div>)
            }

        </div>
    );
};

export default AvailablePlayers;