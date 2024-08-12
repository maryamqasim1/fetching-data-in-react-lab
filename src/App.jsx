import * as starshipService from "./services/starshipService";
import { useState } from "react";
import StarshipList from "./components/StarshipList";

const App = () => {
  const fetchData = async () => {
    const data = await starshipService.show();
    const newData = {
      name: data.results.name,
      starship_class: data.results.starship_class,
      manufacturer: data.results.manufacturer,
      model: data.results.model,
    };
    setStarship(newData);
  };

  return (
    <>
      <h1>Star Wars API</h1>
      <h2>Search</h2>
      <div>
        <label htmlFor="">Search Term: </label>
        <input type="text" name="" id="" />
        <button onClick={fetchData}>Search</button>
      </div>
      <h2>Starships</h2>
      <p>Number of results: {starship.length}</p>
      <StarshipList starship={starship} />
    </>
  );
};

export default App;
