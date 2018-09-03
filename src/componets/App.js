import UserInfo from "../containers/userInfoContainer"
import TodoList from "../containers/todoContainer"
import Login from "../containers/todoContainer"
import React from 'react';
class App extends React.PureComponent {
    render() {
        return <div>
            <Login />
            <UserInfo />
            <TodoList />
        </div>
    }
}
export default App;