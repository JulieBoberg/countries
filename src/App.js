import React, { useState, useEffect } from "react";
import axios from "axios";
import Countries from "./components/Countries";

function App() {
  // countries requested from API
  const [countries, setCountries] = useState([]);

  const [filtered, setFilter] = useState(false);

  const [newFilter, setNewFilter] = useState();

  // Getting data from api upon page loading
  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then(response => {
      setCountries(response.data);
    });
  }, []);

  // When user types in input box, state is set
  const handleCountries = event => {
    setNewFilter(event.target.value);
    setFilter(true);
  };

  const filteredCountries = filtered
    ? countries.filter(country =>
        country.name.toLowerCase().includes(newFilter.toLowerCase())
      )
    : countries;

  return (
    <div>
      <p>
        {" "}
        Find Countries: <input value={newFilter} onChange={handleCountries} />
      </p>
      <div>
        {filteredCountries.length > 10 ? (
          "Please filter results further"
        ) : (
          <Countries filteredCountries={filteredCountries} />
        )}
      </div>
    </div>
  );
}

export default App;
