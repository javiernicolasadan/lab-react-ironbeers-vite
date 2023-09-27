import { useEffect, useState } from "react";
import NavBar from "./Navbar";

const NewBeer = () => {

    const [name, setName] = useState();
    const [tagline, setTagline] = useState();
    const [description, setDescription] = useState();
    const [firstBrewed, setFirstBrewed] = useState();
    const [brewersTips, setBrewersTips] = useState();
    const [attenuation, setAttenuation] = useState();
    const [contributed_by, setContributed_by] = useState();

  
    return ( 
        <>
            <NavBar/>
            <h2>NewBeer</h2>
            <form method="POST">
                <label>Name:<input name="name" onChange={event => setName(event.target.value)}/></label><br/>
                <label>Tagline:<input name="tagline"/></label><br/>
                <label>Description:<input name="description"/></label><br/>
                <label>First brewed:<input name="first_brewed"/></label><br/>
                <label>Brewers Tips:<input name="brewers_tips"/></label><br/>
                <label>Attenuation Level:<input name="attenuation_level" type="number"/></label><br/>
                <label>Contributed by:<input name="contributed_by"/></label><br/>
                <button type="submit">Create a beer</button>
            </form>
        </>
     );
}
 
export default NewBeer;