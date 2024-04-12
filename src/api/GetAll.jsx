// import React, { useEffect } from "react"
import axios from "axios"

async function GetAll() {
  const result = await axios.get("https://restcountries.com/v3.1/all")
  return result.data
}

export default GetAll
