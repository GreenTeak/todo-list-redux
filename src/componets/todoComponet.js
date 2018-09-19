import React, { Component } from 'react';
import { connect } from "react-redux";
import {addTodoItem,delTodoItem, filterTodoItem,editTodoItem, getTodoList} from "../actions/index"
import 'bootstrap/dist/css/bootstrap.min.css';
import './col-center-block.css'
import { Navbar, Jumbotron, Button } from 'react-bootstrap';

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: []
        }
    }
    componentDidMount(){
        this.props.getTodoList(this.props.location.state);
    }
    render() {
        let div = (
            <div className="container">
                <div className="row">
                    <div className="col-xs-8 col-md-8 col-center-block">

                        <input ref={(el)=> {this.filters = el;}} type = "text"/>
                        <button className="button2 surround" onClick={(e) => {
                            this.props.filterTodoItem(this.filters.value)
                        }}>搜索</button>

                        <ul className="list-group">
                            {
                                this.props.todoList.filtered.map(item =>{
                                    return  (
                                        <li  className="list-group-item" key={item.id}>
                                            {item}
                                        </li>
                                    )
                                })
                            }
                        </ul>

                        <input ref={(el)=> {
                            this.input = el;
                        }} type = "text" className= "generatorStr"/>
                        <button className="button1 surround" onClick={() => {
                            this.props.addTodoItem(this.input.value);
                        }}>add todos</button>

                            <table className="table">
                                <thead className="thead-light">
                                <tr>
                                    <th scope="col">id</th>
                                    <th scope="col">operator</th>
                                    <th scope="col">content</th>
                                    <th scope="col">task</th>
                                    <th scope="col">details</th>
                                </tr>
                                </thead>
                                {

                                    this.props.todoList.todos.map(item =>{
                                        let path = {
                                            pathname:`/UserInfo/${item.id}`,
                                            state:item
                                        }
                                        return  (

                                            <tbody>
                                            <tr >
                                                <th scope="row" className="list-group-item" key={item.id} onClick={() => {
                                                    this.props.editTodoItem(item.id)
                                                }}>{item.id}</th>
                                                <td><input className="surround" type = "checkbox" onChange={()=> {
                                                    this.props.delTodoItem(item.id)}}/></td>
                                                <td> {item.completed ? <del>{item.text}</del>:item.text}</td>
                                                <td>{item.tasks.map((e)=>{
                                                    return <li> {e.content}</li>
                                                })}</td>
                                                <td><button>details</button></td>
                                            </tr>
                                            </tbody>
                                        )
                                    })
                                }
                            </table>

                        </div>

                    </div>
                </div>
        );
        return div;
   }
}
const mapStateToProps = state => {
    return {
        todoList: state.todos
    };
};
const mapDispatchToProps = {
    addTodoItem,
    delTodoItem,
    filterTodoItem,
    editTodoItem,
    getTodoList
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);
//onClick = {() => {
//                                 this.props.editTodoItem(item.id)
//                             }}
// {item.edit?<input type="text" ref={
//     (el)=> {this.edited = el;}} defaultValue={item.text} />:item.completed ? <del>{item.text}</del>:item.text}

