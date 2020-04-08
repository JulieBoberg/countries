import React from "react";

const Countries = ({ filteredCountries }) => {
  return (
    <div style={{ fontSize: "1.5em" }}>
      <ul style={{ listStyle: "none" }}>
        {filteredCountries.map((country, i) => (
          <li key={i}>
            <strong>{country.name}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Countries;
