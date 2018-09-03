import React from "react";
import { connect } from "react-redux";
import TodoList from "../componets/todoComponet";

 export const mapStateToProps = state => {
    const todos = state.todos;
    console.log("todos", todos);
    return {
        todos
    };
};

export default connect(mapStateToProps)(TodoList);//把mapStateToProps绑定在ToDoList