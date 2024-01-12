import React from 'react'
import ItemList from './ItemList';
import { useState } from 'react';

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const [on, setOn] = useState(false);
  const handleClick = () => {
    setShowIndex();
    setOn(!on);
  }
  return (
    <div>
      <div className='flex justify-between cursor-pointer' onClick={handleClick}>
        <div className='w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4'>
          <span className='font-bold'>{data.title} ({data.itemCards.length})</span>
          <span>⬇️</span>
          {
            on && showItems && <ItemList items={data.itemCards} />
          }
        </div>
      </div>
    </div>
  )
}
export default RestaurantCategory;