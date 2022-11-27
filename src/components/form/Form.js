import { useState, useEffect } from "react"
import axios from "axios"
import "./Form.css"
export const Form = ({ info, setInfo, setCityInfo }) => {
  const [city, setCity] = useState("")
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
    setCityInfo(city)
  }
  return (
    <div className="form-section">
      <form
        className="form-container"
        onSubmit={(e) => {
          e.preventDefault()
          handleChange()
        }}
      >
        <div>
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
    </div>
  )
}
export default Form
