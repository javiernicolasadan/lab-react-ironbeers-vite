import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./Navbar";

const BeerDetails = () => {
    const {id} = useParams()
    /* console.log(id) */
    const [beer, setBeer] = useState();

    const fetchBeerDetails = async () => {
        try {
            const response = await fetch(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
            const beerDetails = await response.json()
            setBeer(beerDetails)
            /* console.log(beerDetails) */
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(() => {
        fetchBeerDetails()
    }, [])

    
    return beer ? ( 
        <>
        <NavBar/>
            <h2>BeerDetails</h2>
            <img src={beer.image_url} alt="beer"></img>
            <h2>{beer.name}</h2>
            <h2>{beer.tagline}</h2>
            <h2>{beer.first_brewed}</h2>
            <h2>{beer.attenuation_level}</h2>
            <h2>{beer.description}</h2>
            <h2>{beer.contributed_by}</h2>
        </>
     ) : (<h2>Loading beer..</h2>)
}
 
export default BeerDetails;