import React from 'react'
import ItemList from './ItemList';

const RestaurantCategory = ({ data, showItems, setShowIndex, dummy }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      <div className='flex justify-between cursor-pointer' onClick={handleClick}>
        <div className='w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4'>
          <span className='font-bold'>{data.title} ({data.itemCards.length})</span>
          <span>⬇️</span>
          {
            showItems && <ItemList items={data.itemCards} dummy={dummy} />
          }
        </div>
      </div>
    </div>
  )
}
export default RestaurantCategory;