import React from "react";
import './styles/navbar.css'
import logo from "./pics/logo_small.png"
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import DarkLightMode from "../components/DarkLightMode";
import { Link } from "react-router-dom";



const Navbar = () => {
    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("move_nav");
	};

    return(
<div>       


            <header> <div><a href="/"><img src={logo} width="115.724"  alt="Image?"  height="36" className="logo"/></a>
            <Link to="/formulario">
            <button class="button-57" role="button"><span class="text">Add</span><span>Publicar</span></button>
            </Link>
            </div>
        <nav ref={navRef}>
            <a href="/">Inicio</a>
            <a href="/#">Contactos</a>
            <a href="/#">Blog</a>
            <a href="/#">Acerca de nosotros</a>
            <button
                className="nava close"
                onClick={showNavbar}>
                <FaTimes />
            </button>
                        
            <div> <DarkLightMode></DarkLightMode>
            
            </div>    
       
            

            
        </nav>
 
  
        <button className="nava" onClick={showNavbar}>
            <FaBars />
        </button>
        </header>

        </div>
 )
 }
 export default Navbar
