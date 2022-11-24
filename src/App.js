import { useState } from "react"
import "./App.css"
import Form from "./components/form/Form"
import ShowInfo from "./components/showInfo/ShowInfo"
function App() {
  const [info, setInfo] = useState()
  const [cityInfo, setCityInfo] = useState()
  return (
    <div className="App">
      <Form info={info} setInfo={setInfo} setCityInfo={setCityInfo} />
      <ShowInfo info={info} cityInfo={cityInfo} />
    </div>
  )
}

export default App
