import React from "react";


const Cards = (props) => {



    return(
        <div className={"card " + (props.clicked ? "animate" : "")} onClick={() => props.handleClick( props.id)} >  
            <div className="img-container">
                <img alt={props.name} src={props.url} width="250" height="250"/>
            </div>
        </div >
    )
};

export default Cards;