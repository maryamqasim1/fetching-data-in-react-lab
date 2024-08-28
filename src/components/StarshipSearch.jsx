import { useState } from "react";

const StarshipSearch = (props) => {
  const [searchTerm, setSearch] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    props.fetchData(searchTerm)
    setSearch('')
    // handleSearch(searchTerm);
    // console.log(searchTerm);
  };

  return (
    <>
      <div>
        <label htmlFor="searchTerm">Search Term: </label>
        <form onSubmit={handelSubmit}>
          <input
            type="text"
            id="searchTerm"
            value={searchTerm}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </>
  );
};

export default StarshipSearch;
