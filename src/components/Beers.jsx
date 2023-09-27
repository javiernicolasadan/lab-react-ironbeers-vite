import { Fragment, useEffect, useState } from "react";
import NavBar from "./Navbar";
import { Link } from "react-router-dom";

const Beers = () => {
    const [beers, setBeers] = useState([]);
    
    const fetchBeers = async() => {
        try {
           const response =  await fetch(" https://ih-beers-api2.herokuapp.com/beers")
           const beersFromApi = await response.json()
           setBeers(beersFromApi)
        }  
       catch (error) {
        console.log(error)
    }
}
useEffect(() => {
    fetchBeers()
   
}, [])



    return ( 
        <>
            <NavBar/>       
            <h3>Beer component</h3>
            {beers.map((beer) => (
                <Fragment key={beer._id}>
                <Link to={`/beer/${beer._id}`}>
                    <img style={{width:"100px"}} src={beer.image_url} alt="beer"></img>
                    <h2>{beer.name}</h2>
                    <h2>{beer.tagline}</h2>
                    <h2>{beer.contributed_by}</h2>

                </Link>
                </Fragment>
            ))}
        </>
     );
}
 
export default Beers;