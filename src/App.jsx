import { useState, useEffect } from "react";
import * as starshipService from "./services/starshipService";
import StarshipList from "./components/StarshipList";
import StarshipSearch from "./components/StarshipSearch";

const App = () => {
  const [Starship, setStarship] = useState([]);

  const fetchData = async (searchTerm) => {
    try {
      const data = await starshipService.show(searchTerm);
      if (data.error) {
        throw new Error(data.error);
      }
      setStarship(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Star Wars API</h1>
      <h2>Search</h2>
      <StarshipSearch fetchData={fetchData} />
      <h2>Starships</h2>
      <p>Number of results: {Starship.length}</p>
      <StarshipList Starship={Starship} />
    </>
  );
};

export default App;
