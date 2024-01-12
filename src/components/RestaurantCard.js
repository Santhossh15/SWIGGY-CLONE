import { CDN_URL } from "../utils/constants";
import React from "react";
const RestaurantCard = (props) =>{
    const {resData} = props;
    const {name,cuisines,avgRating,costForTwo,cloudinaryImageId}= resData?.info|| {} ;
    const {slaString} = resData?.info.sla||{};
    return(
        <div className="m-4 p-4 w-[250px] rounded-md bg-yellow-100">
            <img className="rounded-lg" alt = "res-image" src={CDN_URL+cloudinaryImageId}/>
            <h3 className="font-bold py-3 text-lg">{name}</h3>
            <h4>{cuisines.join(',')}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{slaString}</h4>
        </div>
    )
}
 export const withPromotedLabel = (RestaurantCard) => {
    return(props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 pr-2 rounded-lg ">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
 } 
export default RestaurantCard;
