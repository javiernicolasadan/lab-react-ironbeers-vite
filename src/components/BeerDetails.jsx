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
            console.log(beerDetails)
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(() => {
        fetchBeerDetails()

    }, [])


    return ( 
        <>
        <NavBar/>
            <h2>Beer BeerDetails</h2>
            {beer.map ((details) => {
                return <>

                        </>
            })}

        </>
     );
}
 
export default BeerDetails;