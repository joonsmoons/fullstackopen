const CountryInfo = ({ country }) => {
    if (Object.keys(country).length > 0) {
      // console.log('country info shown:', country.name.common)
      return (
        <>
          <h1>{country.name.common}</h1>
          <div>capital: {country.capital[0]}</div>
          <div>area: {country.area}</div>
          <h2>languages:</h2>
          <ul>
            {Object.values(country.languages).map(language => <li key={country.area}>{language}</li>)}
          </ul>
          <img src={country.flags.png} />
        </>
      )
    } else {
      return <></>
    }
  }

  export default CountryInfo