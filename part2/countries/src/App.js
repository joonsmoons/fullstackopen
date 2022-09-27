import { useState, useEffect } from 'react'
import axios from 'axios'
import CountryInfo from './components/CountryInfo'

function App() {
  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([])
  const [info, setInfo] = useState({})

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => setCountries(response.data))
  }, [])

  const handleFilter = (event) => {
    setInfo({})
    setFilter(event.target.value)
  }

  const chooseCountry = (country) => (event) => {
    event.preventDefault()
    // console.log('show info', country)
    setInfo(country)
  }

  let filteredCountries = countries
    .filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))

  const showFilter = () => {
    // console.log('length:', filteredCountries.length)
    if (filteredCountries.length > 10) {
      return 'Please specify another filter. Too many matches (10+).'
    } else if (filteredCountries.length > 1) {
      return (
        <>
          {filteredCountries.map(country => {
            return (
              <div key={country.area}>
                {country.name.common}
                <button type="submit" onClick={chooseCountry(country)}>
                  Show
                </button>
              </div>
            )
          })
          }
        </>
      )
    } else if (filteredCountries.length === 1) {
      const country = filteredCountries[0]
      return <CountryInfo country={country} />
    }
  }

  const showInfo = () => {
    if (Object.keys(info).length > 0) {
      return <CountryInfo country={info} />
    } else {
      return <></>
    }
  }

  return (
    <div className="App">
      <div>find countries <input value={filter} onChange={handleFilter} /></div>
      {showFilter()}
      {showInfo()}
    </div>
  )
}



export default App;
