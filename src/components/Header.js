import { LOGO_URL } from "../utils/constants";
import React from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login")
    const onlineStatus = useOnlineStatus();
    const { loggedInUser } = useContext(UserContext);
    return (
        <div className="flex justify-between bg-pink-100 shadow-md mb-2">
            <div className="logo-container">
                <img className="w-56" src={LOGO_URL}></img>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Online Status :{onlineStatus ? "🟢" : "🔴"}
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4">Cart</li>
                    <button className="px-4" onClick={() => {
                        btnNameReact == "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login")
                    }
                    }>{btnNameReact}</button>
                    <li className="px-4 font-semibold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;