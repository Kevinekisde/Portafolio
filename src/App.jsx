import { BrowserRouter, Route, Routes } from "react-router-dom"
import Form from "./components/Form"
import Home from "./components/Home"

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route  path="/forms" element={<Form></Form>}/>
        <Route path="*" element={<Form></Form>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
