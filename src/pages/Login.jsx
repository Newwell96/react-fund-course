import React, {useContext} from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import * as events from "events";
import {AuthContext} from "../context";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('isAuth', 'true');
    }

    return (<div>
            <h1>
                Страница для логина
            </h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder='Введите логин'/>
                <MyInput type="password" placeholder='Введите пароль'/>
                <MyButton>Войти</MyButton>
            </form>
        </div>);
};

export default Login;