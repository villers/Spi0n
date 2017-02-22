import { NAV_JUMP_TO_INDEX, NAV_JUMP_TO_KEY, NAV_POP, NAV_PUSH, NAV_RESET, NAVIGATE } from '../constants/ActionTypes';

export function navigatePush(state) {
    state = typeof state === 'string' ? { key: state, title: state } : state;
    return {
        type: NAV_PUSH,
        state
    };
}

export function navigatePop() {
    return {
        type: NAV_POP
    };
}

export function navigateJumpToKey(key) {
    return {
        type: NAV_JUMP_TO_KEY,
        key
    };
}

export function navigateJumpToIndex(index) {
    return {
        type: NAV_JUMP_TO_INDEX,
        index
    };
}

export function navigateReset(routes, index) {
    return {
        type: NAV_RESET,
        index,
        routes
    };
}