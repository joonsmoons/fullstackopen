import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    // console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  let filteredCountries = countries
    .filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))
  
  const showFilter = () => {
    // console.log('length:', filteredCountries.length)
    if (filteredCountries.length > 10) {
      return 'Please specify another filter. Too many matches (10+).'
    } else if (filteredCountries.length > 1) {
      return filteredCountries.map(country => <div key={country.cca3}>{country.name.common}</div>)
    } else if (filteredCountries.length === 1) {
      const country = filteredCountries[0]
      console.log(country)
      console.log(country.languages)
      return (
        <>
          <h1>{country.name.common}</h1>
          <div>capital: {country.capital[0]}</div>
          <div>area: {country.area}</div>
          <h2>languages:</h2>
          <ul>
            {Object.values(country.languages).map(language => <li>{language}</li>)}
          </ul>
          <img src={country.flags.png}/>
        </>
      )
    }
  }

  return (
    <div className="App">
      <div>find countries <input value={filter} onChange={handleFilter}/></div>
      {showFilter()}
    </div>
  )
}

export default App;
