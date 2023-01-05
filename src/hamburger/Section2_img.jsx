import React from "react";

const style = {
    tableImg:{
        width:600,
        height:750,
    }
}

function Section2_img(){
    return(
      <div>
          <img src={"./image/tablesetting2.jpg"} style={style.tableImg} alt={"table_setting"}/>
      </div>
    );
}
export default Section2_img;