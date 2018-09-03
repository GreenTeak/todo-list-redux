import React, { Component } from 'react';
import { connect } from "react-redux";
import {addTodoItem,delTodoItem, filterTodoItem,editTodoItem, getTodoList} from "../actions/index"
import 'bootstrap/dist/css/bootstrap.min.css';
import './col-center-block.css'

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
        return (
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
                <ul>
                {
                    this.props.todoList.todos.map(item =>{
                        let path = {
                            pathname:`/UserInfo/${item.id}`,
                            state:item
                        }
                        return  (
                          <div>
                            <li className="list-group-item" key={item.id} onClick={() => {
                                 this.props.editTodoItem(item.id)
                             }}>
                                <input className="surround" type = "checkbox" onChange={()=> {
                            this.props.delTodoItem(item.id)}}/>
                                  {item.completed ? <del>{item.text}</del>:item.text}
                                <button className="surround">x</button>
                            </li>
                             {item.tasks.map((e)=>{
                               return <li> {e.content}</li>
                             })}
                           </div>
                        )
                    })
                }
                </ul>
              </div>
           </div>
        </div>
        );
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

