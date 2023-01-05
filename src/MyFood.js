import React from "react";
import Header from "./myfood/Header";
import Section_Food from "./myfood/Section_Food";

const style = {
    bodyPadding: {
        paddingLeft: 350,
        paddingRight: 350,
    },
}

function MyFood() {
    return (
        <div className={"container vw-100 px-5"}>
            <Header/>

            <div className={"container-fluid d-flex w-100"}>
                <Section_Food img={"/image/sandwich.jpg"}/>
                <Section_Food img={"/image/sandwich.jpg"}/>
                <Section_Food img={"/image/sandwich.jpg"}/>
                <Section_Food img={"/image/sandwich.jpg"}/>
            </div>


        </div>
    );
}

export default MyFood;