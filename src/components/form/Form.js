import { useState, useEffect } from "react"
import { WiNa } from "react-icons/wi"
import { BsSearch } from "react-icons/bs"
import axios from "axios"
import "./Form.css"
export const Form = ({ info, setInfo }) => {
  const [city, setCity] = useState("")
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    console.log(city)
  }, [city])

  const handleChange = async () => {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    try {
      await axios(url).then((data) => setInfo(data.data))
    } catch (error) {
      console.log(error)
    }
    setCity("")
    setLoading(false)
  }
  const urlIcons = `https://openweathermap.org/img/wn/${
    info && info.weather[0].icon
  }@4x.png`
  const unix_timestamp = info && info.dt
  const date = new Date(unix_timestamp * 1000)
  const hours = "0" + date.getHours()
  const minutes = "0" + date.getMinutes()
  const dateTime = hours.substr(-2) + ":" + minutes.substr(-2)
  return (
    <div className="form-section">
      <form
        className="form-container"
        onSubmit={(e) => {
          e.preventDefault()
          handleChange()
        }}
      >
        <div className="search-icon-container form">
          <input
            type="text"
            value={city}
            className="input-text"
            placeholder="Search for places..."
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
      </form>
      <div className="weather-icons">
        {loading ? (
          <span className="not-applicable-icon form-field-not-applicable-icon">
            <WiNa />
          </span>
        ) : (
          <img src={urlIcons} alt="weather-icons" />
        )}
      </div>
      <div className="main-temp-text-container">
        {info ? (
          <span>
            {info.name},{info.sys.country}
          </span>
        ) : (
          <span className="not-applicable-icon form-field-not-applicable-icon">
            <WiNa />
          </span>
        )}
      </div>
      <div className="temp-text-container">
        {info ? (
          <span className="temp-text">
            {Math.round(info.main.temp)}
            <sup>°C</sup>
          </span>
        ) : (
          <span className="not-applicable-icon form-field-not-applicable-icon">
            <WiNa />
          </span>
        )}
      </div>
      <div className="date-time-container">
        {info ? (
          <span className="date-time">{dateTime}</span>
        ) : (
          <span className="not-applicable-icon form-field-not-applicable-icon">
            <WiNa />
          </span>
        )}
      </div>
      <div className="weather-desc-container">
        {info ? (
          <span className="weather-desc">{info.weather[0].description}</span>
        ) : (
          <span className="not-applicable-icon form-field-not-applicable-icon">
            <WiNa />
          </span>
        )}
      </div>
    </div>
  )
}
export default Form
