import React, { Component } from 'react';
import { connect } from "react-redux";
//import { match} from 'react-router'

class UserInfo extends Component {
    render(){
        return (
            <div className="textdiv">
                <ul>
                    {
                        <ul key={this.props.location.state.id}>
                            <li>id:{this.props.location.state.id}</li>
                            <li>text: {this.props.location.state.text}</li>
                            <li>completed: {this.props.location.state.completed?"true":"false"}</li>
                            <li>edit: {this.props.location.state.edit?"true":"false"}</li>
                        </ul>
                    }
                </ul>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        todoList: state.todos
    };
};

export default connect(
    mapStateToProps,
)(UserInfo);
//this.props.todoList.linkto