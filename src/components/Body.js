import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";
import Shimmer from "./shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withPromotedLabel } from "./RestaurantCard";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Body = () => {
    const [listRestaurant, setListRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchtext, setSearchText] = useState("");
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    console.log(listRestaurant);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setListRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    const onlineStatus = useOnlineStatus();
    if (onlineStatus == false) {
        return (
            <h1>
                Looks like you're offline!! Please check your Internet Connection
            </h1>
        )
    }
    const { setUserName, loggedInUser } = useContext(UserContext);
    return listRestaurant.length == 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter flex justify-around">
                <div className=" search m-4 p-4">
                </div>
                <div className="search m-4 p-4 flex items-center">
                    <input type="text" className="border-solid border-black" value={searchtext} onChange={(e) => {
                        setSearchText(e.target.value);
                    }} />
                    <button className="px-4 py-2 bg-green-100 mx-4 rounded-lg" onClick={() => {
                        const result = listRestaurant.filter((res) => {
                            return (res.info.name).toLowerCase().includes(searchtext.toLowerCase())
                        })
                        setFilteredRestaurant(result)
                    }}>Search</button>
                    <div className="search m-4 p-4 flex items-center">
                        <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={() => { const result = listRestaurant.filter((res) => res.info.avgRating > 4); setFilteredRestaurant(result) }}>Top Rated Restaurants</button>
                    </div>
                    <div>
                        <label>UserName : </label>
                        <input className="p-2 border border-black" onChange={(e) => setUserName(e.target.value)} value={loggedInUser}></input>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap bg-pink-50">
                {filteredRestaurant.map((restaurant) => (
                    <Link key={restaurant?.info?.id || restaurant?.id} to={"/restaurants/" + restaurant?.info?.id}>
                        {
                            restaurant.info.promoted ? (<RestaurantCardPromoted resData={restaurant} />) : (<RestaurantCard resData={restaurant} />)
                        }
                    </Link>))}
            </div>
        </div>
    )
}
export default Body;
//https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.046293&lng=76.94710789999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
//https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING