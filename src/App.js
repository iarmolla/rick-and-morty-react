import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Character from './components/Character'
import Home from './components/Home'
import Episodes from './components/Episodes'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="page/:page/character/:id" element={<Character></Character>}></Route>
          <Route path="/episodes" element={<Episodes></Episodes>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
