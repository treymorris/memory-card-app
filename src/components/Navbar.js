import React from "react";

const Navbar = (props) => {
    
    return(
        <header className="container-fluid fixed-top" >
            <div className="row">
                <h1 className="col-sm-8">Memory Game</h1>
                <nav className="col-sm-4">
                    <p>Score: <span>{props.currentScore}</span></p>
                    <p>Top Score: <span>{props.highScore}</span> </p>
                    {props.children}
                </nav>
            </div>
        </header>     
    )
};

export default Navbar;