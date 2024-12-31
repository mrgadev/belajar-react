import React from "react"
import PropTypes from "prop-types"
import Button from "./Button";
const ListItem = ({ list,del,open }) => {
    const delById = id => {
        del(id)
    }
    return(
        <div style={listItem}>
            <p>{list.title}</p>   
            <div>
                
                <Button text="edit" variant="success" action={() => open(list.id, list.title)}/>
                <Button text="delete" variant="warning" action={()=>delById(list.id)}/>
            </div>
        </div>
    )
}

ListItem.propTypes = {
    list: PropTypes.object.isRequired,
    del: PropTypes.func.isRequired
}

export default ListItem;

const listItem = {
    background: "#2da4f8",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    height: "3rem",
    padding: "0 1rem",
    justifyContent: "space-between",
    margin: "0.5rem 0",
}