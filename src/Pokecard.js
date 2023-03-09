import React from 'react';
import "./Pokecard.css"
//Shows a single Pokemon, with their name, image, and type.


const Pokecard = ({name, image, type, base_experience} )=> {
    return <div id="Pokecard">
    <h4>{name}</h4>
    <img src={image}/>
    <p>type = {type}</p>
    <p>{base_experience}</p>
    </div>
}

export default Pokecard;
