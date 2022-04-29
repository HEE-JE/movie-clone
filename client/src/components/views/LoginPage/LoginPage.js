import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../../_actions/user_action'
import { useNavigate } from 'react-router-dom';
import Auth from '../../../hoc/auth';

function LoginPage() {
    const dispatch = useDispatch();

    const [Email, setEmail] = useState(""); // state 초기 설정, 태그 안에서 바뀔때 마다 state를 바꾼다.
    const [Password, setPassword] = useState(""); // state는 이와같은 형식으로 사용하고 태그의 value 속성에 값 지정

    // onChange속성에 지정, 입력을 하여 내용이 바뀐 경우 setState를 실행하여 state를 변경해주는 함수
    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const navigate = useNavigate(); // navigate사용을 위한 변수선언
    const onSubmitHandler = (event) => {
        event.preventDefault(); // refresh가 안되도록 한다. refresh가 될 경우 밑의 코드가 실행되지 않는다.

        let body = { // 입력한 값들이 저장된 State(Email, Password)를 email과 password에 저장
            email: Email,
            password: Password
        }

        dispatch(loginUser(body)) // redux 사용, loginUser 액션을 취한다.
            .then(response => {
                if (response.payload.loginSuccess) {
                    navigate('/') // 로그인에 성공하면 LandingPage로 이동
                } else {
                    alert("Error");
                }
            })

    }

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh'
        }}>
            <form style={{ display: 'flex', flexDirection: 'column' }}
                onSubmit={onSubmitHandler}>
                <label>Email</label>
                <input type="email" value={Email} onChange={onEmailHandler} />
                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />
                <br />
                <button type="submit">
                    Login
                </button>
            </form>
        </div>
    )
}

export default Auth(LoginPage, false)