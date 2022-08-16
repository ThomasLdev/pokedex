import React from "react";
import PokedexLogo from "assets/media/images/logo.png";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <a className="navbar__logo__container" href="/">
                    <img src={PokedexLogo}
                         alt="pokédex"/>
                    <p>Pokédex</p>
                </a>
            </div>
            <ul className="navbar__nav">
                <li className="navbar__nav__item">
                    <a className="nav-link" href="#">
                        View all Pokemons
                    </a>
                </li>
                <li className="navbar__nav__item">
                    <a className="nav-link" href="#">
                        Search for a Pokemon
                    </a>
                </li>
            </ul>
        </nav>
    )
}