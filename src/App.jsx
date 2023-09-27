import { Route, Routes } from "react-router-dom"
import HomePage from "./components/HomePage"
import Beers from "./components/Beers"
import BeerDetails from "./components/BeerDetails"
import RandomBeer from "./components/Random-beer"
import NewBeer from "./components/New-beer"




function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/beers" element={<Beers/>}/>
        <Route path="/beer/:id" element={<BeerDetails/>}/>
        <Route path="/random-beer" element={<RandomBeer/>}/>
        <Route path="/new-beer" element={<NewBeer/>}/>
      </Routes>
    </div>
  )
}

export default App
