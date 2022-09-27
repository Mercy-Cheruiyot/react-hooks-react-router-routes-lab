import React from "react";
import { actors } from "../data";
import NameMovies from "./NameMovies";

function Actors() {
  const actorsList= actors.map(actor => 
    <NameMovies key={actor.name}
     actor={actor}/>)
  return <div>
    <h1>Actors Page</h1>
    {actorsList}
  </div>;
  
}

export default Actors;
