import React from "react";
import Fade from "react-reveal";
import "../App.css";


const Header = () => {

return(
  
     
    





         

  <header id="home" >

  <nav id="nav-wrap">
  
    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
      Show navigation
    </a>
    <a className="mobile-btn" href="#home" title="Hide navigation">
      Hide navigation
    </a>
  
    <ul id="nav" className="nav" style={{justifyContent:'center'}}>
  
      <li className="current">
        <a className="smoothscroll" href="#home">
          Accueil
        </a>
      </li>
  
  
      <li>
        <a className="smoothscroll" href="#article">
          Posts
        </a>
      </li>
  
      <li>
        {/* <a className="smoothscroll" href="#portfolio">
          Réalisations
        </a> */}
      </li>
  
      <li >
         
        <a href="https://ibrahimasall.com" >
          Portfolio
        </a>
      </li><li >
         
         <a href="https://admin.ibrahimasall.com" >
           Espace Admin
         </a>
       </li>
    </ul>
  
  </nav>
  
  <div className="row banner">
  
    <div className="banner-text">
  
  
      <Fade bottom>
        <h1 className="responsive-headline">Blog</h1>
      </Fade>
      <Fade bottom duration={1200}>
        <h3>Ce blog va parler de nouvelles technologies, de techniques de développement informatique ainsi que de finances.</h3>
      </Fade>
      <hr />
      <Fade bottom duration={2000}>
        <ul className="social">
          <a href="https://github.com/Ibrahima-github/React-Blog" className="button btn project-btn">
            <i className="fa fa-book"></i>Projet
          </a>
          <a href="https://github.com/Ibrahima-github" className="button btn github-btn">
            <i className="fa fa-github"></i>Github
          </a>
        </ul>
      </Fade>
  
    </div>
  
  </div>
  <h3 >Bienvenue sur mon blog</h3>
  <p className="scrolldown">
    <a className="smoothscroll" href="#about">
  
      <i className="icon-down-circle"></i>
    </a>
  </p>
  </header>
  
)
}

export default Header;