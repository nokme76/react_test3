import React from "react";

function LinkList(){
    return(
        <ul className="nav nav-pills flex-column">
            <li className="nav-item">
                <a className="nav-link active" href="#">활성화</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">링크1</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">링크2</a>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled" href="#">비활성화</a>
            </li>
        </ul>
    );
}
export default LinkList;