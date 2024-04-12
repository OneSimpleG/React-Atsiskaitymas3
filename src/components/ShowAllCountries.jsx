import React from "react"
function ShowAllCountries({ countries, showHandler }) {
  return (
    <div className="cardBox">
      {countries?.map((country) => (
        <div
          className={`card ${country.region}`}
          key={countries.indexOf(country)}
        >
          <img src={country.flags.png} alt="Flag Not Found" />
          <div className="countryName">{country.name.common}</div>
          <div>Capital: {country.capital}</div>
          <div>Region: {country.continents}</div>
          <div className="buttonBox">
            <button className="more" onClick={() => showHandler(country)}>
              More
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
export default ShowAllCountries
