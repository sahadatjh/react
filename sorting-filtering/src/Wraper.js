import React from "react";
import Movies from "./components/movies.component";
import Navbar from "./components/navbar.component";

const Wraper = () => {
    return ( 
        <React.Fragment>
            <Navbar />
            <Movies />
        </React.Fragment>
     );
}
 
export default Wraper;