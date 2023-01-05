import React from "react";

function Navigate(){
    return(
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="container-fluid">
                <ul className="navbar-nav">
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
            </div>
        </nav>
    );
}

export default Navigate;