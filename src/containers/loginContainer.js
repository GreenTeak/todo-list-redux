import React from "react";
import { connect } from "react-redux";
import TodoList from "../componets/loginComponet";

 export const mapStateToProps = state => {
    const Login = state.userLogin;
    return {
        userLogin
    };
};

export default connect(mapStateToProps)(Login);//把mapStateToProps绑定在ToDoList