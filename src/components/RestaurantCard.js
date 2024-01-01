import { CDN_URL } from "../utils/constants";
import React from "react";
const RestaurantCard = (props) =>{
    const {resData} = props;
    const {name,cuisines,avgRating,costForTwo,cloudinaryImageId}= resData?.info|| {} ;
    const {slaString} = resData?.info.sla||{};
    return(
        <div className="res-card">
            <img className="res-logo" alt = "res-image" src={CDN_URL+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(',')}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{slaString}</h4>
        </div>
    )
}
export default RestaurantCard;
