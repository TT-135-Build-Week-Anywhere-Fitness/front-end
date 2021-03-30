import React from 'react';

import {Link} from 'react-router-dom'


 function Home(){
    return(
        
       <>
        <h1>Anywhere Fitness</h1>
        <h2>Anytime Anywhere</h2>
        <div>
        <Link to="/Login"><button>Login</button></Link>
        <Link to="/Register"><button >Register</button></Link>
        </div>
       </>
    )



}



export default Home;