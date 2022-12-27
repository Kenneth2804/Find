import React from "react";
import './styles/card.css';
import Details from "./Details";
import { Link } from "react-router-dom";
export default function Card ({id, name, surname, age, description, photo, tattoos, height, country}){

    const lugar = [];

    for (let index = 0; index < lugar.length; index++) {
    lugar.push(country[index])
    
}
    return(
        <div className="containerr">
            <div className="card">

<Link to="/details">
    <img src={photo} alt="img not found" width="100px" height="100px"/>
</Link>

<h2>Nombre: </h2>{name} {surname}
<h2>Edad: </h2>{age}

<h2>Estatura:</h2>{height}cm
<div>
{
     lugar?.map(el => (
        <div >
            <h5 key={el}><li>
                {el}</li>
            </h5>
        </div>
    ))}
</div>
            </div>
        </div>
    )
}