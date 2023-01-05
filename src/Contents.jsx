// Contents.jsx

import React from "react";

const styles = {
    fakeImg:{
        height: 200,
        backgroundColor: "#aaa",
    },
};
function Contents(){
    return(
        <div>
            <h2>제목</h2>
            <h5>부제목</h5>
            <div style={styles.fakeImg}>페이크 이미지</div>
            <p>섬섬텍스트</p>
            <p>솰라리솰라</p>
        </div>
    );
}

export default Contents;