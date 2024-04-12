import React from "react"

function CountrySearch({ countries, search }) {
  return (
    <div className="countrySearch">
      <input
        type="text"
        onChange={(e) => {
          search(e.target.value.toLowerCase())
        }}
      />
    </div>
  )
}

export default CountrySearch
