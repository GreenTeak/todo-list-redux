import React, { Component } from 'react';
import { connect } from "react-redux";
import {LoginToServer, RegisterToServer} from "../actions/index"
import 'bootstrap/dist/css/bootstrap.min.css';
import './col-center-block.css'


class Login extends Component {
  constructor() {
      super()
      this.state = {}
  }
  render() {
   let path = {pathname:`/todos`,
               state:this.props.userLogin.token
              }
      return (
      <div className="container">
        <div className="row">
          <div className="col-xs-6 col-md-4 col-center-block">
               <div className="form-group col-3">
                 <label htmlFor="exampleInputEmail1">Account</label>
                 <input type="text"   id="exampleInputEmail1"
                 aria-describedby="emailHelp" placeholder="Please enter your account"
                  ref={element => {this.name = element;}} />
               </div>
               <div className="form-group col-3">
                 <label htmlFor="exampleInputPassword1">Password</label>
                 <input type="password"  id="exampleInputPassword1" placeholder="Password"
                 ref={element => {this.password = element;}}/>
               </div>

               &nbsp;&nbsp;
                 <button type="submit" className="btn btn-primary" onClick ={() => {
                  this.props.LoginToServer(this.name, this.password);
                 
                 } }>登陆</button>
               &nbsp;&nbsp;&nbsp;&nbsp;
               <button type="submit" className="btn btn-primary" onClick ={() => {
                   this.props.RegisterToServer(this.name, this.password); }}>注册</button>
          </div>
        </div>
      </div>
              )
          }
}
const mapStateToProps = state => {
   return {
      userLogin:state.userLogin,
   };
};
const mapDispatchToProps = {
 LoginToServer,
 RegisterToServer
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
