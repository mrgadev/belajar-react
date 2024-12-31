import React from "react";
import {Link} from "react-router-dom";
const Navbar  = () => {
    return(
        <div style={nav}>
            <h1 style={navTitle}>Ngoding Yuk!</h1>
            <ul style={navItem}>
                <li><Link to="/" style={link}>Home</Link></li>
                <li><Link to="/about" style={link}>About</Link></li>
                <li><Link to="/contact" style={link}>Contact</Link></li>
            </ul>
        </div>
    )
}

export default Navbar

const nav  = {
    display: "flex",
    padding: "0 6rem",
    justifyContent: "space-between",
    color: "#4B5945",
    alignItems: "center"
}

const navTitle = {
    background: "#4B5945",
    color: "#FFF"
}

const navItem = {
    listStyle: "none",
    display: "flex",
    justifyContent: "space-between",
    gap: "1rem"
}

const link = {
    textDecoration: "none",
    color: "#4B5945"
}