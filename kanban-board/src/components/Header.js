import React from "react";
import "../sass/Header.scss"
import moment from 'moment';
const Header = () => {
    return(
        <div className="header">
            <h2>Kanban Board</h2>
            <p>{moment().format('D MMMM YYYY')}</p>
        </div>
    )
}

export default Header;