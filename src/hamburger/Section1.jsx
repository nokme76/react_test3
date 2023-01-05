import React from "react";


const style = {
    ham: {
        backgroundSize: "cover",
        position: "relative",
        display: "inline-block",
        backgroundRepeat: "no-repeat",
    },
    hamTxt: {
        position: "absolute",/* 핵심코드 */
        top: "50%", /* 핵심코드 */
        left: "50%", /* 핵심코드 */
        transform: "translate( -50%, -50%)", /* 핵심코드 */
        fontSize: "x-large",
    },
}

function Section1() {
    return (
        <div className={"d-grid justify-content-center"}>
            <img src={"./image/hamburger.jpg"} alt={"hamburger"} className={"ham"}/>
            <div>
                <h1 className={"ham-txt"}>Le Catering</h1>
            </div>
        </div>
    );
}

export default Section1;