import React from 'react'
import Card from './Card';
import MockData from '../../../utils/MockData';

const ShoesCard = () => {
  return (
    <div >
        <div className='flex flex-wrap'>
            {MockData.map((card) =>(
            <Card shoe={card}/>
        ))}
        </div>  
    </div>
  )
}

export default ShoesCard;