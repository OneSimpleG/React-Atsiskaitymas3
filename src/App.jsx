import "./App.css"
import { useEffect, useState } from "react"
import ShowAllCountries from "./components/ShowAllCountries"
import SortByContinent from "./components/SortByContinent"
import GetAll from "./api/GetAll"
import CountrySearch from "./components/CountrySearch"
import ShowMoreInfo from "./components/ShowMoreInfo"
function App() {
  const [countries, setCountries] = useState(null)
  const [data, setData] = useState(null)
  const [filter, setFilter] = useState(null)
  const [show, setShow] = useState(false)
  // Show all countrys
  useEffect(() => {
    async function getData() {
      const data = await GetAll()
      data.sort((a, b) => a.name.common.localeCompare(b.name.common))
      setCountries(data)
      setData(data)
    }
    getData()
  }, [])
  // Filter countrys by Continent
  const sortContinentHandler = (value) => {
    const copy = [...data]
    switch (value) {
      case "Africa":
        setCountries(copy.filter((country) => country.region === "Africa"))
        setFilter("Africa")
        break
      case "Asia":
        setCountries(copy.filter((country) => country.region === "Asia"))
        setFilter("Asia")
        break
      case "Europe":
        setCountries(copy.filter((country) => country.region === "Europe"))
        setFilter("Europe")
        break
      case "Americas":
        setCountries(copy.filter((country) => country.region === "Americas"))
        setFilter("Americas")
        break
      case "Oceania":
        setCountries(copy.filter((country) => country.region === "Oceania"))
        setFilter("Oceania")
        break
      case "Antarctic":
        setCountries(copy.filter((country) => country.region === "Antarctic"))
        setFilter("Antarctic")
        break
      default:
        setCountries(data)
        setFilter(null)
    }
  }
  // Filter countrys by Name (and continent if selected)
  const searchHandler = (value) => {
    setCountries(data)
    const copy = [...data]
    setCountries(
      copy.filter((country) =>
        filter !== null
          ? country.name.common.toString().toLowerCase().includes(value) &&
            country.region === filter
          : country.name.common.toString().toLowerCase().includes(value)
      )
    )
  }

  const showHandler = (value) => {
    setShow(value)
  }

  if (countries != null) {
    return (
      <div className="App">
        <ShowMoreInfo show={show} setShow={setShow} />
        <CountrySearch search={searchHandler} />
        <SortByContinent countries={countries} sort={sortContinentHandler} />
        <ShowAllCountries countries={countries} showHandler={showHandler} />
      </div>
    )
  }
}

export default App
