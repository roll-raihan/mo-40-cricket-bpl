import React from 'react';
import binImg from '../../assets/Vector.png'

const SelectedCard = ({ player, removePlayer }) => {

    const handleRemove = () => {
        removePlayer(player);
    }
    return (
        <>
            <div className='flex justify-between items-center p-3 border-2 border-gray-400 rounded-2xl mt-2'>
                <div className='flex items-center'>
                    <img src={player.img} className='w-[50px] h-[50px] rounded-xl' alt="" />
                    <div className='ml-2'>
                        <h1>{player.name}</h1>
                        <p className='text-xs'>{player.playing_role}</p>
                    </div>
                </div>
                <div onClick={handleRemove}>
                    <img src={binImg} alt="" />
                </div>
            </div>
        </>
    );
};

export default SelectedCard;