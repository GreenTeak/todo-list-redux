const initialState = {
    userInfo:{
        name: "shery"
    }
};

export default function userInfo(state = initialState, action) {
    switch (action.type) {
        case "GET_USER_INFO":
            state = initialState.userInfo;
            return {
                ...state
            }
        default:
            return state;
    }
}