const StarshipList = (props) => {
  const starships = props.Starship.map((starship) => {
    return <li key={starship.name}>{starship.name}</li>;
  });
  return (
    <div>
      {/* <h1>hi</h1> */}
      <ul>{starships}</ul>
    </div>
  );
};

export default StarshipList;
