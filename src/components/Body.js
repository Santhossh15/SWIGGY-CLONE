import RestaurantCard from "./RestaurantCard";
import ResObj from "../utils/mockData";
import { useState } from "react";
import React from "react";
const Body = () =>{
    const [filterRestaurant,setfilterRestaurant] = useState(ResObj);
    return(
        <div className="body">
        <div className="filter">
            <button className="filter-btn" onClick={()=> {const filteredList = filterRestaurant.filter((res)=> res.info.avgRating > 4.5); setfilterRestaurant(filteredList)}}>Top Rated Restaurants</button>
        </div>
        <div className="res-container">
            {filterRestaurant.map((restaurant) => (<RestaurantCard key={restaurant.info.id} resData={restaurant}/>))}
        </div>
        </div>
    )
}
export default Body;