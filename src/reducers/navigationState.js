import * as NavigationStateUtils from 'NavigationStateUtils';
import * as type from '../constants/navigateActionTypes';

const initialNavState = {
    index: 0,
    routes: [
        { key: 'First', title: 'First' }
    ]
};

export default function navigationState(state = initialNavState, action) {
    switch (action.type) {
        case type.NAV_PUSH:
            if (state.routes[state.index].key === (action.state && action.state.key))
                return state;
            return NavigationStateUtils.push(state, action.state);

        case type.NAV_POP:
            if (state.index === 0 || state.routes.length === 1)
                return state;
            return NavigationStateUtils.pop(state);

        case type.NAV_JUMP_TO_KEY:
            return NavigationStateUtils.jumpTo(state, action.key);

        case type.NAV_JUMP_TO_INDEX:
            return NavigationStateUtils.jumpToIndex(state, action.index);

        case type.NAV_RESET:
            return {
                ...state,
                index: action.index,
                routes: action.routes
            };

        default:
            return state;
    }
}