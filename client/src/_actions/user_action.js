import axios from "axios";
import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER
} from './types';

export function loginUser(dataToSubmit) {
    // axios 라이브러리로 body의 내용을 서버에 전송, 서버에서 받은 data를 request에 저장
    const request = axios.post('/api/users/login', dataToSubmit) // server 디렉토리의 index.js에 작성해놓은 app.post('/api/users/login')에 보낸다.
        .then(response => response.data) // 서버에서 보낸 response를 받는다.

    // return을 시켜서 redux에 보낸다. reducer에서 이전State와 액션을 받아 다음State을 만든다.
    return {
        type: LOGIN_USER,
        payload: request
    }
}

export function registerUser(dataToSubmit) {
    // axios 라이브러리로 body의 내용을 서버에 전송, 서버에서 받은 data를 request에 저장
    const request = axios.post('/api/users/register', dataToSubmit) // server 디렉토리의 index.js에 작성해놓은 app.post('/api/users/register')에 보낸다.
        .then(response => response.data) // 서버에서 보낸 response를 받는다.

    // return을 시켜서 redux에 보낸다. reducer에서 이전State와 액션을 받아 다음State을 만든다.
    return {
        type: REGISTER_USER,
        payload: request
    }
}

export function auth() {
    // axios 라이브러리로 body의 내용을 서버에 전송, 서버에서 받은 data를 request에 저장
    const request = axios.get('/api/users/auth')
        .then(response => response.data) // 서버에서 보낸 response를 받는다.

    // return을 시켜서 redux에 보낸다. reducer에서 이전State와 액션을 받아 다음State을 만든다.
    return {
        type: AUTH_USER,
        payload: request
    }
}