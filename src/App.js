import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [countries, setCountries] = useState([]);
  const [results, setResults] = useState();

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then(response => {
      console.log(response.data.name);
      setCountries(response.data.name);
    });
  }, []);

  const handleCountries = event => {
    setCountries(event.target.value);
  };
  return (
    <div>
      <p>
        {" "}
        Find Countries: <input value={countries} onChange={handleCountries} />
      </p>
      <div>{countries}</div>
    </div>
  );
}

export default App;
