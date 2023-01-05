import React from "react";

const styles = {
    fakeImg:{
        height: 200,
        backgroundColor: "#aaa",
    },
};
function MyInfo(){
    return(
      <div>
          <h2>나에대해</h2>
          <h5>내사진</h5>
          <div style={styles.fakeImg}>가짜 이미지</div>
          <p>아무 글자나 막 입력해 놓은거</p>
          <h3 className="mt-4">링크들</h3>
          <p>로렘 잇섬</p>
      </div>
    );
}

export default MyInfo;