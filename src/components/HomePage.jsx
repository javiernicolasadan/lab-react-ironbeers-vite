import { Link } from "react-router-dom"

const HomePage = () => {
    return ( 
    <>
        
        <div>
        <Link to="/beers"><h2>All Beers</h2></Link>
            <img src="/src/assets/beers.png" alt="beers" />
            <p>laksj akjñlsfañslkjfañsldf kjñl fklasjf añslkjf  kjla dfañljfñlasj fd</p>
        </div>
        
        <div>
        <Link to="/random-beer"><h2>Random Beer</h2></Link>
            <img src="/src/assets/random-beer.png" alt="beers" />
            <p>laksj akjñlsfañslkjfañsldf kjñl fklasjf añslkjf  kjla dfañljfñlasj fd</p>
        </div>

        <div>
        <Link to="/new-beer"><h2>New Beer</h2></Link>
            <img src="/src/assets/new-beer.png" alt="beers" />
            <p>laksj akjñlsfañslkjfañsldf kjñl fklasjf añslkjf  kjla dfañljfñlasj fd</p>
        </div>
        
    </>
     );
}
 
export default HomePage;