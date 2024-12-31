import React from "react";


class Test extends React.Component {
    state = {
        angka: 0
    }
    add = () => {
        setState({
            angka: angka + 1
        })
    }
    substract = () => {
        setState({
            angka: angka - 1
        })
    }
    render(){
        return(
            <div>
                <h1>Belajar Hooks</h1>
                {this.state.angka}
                <button onClick={this.add}>+</button>
                <button onClick={this.substract}>-</button>
            </div>
        )
    }
}

export default Test;