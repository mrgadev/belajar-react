import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
const MainLayout = props => {
    return(
        <React.Fragment>
            <Navbar/>
                {props.children}
            <Footer/>
        </React.Fragment>
    )
}

export default MainLayout