import React from "react";
import MadeGoal from "./MadeGoal";
import MissedGoal from "./MissedGoal";

// 조건부 랜더링: 어떠한 조건에 따라서 화면에 표시할 랜더링이 달라지는 것
// if문 사용시 render() 함수가 동작되는 return 부분에서 조건문을 사용하는 것이 아니라 return문 밖에서 조건문을 사용하고 return 안에서는 삼항 연산자를 사용함

// 자바스크립트의 true/false
//  true: 논리형 true, 빈 object 타입 {}, 빈 배열[], 0이 아닌 숫자, 빈 문자열이 아닌 문자열
//  false: 논리형 false, 숫자0, 0.0, 빈 문자열 '', "", ``, null, undefined, NaN(Not a Number)
function Goal(porps) {
    const isGoal = porps.isGoal;

    if (isGoal) {
        return <MadeGoal/>
    }
    return <MissedGoal/>


}

export default Goal;