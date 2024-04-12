import React from "react"

function ShowMoreInfo({ show, setShow }) {
  if (show !== false) {
    if (document.getElementsByClassName("countrySearch")[0] !== undefined) {
      document.getElementsByClassName("countrySearch")[0].style.display = "none"
    }

    // console.log(show)
  } else {
    if (document.getElementsByClassName("countrySearch")[0] !== undefined) {
      document.getElementsByClassName("countrySearch")[0].style.display = "flex"
    }
  }
  const getCurencies = () => {
    let curerncyList = []
    for (let curency in show.currencies) {
      curerncyList.push(
        `${show.currencies[curency].name}: ${show.currencies[curency].symbol}`
      )
    }
    return curerncyList
  }
  const getLanguages = () => {
    let languageList = []
    for (let language in show.languages) {
      languageList.push(show.languages[language])
    }
    return languageList
  }
  return show === false ? (
    false
  ) : (
    <div className="overlay">
      <div className="overlayDark">
        <button onClick={() => setShow(false)}>&times;</button>
        <div className="overlayInfo">
          <img src={show.flags.png} alt="Flag Not Found" />
          <div className="overlayCountryName">{show.name.common}</div>
          <div>Capital: {show.capital}</div>
          <div>Region: {show.region}</div>
          <div>Population: {show.population}</div>
          <div>Area: {show.area} Km&sup2;</div>
          <div>
            Curency:
            {getCurencies().map((el, i) => (
              <li key={i}>{el}</li>
            ))}
          </div>
          <div>
            Language:
            {getLanguages().map((el, i) => (
              <li key={i}>{el}</li>
            ))}
          </div>
          <div>
            Neighbours:
            {show.borders?.map((el, i) => (
              <li key={i}>{el}</li>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowMoreInfo
