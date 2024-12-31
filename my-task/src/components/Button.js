import React from "react"
import ListItem from "./ListItem"
import "../styles/Button.css"
import PropTypes from 'prop-types'

const Button = ({variant, text, action }) => {
    return(
        <button className={`btn btn-${variant}`} onClick={action}>{text}</button>
    )
}
Button.propTypes = {
    text: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
    action: PropTypes.func
}
export default Button;