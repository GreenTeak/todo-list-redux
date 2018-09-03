const initialState = {
loginError: ''
};

export default function userLogin(state = initialState, action) {
    switch (action.type) {
            case "ADD_TOKEN_err":
            return{
//               loginError: false
            }
            default:
               return state;
    }
}