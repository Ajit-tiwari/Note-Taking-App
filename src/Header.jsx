import React from "react";
import Logo from "./Images/logo.webp";
const Header=()=>{
    return (
        <>
            <div className="header">
                <div className="col">
                <img src={Logo} alt="Logo" className="Logo"/>
                </div>
                <h2 style={{color: "red",marginLeft: "10px"}}>Note Taking App</h2>
            </div>
        </>
    );
}
export default Header;