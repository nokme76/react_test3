import React from "react";
import Section3_img from "./Section3_img";
import Section3_txt from "./Section3_txt";

function Section3(){
    return(
        <div className={"d-flex justify-content-center my-5 col-sm-6 mx-auto"} id={"scrollspyHeading2"}>
            <Section3_txt/>
            <Section3_img/>
        </div>
    );
}

export default Section3;