import React from "react";
import CardIcon from "assets/media/svg/pokeball-icon.svg";

export default function Card() {
    return (
        <div className="card">
            <div className="card__type card__type--fire">
                [Type]
            </div>
            <img className="card__icon"
                 src={CardIcon}
                 alt="pokeball"/>
            <div className="card__image">
                <img
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
                    alt="card"/>
            </div>
            <div className="card__content">
                <h3>
                    [Name]
                </h3>
            </div>
        </div>
    )
}