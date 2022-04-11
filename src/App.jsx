import { BrowserRouter, Route, Routes } from "react-router-dom"
import Form from "./components/Form"
import Home from "./components/Home"

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/form" element={<Form/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
