// FunctionComponent.jsx
//  1. 모든 컴포넌트는 React를 import 해서 사용함
//  2. 함수 컴포넌트는 그냥 함수 생성
//  3. 함수를 컴포넌트는 export default로 설정
//  4. 함수 컴포넌트에는 return에서 jsx문법을 사용함
//  5. state 변경 및 생명주기에 관련된 함수를 사용하기 위해서 hooks를 사용함


import React, {useState} from "react";


function FunctionComponent(props) {
    return (
        <div>
            <p>함수 컨포넌트 화면</p>
        </div>
    );
}

export default FunctionComponent;