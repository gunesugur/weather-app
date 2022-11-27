import axios from "axios"
import { useState, useEffect } from "react"
import "./HourlyWeatherForecast.css"
const HourlyWeatherForecast = ({ info, cityInfo }) => {
  const [forecast, setForecast] = useState()
  useEffect(() => {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityInfo}&appid=${apiKey}&units=metric`
      )
      .then((data) => setForecast(data.data.list))
  }, [cityInfo])
  console.log(forecast)
  const getDateTime = (dt) => {
    const unix_timestamp = dt
    const date = new Date(unix_timestamp * 1000)
    const hours = "0" + date.getHours()
    const minutes = "0" + date.getMinutes()
    return hours.substr(-2) + ":" + minutes.substr(-2)
  }
  return (
    <>
      <h3 className="hourly-forecast-title">Hourly Weather Forecast</h3>
      <div className="hourly-forecast-card-container">
        {forecast?.slice(0, 8).map((item, id) => (
          <div className="card-frame hourly-card-frame" key={id}>
            <p className="hourly-forecast-datetime">{getDateTime(item.dt)}</p>
            <div>
              <img
                src={`https://openweathermap.org/img/wn/${
                  forecast && item.weather[0].icon
                }@2x.png`}
                alt="url-icons"
              />
            </div>
            <span className="max-temp">{Math.round(item.main.temp_max)}°</span>
            <span className="min-temp">{Math.round(item.main.temp_min)}°</span>
          </div>
        ))}
      </div>
    </>
  )
}

export default HourlyWeatherForecast

//  {
//    forecast?.map((forecast, id) => (
//      <div className="card-frame" key={id}>
//        <span>{getDateTime(forecast.dt)}</span>
//        <img
//          src={`https://openweathermap.org/img/wn/${
//            forecast && forecast.weather[0].icon
//          }@2x.png`}
//          alt="url-icons"
//        />
//        <span>{forecast.main.temp}°</span>
//      </div>
//    ))
//  }
