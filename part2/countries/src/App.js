import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([])
  const [tooMany, setTooMany] = useState('')
  // useEffect(() => {
  //   axois.get()
  // })

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
    console.log(filteredCountries.length)
  }

  const filteredCountries = countries.filter(country => {
    return country.name.common.toLowerCase().includes(filter.toLowerCase())
  })


  return (
    <div className="App">
      <div>find countries <input value={filter} onChange={handleFilter}/></div>
      {filteredCountries.map(country => <div key={country.cca3}>{country.name.common}</div>)}
    </div>
    
  );
}

export default App;
