import React from 'react'
import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { MENU_URL } from '../utils/constants';
import Shimmer from './shimmer';

const RestaurantMenu = () => {
    const[resInfo,setResInfo]=useState(null);
    useEffect( ()=> {
        fetchMenu();
    },[])
    const {resId} = useParams();
    const fetchMenu = async() => {
        const data = await fetch(MENU_URL+resId);
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    }
    if(resInfo == null)
    {
        return <Shimmer/>;
    }
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || [];
    const {name,cuisines,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
    return(
        <div className='menu'>
            <h1>{name}</h1>
            <p>
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) =><li key={item?.card?.info?.id}>
                    {item?.card?.info?.name+" "} ||
                    Price : {item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}
                    </li> )}
            </ul>
        </div>
    )
}
//https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
export default RestaurantMenu