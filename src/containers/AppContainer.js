import { connect } from 'react-redux';
import { navigatePop } from '../actions/navigate';

import AppContainerScreen from "../components/AppContainerScreen";

const mapStateToProps = (state) => {
    return {
        navigationState: state.navigationState
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        backAction: () => {
            dispatch(navigatePop())
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainerScreen);
