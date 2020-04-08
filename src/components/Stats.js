import React, { Fragment } from "react";

const Stats = ({ filteredCountries }) => {
  return (
    <Fragment>
      <div>
        <p style={{ fontSize: "1.25em" }}>Languages</p>
        <ul>
          {filteredCountries.map(country => (
            <div>
              {country.languages.map((a, i) => (
                <li key={i}> {a.name} </li>
              ))}
            </div>
          ))}
        </ul>
      </div>

      <div>
        <p style={{ fontSize: "1.25em" }}>Details</p>
        {filteredCountries.map(country => (
          <Fragment>
            <ul style={{ listStyle: "none" }}>
              <li>Capital: {country.capital}</li>
              <li>Population: {country.population}</li>
            </ul>
            <img
              src={country.flag}
              alt='flag'
              style={{ width: "100px", height: "auto" }}
            />
          </Fragment>
        ))}
      </div>
    </Fragment>
  );
};
export default Stats;
