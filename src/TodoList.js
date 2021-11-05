import React, { Component } from "react";
import "./TodoList.css";
class TodoList extends Component {
  state = {
    todo: "",
    todos: []
  }
  handle = (e) => {
    this.setState({
      todo: e.target.value
    })
  }
  add = (e) => {
    let input = document.getElementById("input");
    if ((e.key === "Enter" && e.target.value !== "") || (e.target.tagName === "BUTTON" && input.value !== "")) {
      console.log("ok");
      this.setState({
        todo: "",
        todos: [...this.state.todos, input.value]
      })
    }
  }
  finishTask = (e) => {
    e.stopPropagation();
    e.target.classList.toggle("finished");
  }
  deleteTask(index) {
    let arr = this.state.todos;
    arr.splice(index, 1);
    this.setState({
      todos: arr
    })
  }
  render() {
    return (
      <div className="todo-list">
        <h1>Todo List</h1>
        <input type="text" placeholder="Enter Your Todo" onInput={this.handle} onKeyDown={this.add} value={this.state.todo} id="input" />
        <button onClick={this.add}>Add</button>
        <div className="todo-items">
          {
            this.state.todos.length === 0 ? <p>There is no todo to show.</p> :
              this.state.todos.map((item, index) =>
                <div className="todo-item" key={index}>
                  <div onClick={this.finishTask} key={index}>{item}</div>
                  <span onClick={() => { this.deleteTask(index) }}>Delete</span>
                </div>
              )
          }
        </div>
      </div>
    )
  }
}

export default TodoList;