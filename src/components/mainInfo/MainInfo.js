import React from "react"
import "./MainInfo.css"
const MainInfo = ({ info }) => {
  const unix_timestamp = info && info.dt
  const date = new Date(unix_timestamp * 1000)
  const hours = "0" + date.getHours()
  const minutes = "0" + date.getMinutes()

  const dateTime = hours.substr(-2) + ":" + minutes.substr(-2)
  const urlIcons = `https://openweathermap.org/img/wn/${
    info && info.weather[0].icon
  }@4x.png`
  return (
    <>
      {info && (
        <div className="main-info-container">
          <div className="weather-icons">
            <img src={urlIcons} alt="weather-icons" />
          </div>
          <div className="main-temp-text-container">
            <span>
              {info.name},{info.sys.country}
            </span>
          </div>
          <div className="temp-text-container">
            <span className="temp-text">
              {Math.round(info.main.temp)}
              <sup>°</sup>
            </span>
          </div>
          <div className="date-time-container">
            <span className="date-time">{dateTime}</span>
          </div>
          <div className="weather-desc-container">
            <span className="weather-desc">{info.weather[0].description}</span>
          </div>
        </div>
      )}
    </>
  )
}

export default MainInfo
