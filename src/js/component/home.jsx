import React, { useState, useEffect } from "react";

const Home = () => {
	const [count, setCount] = useState();

    useEffect(() => {
        
        const interval = setInterval(() => {
            setCount(count + 1);
        }, 1000);

    
        return () => clearInterval(interval);
    }, [count]);

    return (
        <div style={{background:"black", color:"white", padding:"50px", display:"center"}}>  
		  <h1>{count}</h1>
        </div>
    );
};

export default Home;
