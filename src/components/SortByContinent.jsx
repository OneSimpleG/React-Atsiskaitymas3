import { useState } from "react"
import React from "react"

const continentList = ["All"]
function SortByContinent({ countries, sort }) {
  const [continent, setContinent] = useState([])
  const copy = countries
  if (continentList.length < 7) {
    copy.every(function (el) {
      if (!continentList.includes(el.region)) {
        continentList.push(el.region)
        if (continentList.length === 7) {
          setContinent(continentList)
          return false
        }
      }
      return true
    })
  }
  return (
    <header className="sortBox">
      {continent?.map((el) => (
        <button
          key={continent.indexOf(el)}
          className={`continentButton ${el}`}
          value={el}
          onClick={(e) => {
            sort(e.target.value)
          }}
        >
          {el}
        </button>
      ))}
    </header>
  )
}

export default SortByContinent
