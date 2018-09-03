import * as types from "../constants/ActionTypes";
import $ from "jquery";
import { hashHistory } from 'react-router';

export const getUserInfo = () =>({type: "GET_USER_INFO"})
//export const addTodoItem = text =>({type: "ADD_TO_ITEM",text})
export const delTodoItem = id =>({type:"Del_TO_ITEM",id})
export const filterTodoItem = text =>({type: "FILTER_TO_ITEM", text})
export const editTodoItem = (id) =>({type: "EDIT_TO_ITEM",id})

export const addTodoItem = text =>(dispatch) =>{
    fetch('/api/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.token
        },
        body: JSON.stringify({
            text: text,
            completed: false,
            edit: false,
            userid: 1,
            tasks: []

        })
    }).then(todoList => {
            console.log();
            //getTodoList(todoList);
            fetch('/api/todos',{
                method:'GET',
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.token
                }
            }).then(response => {
                return response.json();
            }).then(todos => {
                //debugger;
                dispatch({
                    type: "RECEIVED_TODOS",
                    todos:todos
                })
            })
        });
}

export const getTodoList = (token) => (dispatch) => {
    fetch('/api/todos',{
        method:'GET',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': localStorage.token
        }
    }).then(response => {
        return response.json();
    }).then(todos => {
        //debugger;
        dispatch({
            type: "RECEIVED_TODOS",
            todos:todos
        })
    })
    // $.ajax({
    //     url: "/api/todos",
    //     type: "GET",
    //     headers: {
    //         Authorization: localStorage.token
    //     },
    //     success: todos => {
    //         dispatch({
    //             type: "RECEIVED_TODOS",
    //             todos
    //         });
    //     }
    // });
}

export const RegisterToServer =(name,password) =>(dispatch) =>{
   fetch('/api/users', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json'
       },
       body: JSON.stringify({
         name: name.value,
         password: password.value
       })
     })
       .then(response => {
         return response.text();
       })
}

export const LoginToServer =(name,password) =>(dispatch) =>{
   fetch('/api/login', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({
         name: name.value,
         password: password.value
       })
     })
     .then(response => {
           return response.text();
       })
      .then(token => {
          localStorage.token=token;
          console.log("LoginToServerToken",localStorage.token);
          //this.props.history.push("/todos");
           hashHistory.push("/todos");
        })
}