import { connect } from "react-redux";
import UserInfo from "../componets/userInfoComponet";

const mapStateToProps = state => {
    const userInfo = state.userInfo;
    return {
        userInfo
    };
};

export default connect(mapStateToProps)(UserInfo);//把userInfo组件绑定在mapStateToProps