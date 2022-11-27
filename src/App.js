import { useState } from "react"
import "./App.css"
import MainInfo from "./components/mainInfo/MainInfo"
import ShowInfo from "./components/showInfo/ShowInfo"
import Form from "./components/form/Form"
function App() {
  const [info, setInfo] = useState()
  const [cityInfo, setCityInfo] = useState()
  return (
    <div className="App">
      <Form info={info} setInfo={setInfo} setCityInfo={setCityInfo} />
      <div className="info-field-container">
        <MainInfo info={info} />
        <ShowInfo info={info} cityInfo={cityInfo} />
      </div>
      <br />
      <br />
    </div>
  )
}

export default App
