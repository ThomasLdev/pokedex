import React from "react";
import FeaturesList from "./Feature";

export default function MainContent() {
    return (
        <div className="content">
            <h1 className="content__title">
                Hello ! This is a pokedex app !
            </h1>
            <h2 className="content__subtitle">
                I use it to learn and have fun with Pokemons
            </h2>
            <div className="content__container">
                <p className="content__catch">
                    What you can do with this app right now :
                </p>
                <FeaturesList/>
            </div>
        </div>
    );
}