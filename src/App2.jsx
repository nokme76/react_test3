// App2.jsx

import React from "react";
import Contents from "./Contents";
import Footer from "./Footer";
import Header from "./Header";
import Navigate from "./Navigate";
import MyInfo from "./MyInfo";
import LinkList from "./LinkList";

// <style>
//     .fake-img{
//     height:200px;
//     backhround-color:#aaa;
// }
// </style>

const styles = {
    fakeImg:{
        height: 200,
        backgroundColor: "#aaa",
    },
};

const App2 = () => {
    return (
        <div>
            <Header/>

            <Navigate/>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-4">
                        <MyInfo/>
                        <LinkList/>
                        <hr className="d-sm-none"/>
                    </div>
                    <div className="col-sm-8 ">
                        <Contents/>

                        <Contents/>
                    </div>
                </div>
            </div>

            <Footer/>

        </div>
    );

}

export default App2;