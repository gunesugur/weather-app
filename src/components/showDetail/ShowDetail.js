import React from "react"
import "./ShowDetail.css"
import { WiThermometer, WiHumidity, WiWindDeg } from "react-icons/wi"
import { TbGauge, TbSunrise, TbSunset } from "react-icons/tb"
import HourlyWeatherForecast from "../hourlyWeatherForecast/HourlyWeatherForecast"

const ShowDetail = ({ info, cityInfo }) => {
  const getDateTime = (dt) => {
    const unix_timestamp = dt
    const date = new Date(unix_timestamp * 1000)
    const hours = "0" + date.getHours()
    const minutes = "0" + date.getMinutes()
    return hours.substr(-2) + ":" + minutes.substr(-2)
  }

  return (
    <>
      {info && (
        <div className="infoContainer">
          <h3 className="today-highlight-title">Today's Highlight</h3>
          <div className="card-container">
            <div className="card-frame ">
              <h4 className="feels-like-temp-title title">Feels Like</h4>
              <span className="feels-like-temp">
                {Math.round(info.main.feels_like)}
                <span className="show-info-icons">
                  <WiThermometer />
                </span>
              </span>
            </div>
            <div className="card-frame">
              <h4 className="pressure-title title">Pressure</h4>
              <span className="pressure">
                {info.main.pressure}
                <span className="show-info-icons">
                  <TbGauge />
                </span>
              </span>
            </div>
            <div className="card-frame">
              <h4 className="humidity-title title">Humidity</h4>

              <span className="humidity">
                {info.main.humidity}
                <span className="show-info-icons">
                  <WiHumidity />
                </span>
              </span>
            </div>
            <div className="card-frame">
              <h4 className="wind-title title">Wind Status</h4>

              <span className="wind">
                {info.wind.speed}
                <span className="wind-speed">km/h</span>
              </span>
            </div>
            <div className="card-frame">
              <h4 className="wind-deg-title title">Wind Deg</h4>

              <span className="wind-deg">
                {info.wind.deg}
                <span>
                  <WiWindDeg className="show-info-icons" />
                </span>
              </span>
            </div>
            <div className="card-frame">
              <h4 className="sunrise-sunset-title title">Sunrise & Sunset</h4>

              <div>
                <span className="sunrise-and-sunset">
                  {getDateTime(info.sys.sunrise)}
                  <span>
                    <TbSunrise className="show-info-icons" />
                  </span>
                </span>

                <span className="sunrise-and-sunset">
                  {getDateTime(info.sys.sunset)}
                  <span>
                    <TbSunset className="show-info-icons" />
                  </span>
                </span>
              </div>
            </div>
          </div>
          <HourlyWeatherForecast cityInfo={cityInfo} />
        </div>
      )}
    </>
  )
}

export default ShowDetail
