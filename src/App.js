import { useState } from "react"
import "./App.css"
import Form from "./components/form/Form"
import ShowInfo from "./components/showInfo/ShowInfo"
function App() {
  const [info, setInfo] = useState()
  return (
    <div className="App">
      <Form info={info} setInfo={setInfo} />
      <ShowInfo info={info} />
    </div>
  )
}

export default App
