import { useEffect, useState } from "react";
import NavBar from "./Navbar";

const RandomBeer = () => {

    const [randomBeer, setRandomBeer] = useState();

    const fetchRandomBeer = async() => {
        try {
            const response = await fetch("https://ih-beers-api2.herokuapp.com/beers/random")
            const randomBeer = await response.json()
            console.log(randomBeer)
            setRandomBeer(randomBeer)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect (() => {
        fetchRandomBeer()
    }, [])

    

    return randomBeer ? ( 
        <>
            <NavBar/>
            <h3>RandomBeer component</h3>
            <img style={{width:"100px"}} src={randomBeer.image_url} alt="random Beer"></img>
            <h2>{randomBeer.name}</h2>
            <h2>{randomBeer.tagline}</h2>
            <h2>{randomBeer.first_brewed}</h2>
            <h2>{randomBeer.attenuation_level}</h2>
            <h2>{randomBeer.description}</h2>
            <h2>{randomBeer.contributed_by}</h2>
        </>
     ) : ( <h2>Loading beer...</h2>)
}
 
export default RandomBeer;