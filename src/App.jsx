import { useState, useEffect } from "react";
import * as starshipService from "./services/starshipService";
import StarshipList from "./components/StarshipList";

const App = () => {
  const [Starship, setStarship] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await starshipService.show();
        if (data.error) {
          throw new Error(data.error);
        }
        setStarship(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Star Wars API</h1>
      <h2>Search</h2>
      <div>
        <label htmlFor="">Search Term: </label>
        <input type="text" name="" id="" />
        <button>Search</button>
      </div>
      <h2>Starships</h2>
      <p>Number of results: {Starship.length}</p>
      <StarshipList Starship={Starship} />
    </>
  );
};

export default App;
