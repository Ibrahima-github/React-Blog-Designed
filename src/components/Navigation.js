import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';


export const Navigation = () => {

    return(
        <div className="d-flex justify-content-center">

            <Navbar>
                <Navbar.Toggle />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav >
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/">A propos</NavLink>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/posts">Accueil</NavLink>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/developpement">Informatique</NavLink>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/cryptomonnaie">Cryptomonnaie</NavLink>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/monyoutube">Mon youtube</NavLink>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/login">Connexion</NavLink>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </div>
        
    )
}
