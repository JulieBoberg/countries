import React, { Fragment } from "react";

const Details = ({ filteredCountries, items }) => {
  return (
    <Fragment>
      <ul style={{ listStyle: "none" }}>
        {filteredCountries.map((country, i) => (
          <li key={i}>{country.items}</li>
        ))}
      </ul>
    </Fragment>
  );
};
export default Details;
