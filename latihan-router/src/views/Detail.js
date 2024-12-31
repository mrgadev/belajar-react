import React from "react";
import MainLayout from "../layout/MainLayout";
// import { withRouter } from "react-router-dom";
import { useParams } from 'react-router-dom'

class Detail extends React.Component {
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
        return(
            <MainLayout>
                <h1>Detail Page</h1>
            </MainLayout>
        )
    }
}

export default Detail;