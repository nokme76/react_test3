import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import App2 from "./App2";
import App3 from "./App3";
import Hamburger from "./hamburger";
import MyFood from "./MyFood";
import App5 from "./App5";
import Calculator from "./test/Calculator";
import Events from "./test/Events";
import ConfirmButton from "./test/ConfirmButton";
import Accommodate from "./folder2/Accommodate";
import App6 from "./App6";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //   StrictMode: 자바스크립트의 문법을 엄격하게 확인한다는 의미
  //   React.StrictMode: 배포 버전에는 제외되고 개발 버전에서만 동작하는 엄격모드, 몇가지 함수를 중복 실행하여 잘못된 것이 없는지 개발자에게
  //    확인 하도록 함
  <React.StrictMode>
    {/*<App />*/}
    {/*<App2 />*/}
    {/*<App3 />*/}
    {/*  {<Hamburger/>}*/}
    {/*{<MyFood/>}*/}
    {/*{<App5/>}*/}
    {/*{<Accommodate/>}*/}
    {/*{<Calculator/>}*/}
    {/*{<Events/>}*/}
    {/*{<ConfirmButton/>}*/}
    {<App6/>}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
