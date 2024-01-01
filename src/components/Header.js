import { LOGO_URL } from "../utils/constants";
import React from "react";
const Header = () =>{
    return(
        <div className="header">
        <div className="logo-container">
            <img className="logo" src = {LOGO_URL}></img>
        </div>
        <div ><h1 className="name">Shankar Foods</h1></div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
        </div>
    )
}
export default Header;