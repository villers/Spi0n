import * as type from '../constants/navigateActionTypes';

export function navigatePush(state) {
    state = typeof state === 'string' ? { key: state, title: state } : state;
    return {
        type: type.NAV_PUSH,
        state
    };
}

export function navigatePop() {
    return {
        type: type.NAV_POP
    };
}

export function navigateJumpToKey(key) {
    return {
        type: type.NAV_JUMP_TO_KEY,
        key
    };
}

export function navigateJumpToIndex(index) {
    return {
        type: type.NAV_JUMP_TO_INDEX,
        index
    };
}

export function navigateReset(routes, index) {
    return {
        type: type.NAV_RESET,
        index,
        routes
    };
}