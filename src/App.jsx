import { BrowserRouter, Route, Routes } from "react-router-dom"
import Form from "./components/Form.js"
import Home from "./components/Home.jsx"

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/form" element={<Form></Form>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
