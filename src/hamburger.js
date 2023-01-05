import React from "react";
import Header from "./hamburger/Header";
import Navigate from "./hamburger/Navigate";
import Section1 from "./hamburger/Section1";
import Section2 from "./hamburger/Section2";
import Section3 from "./hamburger/Section3";
import Footer from "./hamburger/Footer";
import Section4 from "./hamburger/Section4";

const Hamburger = () => {
    return (
        <div>

                <nav className={"navbar fixed-top bg-light d-flex"}>
                    <Header/>
                    <Navigate/>
                </nav>

            <div className="container-fluid" data-bs-spy="scroll" data-bs-target="#nav-bar" data-bs-offset="0" class="scrollspy-example" tabindex="0">
                <div className={"row d-flex justify-content-center"}>
                    <Section1/>

                    <Section2/>

                    <br/>
                    <hr className={"my-5"}/>
                    <Section3/>

                    <br/>
                    <hr className={"my-5"}/>
                    <Section4/>

                </div>
            </div>

                <Footer/>

        </div>
    );
}

export default Hamburger;