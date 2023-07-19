import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./views/Home"
import Episodes from "./views/Episodes"
import Character from "./views/Character"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="page/:page/character/:id" element={<Character></Character>}></Route>
          <Route path="/episodes" element={<Episodes></Episodes>}></Route>
          <Route path="*" element={<Home></Home>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
