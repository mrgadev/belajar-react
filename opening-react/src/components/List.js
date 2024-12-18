import React from "react"
// import ListItem from "./ListItem";
class List extends React.Component {
    render() {
        return(    
        <div>
            <h2>Komponen List</h2>
            {/* cara mengakses props */}
        <h3>{this.props.book}</h3>
        <h3>{this.props.author}</h3>
            {/* <h3>{this.state.myBook}</h3> */}
            {/* <ListItem/> */}
        </div>
        )
    }
}
export default List;