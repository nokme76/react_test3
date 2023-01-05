// Events.jsx

// 리액트는 html과 같은 이벤트를 가지고 있음

// 카멜명명법을 사용하므로 onclick="sum()" -> onClick={sum} 으로 변경되어 사용
// 매개변수 전달 시 이벤트 부분에 화살표 콜백 함수를 사용
//  onClick={() => sum(10)}

// 이벤트 사용 시 이벤트 핸들러도 매개변수로 전달이 가능함
//  onClick={(event) => sum(10,event)}

import React from "react";


function Events() {

    // 기본 함수를 클릭이벤트와 연동
    const click1 = () => alert("클릭이벤트 발생");
    // 매개변수가 있는 함수를 클릭 이벤트와 연동
    const click2 = (item) => alert(`매개변수 값 : ${item},\n매개 변수가 있는 발생`);
    // 매개변수로 이벤트 핸들러를 사용하는 함수를 클릭이벤트와 연동
    const click3 = (item, event) => {
        alert(`매개변수와 event 객체가 있는 클릭 이벤트`);
        alert(`매개변수 값: ${item}, event 객체: ${event.type}`);

    }


    return (
        <div className={"container d-flex justify-content-center mt-5 col-sm-4"}>
            <button type={"button"} className={"btn btn-primary"} onClick={click1}>일반 클릭 이벤트</button>
            <button type={"button"} className={"btn btn-success mx-4"} onClick={() => click2(100)}>매개변수가 있는 클릭 이벤트</button>
            <button type={"button"} className={"btn btn-info"} onClick={(event)=>click3(100,event)}>event 객체가 있는 클릭 이벤트</button>

        </div>
    );
}

export default Events;