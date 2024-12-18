import React from "react"
// import Header from "./Header"
// import List from "./List"
import Button from "./Button";
class App extends React.Component {
    // merupakan object yg menampung properti dari data yg ingin ditampilkan di komponen
    // state = {
    //     books: [
    //         "React Uncover",
    //         "Andre Pratama"
    //     ]

    // }
    state = {
        name: "pppppp"
    }
    change = () => {
        this.setState({
            name: "Apan yak!?"
        })
    }
    state = {
        book: "Bumi Manusia",
        author: "Pramoedya Ananta Toer"
    }
    render(){
        return(
            <div>
                {/* <Header/> */}
                <img src="https://i.redd.it/bagi-bagi-meme-jomok-kalian-dong-gan-v0-lhgk4obenjgc1.jpg?width=1440&format=pjpg&auto=webp&s=a77fd076f4d1595633985be411ee23062688660e" alt="" width={100}/>
                {/* props merupakan properti yg ditambahkan dan dikirimkan dari parent ke chikd component (one way) */}
                {/* <List name="Bisa dipercepat ga?" test="test" myBook={this.state.book}>
                    <ul>
                        <li>List 1</li>
                    </ul>
                </List> */}
                {/* {this.state.books.map(item =>
                    <div>
                        <h3>{item}</h3>
                    </div>
                )} */}
                {/* <List/>
                <div>
                    <List book={this.state.book} author={this.state.author}/>
                </div> */}
                <p>{this.state.name}</p>
                {/* <Button color="merah" onClick={this.change}/> */}
                <button onClick={this.change}>dnwio</button>
            </div>
        )
    }
}

// membuat component dengan function
// const App  = () => {
//     return(
//         <div>
//             <img src="https://i.redd.it/bagi-bagi-meme-jomok-kalian-dong-gan-v0-lhgk4obenjgc1.jpg?width=1440&format=pjpg&auto=webp&s=a77fd076f4d1595633985be411ee23062688660e" alt="" width={100}/>
//             <h1>Bisa dipercepat ga?</h1>

//         </div>
//     )
// }

export default App;