import React from "react";

function Navigate(){
    return(
        <nav className="navbar navbar-expand-sm d-flex mx-5" id={"nav-bar"}>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#scrollspyHeading1">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#scrollspyHeading2">Menu</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#scrollspyHeading3">Contact</a>
                    </li>
                </ul>
        </nav>
    );
}
export default Navigate;