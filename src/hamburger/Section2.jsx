import React from "react";
import Section2_img from "./Section2_img";
import Section2_txt from "./Section2_txt";

function Section2(){
    return(
      <div className={"d-flex col-sm-7 text-center my-5 col-sm-6 mx-auto"} id={"scrollspyHeading1"}>
          <Section2_img/>
          <Section2_txt/>
      </div>
    );
}
export default Section2;