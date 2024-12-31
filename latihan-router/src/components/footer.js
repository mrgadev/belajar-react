import React from "react";
const Footer  = () => {
    return(
        <div style={footer}>
            <h4>&copy; 2024 Ngoding Yuk!</h4>
        </div>
    )
}

export default Footer

const footer  = {
    display: "flex",
    padding: "0 6rem",
    justifyContent: "space-between",
    color: "#fff",
    background: "#4B5945",
    alignItems: "center",
    position: "absolute",
    bottom: "0",
    width: "100%"
}