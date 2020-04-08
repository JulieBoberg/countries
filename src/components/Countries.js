import React from "react";

const Countries = ({ filteredCountries }) => {
  return (
    <div>
      <ul>
        {filteredCountries.map((country, i) => (
          <li key={i}>{country.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default Countries;
