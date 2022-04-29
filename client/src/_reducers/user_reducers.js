import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER
} from '../_actions/types';

// eslint-disable-next-line
export default function (state = {}, action) {
    switch (action.type) {
        case LOGIN_USER:
            // eslint-disable-next-line
            return { ...state, loginSuccess: action.payload };
            // eslint-disable-next-line
            break;

        case REGISTER_USER:
            // eslint-disable-next-line
            return { ...state, register: action.payload };
            // eslint-disable-next-line
            break;

        case AUTH_USER:
            // eslint-disable-next-line
            return { ...state, userData: action.payload };
            // eslint-disable-next-line
            break;

        default:
            return state;
    }
}