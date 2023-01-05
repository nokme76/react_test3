// NotificationList.jsx

import React from "react";
import Notification from "./Notification";

// 서버에서 전송되어야 할 데이터, 통신 모듈이 없기 때문에 임의로 만들어준 데이터
const msgData = [
    {id:1, message:"안녕하세요. 오늘 일정입니다"},
    {id:2, message: "점심 식사 시간입니다."},
    {id:3, message: "이제 곧 미팅이 시작됩니다."},

];

// 자바스크립트 타이머 객체
let timer;

// 클래스 컴포넌트 사용
class NotificationList extends React.Component {
    // 클래스 컴포넌트 생성자
    constructor(props) {
        super(props);

        // state 객체 선언, 클래스(객체)의 멤버 변수로 선언
        this.state = {
            // 메세지를 저장할 배열
            notification: [],
        };
    }


    // 컴포넌트가 마운트 된 후 실행되는 생명주기 함수
    componentDidMount() {
        // object 타입을 사용한 확장 표현식
        const {notification} = this.state;

        // 타이머를 사용하여 지정한 시간에 한번씪 반복함
        timer = setInterval(() => {
            // 지역 변수인 배열 notification 크기가 전역 변수인 배열 msgData 의 크기보다 적을경우 저장
            if (notification.length < msgData.length) {
                const index = notification.length;
                notification.push(msgData[index]);

                // setState() 함수를 사용하여 state 객체를 수정함
                this.setState({
                    notification: notification,
                });
            }  else {
                clearInterval(timer)
            }

        },2000);

    }

    // 화면을 생성하는 함수
    render() {
        return (
            <div>
                {/* map: es6 버전에서 추가된 배열 관련 함수, 지정한 배열의 크기만큼 반복하고 결과를 배열로 반환하는 함수*/}
                {this.state.notification.map(item => {
                    return <Notification key={item.id} message={item.message}/>
                })}
            </div>
        );
    }
// 2개가 바로 뜨는 이유 StrictMode<<<<


}
export default NotificationList;