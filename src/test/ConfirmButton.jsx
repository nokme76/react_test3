// ConfirmButton.jsx

import React, {useState} from "react";

function ConfirmButton(prop) {
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirm = () => {
        setIsConfirmed((prevConfirmed) => !isConfirmed);
        setTimeout(()=>{
            setIsConfirmed(false);
        },2000);
    };


    return (
        <div className={"container d-flex justify-content-center"}>
            <button type={"button"} className={"btn btn-primary mt-5"} onClick={handleConfirm}
                    disabled={isConfirmed}>
            {isConfirmed ? "확인 완료" : "확인 하기"}
            </button>
        </div>
    );
}
export default ConfirmButton;