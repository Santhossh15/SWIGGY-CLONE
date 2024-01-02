import RestaurantCard from "./RestaurantCard";
import { useState ,useEffect} from "react";
import React from "react";
import Shimmer from "./shimmer";
const Body = () =>{
    const [listRestaurant,setListRestaurant] = useState([]);
    const [filteredRestaurant,setFilteredRestaurant]=useState([]);
    const [searchtext,setSearchText] = useState("");
    
    useEffect(()=>{
        fetchData();
    },[])
    
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.0458446&lng=76.9296948&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setListRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    
    return listRestaurant.length == 0 ? <Shimmer/> :(
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
            <button className="filter-btn" onClick={()=> {const result = listRestaurant.filter((res)=> res.info.avgRating > 4.5); setFilteredRestaurant(result)}}>Top Rated Restaurants</button>
        </div>
        <div className="res-container">
            {filteredRestaurant.map((restaurant) => (<RestaurantCard key={restaurant.info.id} resData={restaurant}/>))}
        </div>
        </div>
    )
}
export default Body;