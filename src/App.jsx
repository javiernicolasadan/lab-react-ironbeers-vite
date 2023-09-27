import { Route, Routes } from "react-router-dom"
import HomePage from "./components/HomePage"
import Beers from "./components/Beers"
import BeerDetails from "./components/BeerDetails"




function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/beers" element={<Beers/>}/>
        <Route path="/beer/:id" element={<BeerDetails/>}/>
      </Routes>
    </div>
  )
}

export default App
