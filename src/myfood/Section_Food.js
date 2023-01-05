import React from "react";


function Section_Food(props){

    return(
      <div className={"d-grid col-sm-3"}>
          <img src={props.img} className={"w-75 px-2 py-3"} />
          <h2>{props.title}</h2>
          <p>{props.content}</p>
      </div>
    );
}

export default Section_Food;