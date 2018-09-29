import React from "react";
import "./AnimalCard.css";

const AnimalCard = props => (
    <div className="card">
        <div className="img-container">
        <p>{props.breed}</p>
            <a onClick={() => props.selectAnimal(props.breed)} 
                className={props.curScore === 0 ? "style_prevu_kit style_prevu_kit_ex" : "style_prevu_kit"}
            >
                <img alt={props.breed} src={props.image} />

            </a>
        </div>
    </div>
);

export default AnimalCard;
