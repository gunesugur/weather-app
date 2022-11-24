import React from "react"
import "./ShowInfo.css"
import { WiNa, WiThermometer, WiHumidity, WiWindDeg } from "react-icons/wi"
import { TbGauge, TbSunrise, TbSunset } from "react-icons/tb"
import HourlyWeatherForecast from "../hourlyWeatherForecast/HourlyWeatherForecast"

const ShowInfo = ({ info, cityInfo }) => {
  const getDateTime = (dt) => {
    const unix_timestamp = dt
    const date = new Date(unix_timestamp * 1000)
    const hours = "0" + date.getHours()
    const minutes = "0" + date.getMinutes()
    return hours.substr(-2) + ":" + minutes.substr(-2)
  }

  return (
    <div className="infoContainer">
      <h3 className="today-highlight-title">Today's Highlight</h3>
      <div className="card-container">
        <div className="card-frame">
          <h4 className="feels-like-temp-title title">Feels Like</h4>
          {info ? (
            <span className="feels-like-temp">
              {Math.round(info.main.feels_like)}{" "}
              <span>
                <WiThermometer />
              </span>
            </span>
          ) : (
            <span className="not-applicable-icon">
              <WiNa />
            </span>
          )}
        </div>
        <div className="card-frame">
          <h4 className="pressure-title title">Pressure</h4>
          {info ? (
            <span className="pressure">
              {info.main.pressure}{" "}
              <span>
                <TbGauge />
              </span>
            </span>
          ) : (
            <span className="not-applicable-icon">
              <WiNa />
            </span>
          )}
        </div>
        <div className="card-frame">
          <h4 className="humidity-title title">Humidity</h4>
          {info ? (
            <span className="humidity">
              {info.main.humidity}{" "}
              <span>
                <WiHumidity />
              </span>
            </span>
          ) : (
            <span className="not-applicable-icon">
              <WiNa />
            </span>
          )}
        </div>
        <div className="card-frame">
          <h4 className="wind-title title">Wind Status</h4>
          {info ? (
            <span className="wind">
              {info.wind.speed}
              <span className="wind-speed">km/h</span>
            </span>
          ) : (
            <span className="not-applicable-icon">
              <WiNa />
            </span>
          )}
        </div>
        <div className="card-frame">
          <h4 className="wind-deg-title title">Wind Deg</h4>
          {info ? (
            <span className="wind-deg">
              {info.wind.deg}{" "}
              <span>
                <WiWindDeg />
              </span>
            </span>
          ) : (
            <span className="not-applicable-icon">
              <WiNa />
            </span>
          )}
        </div>
        <div className="card-frame">
          <h4 className="sunrise-sunset-title title">Sunrise & Sunset</h4>
          {info ? (
            <div>
              {info ? (
                <span className="sunrise-and-sunset">
                  {getDateTime(info.sys.sunrise)}
                  <span>
                    <TbSunrise />
                  </span>
                </span>
              ) : (
                <span className="not-applicable-icon">
                  <WiNa />
                </span>
              )}
              {info ? (
                <span className="sunrise-and-sunset">
                  {getDateTime(info.sys.sunset)}
                  <span>
                    <TbSunset />
                  </span>
                </span>
              ) : (
                <span className="not-applicable-icon">
                  <WiNa />
                </span>
              )}
            </div>
          ) : (
            <span className="not-applicable-icon">
              <WiNa />
            </span>
          )}
        </div>
      </div>
      <HourlyWeatherForecast cityInfo={cityInfo} />
    </div>
  )
}

export default ShowInfo
