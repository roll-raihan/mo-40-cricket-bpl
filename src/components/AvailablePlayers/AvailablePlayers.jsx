import React, { use } from 'react';

import PlayerCard from '../PlayerCard/PlayerCard';

const AvailablePlayers = ({ playersData, setAvailableBalance, availableBalance }) => {

    const playerInfo = use(playersData);
    // console.log(playerInfo);

    return (
        <div className='max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4'>
            {
                playerInfo.map(player => <PlayerCard availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} player={player}></PlayerCard>)
            }

        </div>
    );
};

export default AvailablePlayers;