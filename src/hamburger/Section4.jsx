import React from "react";

function Section4() {
    return (
        <div className={"d-grid justify-content-center col-sm-6 mx-auto"} id={"scrollspyHeading3"}>
            <h1>Contact</h1>
            <p>We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact us.</p>
            <p>Catering Service, 42nd Living St, 43043 New York, NY</p>
            <p>You can also contact us by phone 00553123-2323 or email catering@catering.com, or you can send us a message here:</p>
            <form>
                <p>
                    <input className={"form-control"} type={"text"} placeholder={"name"} required={""} name={"name"}/>
                </p>

                <p>
                    <input className={"form-control"} type={"number"} placeholder={"How many people"} required={""}
                           name={"People"}/>
                </p>
                <p>

                    <input className={"form-control"} type={"datetime-local"} placeholder={"Date and time"}
                           required={""}
                           name={"date"}/>
                </p>
                <p>
                    <input className={"form-control"} type={"text"} placeholder={"Message / Special requirements"}
                           required={""} name={"Message"}/>
                </p>

                <p>
                    <button className={"btn btn-secondary btn-section"} type={"submit"}>SEND MESSAGE</button>
                </p>
            </form>


        </div>
    );
}

export default Section4;