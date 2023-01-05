import React, {useState} from "react";
import button from "bootstrap/js/src/button";
import Greeting from "./Greeting";

function LoginButton(props) {

    return (
        <button onClick={props.onClick}>로그인</button>
    );

}

function LogoutButton(props) {

    return (
        <button onClick={props.onClick}>로그아웃</button>
    );

}

function LoginControl(props) {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick = () => {
        setIsLoggedIn(true);

    }

    const handleLogoutClick = () => {
        setIsLoggedIn(false);

    }

    let Button;

    if (isLoggedIn) {
        button = <LoginButton onClick={handleLoginClick()}/>;

    } else {
        button = <LogoutButton onClick={handleLogoutClick()}/>;
    }
    return (
        <Greeting isLoggedin={isLoggedIn}/>

    );


}

export default LoginControl;