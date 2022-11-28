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
          <span className="country-code">
            {info.name},{info.sys.country}
          </span>
          <div className="weather-icon-temp-desc">
            <img src={urlIcons} alt="weather-icons" />
            <div className="temp-desc">
              <span className="temp-text">
                {Math.round(info.main.temp)}
                <sup>°</sup>
              </span>
              <span className="weather-desc">
                {info.weather[0].description}
              </span>
            </div>
          </div>
          {/* <div className="date-time-container"> */}
            <span className="date-time">{dateTime}</span>
          {/* </div> */}
          {/* <div className="weather-desc-container">
            <span className="weather-desc">{info.weather[0].description}</span>
          </div> */}
        </div>
      )}
    </>
  )
}

export default MainInfo
