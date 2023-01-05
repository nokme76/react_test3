import React from "react";

function Header() {
    return (
        <div className={"d-flex justify-content-between"}>
            <div>
                <p>collapse</p>
            </div>
            <div>
                <h4>My Food</h4>
            </div>
            <div className={"mx-4"}>
                <h4>Mail</h4>
            </div>
        </div>
    );
}

export default Header;
