import RestaurantCard from "./RestaurantCard";
import { useState ,useEffect} from "react";
import React from "react";
import { Link } from "react-router-dom";
import Shimmer from "./shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () =>{
    
    const [listRestaurant,setListRestaurant] = useState([]);
    const [filteredRestaurant,setFilteredRestaurant]=useState([]);
    const [searchtext,setSearchText] = useState("");
    
    useEffect(()=>{
        fetchData();
    },[])
    
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setListRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    const onlineStatus = useOnlineStatus();
    if(onlineStatus == false)
    {
        return(
        <h1>
            Looks like you're offline!! Please check your Internet Connection
        </h1>
        )
    }
    
    return listRestaurant.length==0 ? <Shimmer/> :(
        <div className="body">
        <div className="filter">
            <div className="search">
                <input type="text" className="search-box" value={searchtext} onChange={(e) => {
                    setSearchText(e.target.value);
                }}/>
                <button onClick={() => { 
                    const result = listRestaurant.filter((res)=>{
                        return (res.info.name).toLowerCase().includes(searchtext.toLowerCase())
                    })
                    setFilteredRestaurant(result)
                }}>Search</button>
            </div>
            <button className="filter-btn" onClick={()=> {const result = listRestaurant.filter((res)=> res.info.avgRating > 4); setFilteredRestaurant(result)}}>Top Rated Restaurants</button>
        </div>
        <div className="res-container">
            {filteredRestaurant.map((restaurant) =>( 
            <Link key = {restaurant?.info?.id || restaurant?.id} to={"/restaurants/"+restaurant?.info?.id}>
            <RestaurantCard  resData={restaurant}/></Link>))}
        </div>
        </div>
    )
}
export default Body;
//https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.046293&lng=76.94710789999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
//https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING