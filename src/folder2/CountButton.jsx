// CountButton.jsx

import React from "react";
import {Button} from "react-bootstrap";

class CountButton extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            count:0,
        }
        // 객체 멤버 변수 count 선언
        this.count = this.state.count;
    }
    countUp = () => {
        console.log(" + 사용 전 this.count: " + this.count);
        this.count = this.count +1;
        // setState() 함수를 실행해야만 state의 값이 수정이 되고 state의 값이 수정되면 render() 함수가 재 실행됨
        this.setState({
           count: this.count,
        });
        console.log(" + 사용 후 this.count: " + this.count);
    };
    countDown = () => {
        console.log(" - 사용 전 this.count: " + this.count);
        this.count = this.count -1;
        this.setState({
            count: this.count,
        });
        console.log(" - 사용 후 this.count: " + this.count);
    };

    render() {
        return (
            <div>
                <label className={"form-label"}>count: <span>{this.count}</span></label>
                <Button variant={"primary"} className={"mx-3"} onClick={this.countUp}> + </Button>
                <Button variant={"success"} onClick={this.countDown}> - </Button>
            </div>
        );
    }



}


export default CountButton;