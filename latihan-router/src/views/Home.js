import React from "react";
import MainLayout from "../layout/MainLayout";
import {Link} from "react-router-dom";

class Home extends React.Component{
    state = {
        skills: [
            {
                id: 1,
                name: "Javascript",
                description: "Deskripsi disini",
                image: require("../images/js.png")
            },
            {
                id: 2,
                name: "React JS",
                description: "Deskripsi disini",
                image: require("../images/react.png")
            },
            {
                id: 3,
                name: "Svelte",
                description: "Deskripsi disini",
                image: require("../images/svelte.png")
            },
            {
                id: 4,
                name: "Vue",
                description: "Deskripsi disini",
                image: require("../images/vue.png")
            }
        ]
    }
    render(){
        const {skills} = this.state
        return(
            <MainLayout>
                <h1 style={homeTitle}>Homepage</h1>
                <div style={container}>
                    {skills.map(item=>
                        <div key={item.id} style={card}>
                            <Link to={"/detail/${item.id}"}>
                                <img src={item.image} alt={item.name} style={img}/>
                                <h3>{item.name}</h3>
                            </Link>
                        </div>
                    )}
                </div>
            </MainLayout>
        )
    }
}

export default Home
const container = {
    display: "flex", 
    padding: "0 6rem",
    justifyContent: "space-between"
}

const card = {
    width: "20%",
    height: "15rem"
}

const img = {
    width: "100%",
    height: "100%"
}

const homeTitle = {
    padding: "0 6rem"
}