import './App.css';
import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import TodoList from './TodoList';
class App extends Component {
  state = {
    name: ""
  }
  handle = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  render() {
    return (
      <BrowserRouter>
        <div className="nav">
          <Route path="/todolist" component={TodoList}></Route>
          <Route path="/12" component={TodoList}></Route>
        </div >
      </BrowserRouter>

    )
  }
}
export default App;