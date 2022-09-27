import { useState, useEffect } from "react"
import axios from 'axios'

const CountryInfo = ({ country }) => {
    const [weather, setWeather] = useState({})
    const [icon, setIcon] = useState('')
    useEffect(() => {
        console.log('capital in effect', country.capital[0])
        axios
            .get(`https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${country.capital[0]}&aqi=no`)
            .then(response => {
                setWeather(response.data.current)
                setIcon(response.data.current.condition.icon)
            })
    }, [])
    console.log('capital outside effect', country.capital[0])
    console.log('weather', weather)
    // console.log('weather cloud', weather.cloud)
    return (
        <>
            <h1>{country.name.common}</h1>
            <div>capital: {country.capital[0]}</div>
            <div>area: {country.area}</div>
            <h2>languages:</h2>
            <ul>
                {Object.values(country.languages).map(language => <li key={country.name.official}>{language}</li>)}
            </ul>
            <img src={country.flags.png} />
            <h2>Weather in {country.capital[0]}</h2>
            <div>temperature {weather.temp_c} Celcius</div>
            <img src={icon}/>
            <div>wind {weather.wind_mph} m/hr</div>
        </>
    )
}

export default CountryInfo