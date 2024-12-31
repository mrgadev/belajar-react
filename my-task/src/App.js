import logo from './logo.svg';
import React from 'react';
import Button from './components/Button';
import FormInput from './components/FormInput';
import ListItem from './components/ListItem';
import './App.css';
import EditModal from './components/EditModal';

class App extends React.Component {

  state = {
    lists: [
      {
        id: 1,
        title: "reading novel"
      },
      {
        id: 2,
        title: "workout training"
      }
    ],
    isEdit: false,
    editData: {
      id: "",
      title: ""
    }
  }

  update = () => {
    const {id, title} = this.state.editData
    const newData = {id, title}
    const newLists = this.state.lists
    newLists.splice((id-1), 1, newData)
    this.setState({
      lists: newLists,
      isEdit: false,
      editData: {
        id: "",
        title: ""
      }
    })
  }

  setTitle = e => {
    this.setState({
      editData: {
        ...this.state.editData,
        title: e.target.value
      }
    })
  }
  openModal = (id,data) => {
    this.setState({
      isEdit: true,
      editData: {
        id,
        title: data
      }
    })

  }

  closeModal = () => {
    this.setState({
      isEdit: false
    })
  }

  deleteTask = id => {
    this.setState({
      lists: this.state.lists.filter(item => item.id != id)
    })
  }

  addTask = data => {
    const id = this.state.lists.length
    const newData = {
      id: id + 1,
      title: data
    }
    this.setState({
      lists: [...this.state.lists, newData]
    })
  }

  render(){
    const {lists} = this.state;
    return (
      <div className='App'>
        <div className='logo'>
          <img src={logo} alt="logo"/>
          <h3>Task List</h3>
        </div>
        <div className='list'>
          {lists.map(item =>
            <ListItem 
            key={item.id} 
            list={item} 
            del={this.deleteTask}
            close={this.closeModal}
            open={this.openModal}/>
          )}
        </div>
        <div className='input-form'>
          <FormInput add={this.addTask}/>
        </div>
        <EditModal 
        edit={this.state.isEdit} 
        close={this.closeModal} 
        change={this.setTitle}
        data={this.state.editData}
        update={this.update}/>
      </div>
    );
  }
}


export default App;
