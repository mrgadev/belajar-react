import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
const App = () => {
  const [angka,setAngka] = useState(0)
  const [text,setText] = useState("")
  const [arr,setArr] = useState([
    {
      id: 1,
      title: "Ini judul"
    }
  ])

  const [obj,setObj] = useState({
    name: "ReactJS"
  })
  const add = () => {
    setAngka(angka + 1)
  }
  const substract = () => {
    setAngka(angka - 1)
  }
  return (
    <div className="App">
      {angka}
      <button onClick={add}>+</button>
      <button onClick={substract}>-</button>
    </div>
  );
}

export default App;
