import React from "react";
import Goal from "./folder3/Goal";
import Greeting from "./folder3/Greeting";
import LoginControl from "./folder3/LoginControl";
// 조건부 랜더링
function App6(){
    return(
      <div>
          <Goal isGoal={true}/>
          <hr/>
          <Greeting isLoggedin={false}/>
          <hr/>
          <LoginControl/>
      </div>
    );
}

export default App6;