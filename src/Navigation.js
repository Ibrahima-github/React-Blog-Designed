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
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/">Home</NavLink>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/posts">Mes Posts</NavLink>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/developpement">Développement</NavLink>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/cryptomonnaie">Cryptomonnaie</NavLink>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/monyoutube">Mon youtube</NavLink>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/connexion">Connexion</NavLink>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
