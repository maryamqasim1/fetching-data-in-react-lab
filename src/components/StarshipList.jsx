const StarshipList = (props) => {
  const starships = props.Starship.map((starship) => {
    return (
      <>
        <li key={starship.name}>
          <p>{starship.name}</p>
          <p>Class: {starship.starship_class}</p>
          <p>Manufacturer: {starship.manufacturer}</p>
          <p>Model: {starship.model}</p>
        </li>
      </>
    );
  });
  return (
    <section>
      <ul>{starships}</ul>
    </section>
  );
};

export default StarshipList;
