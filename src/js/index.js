//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";




let number = 0;

setInterval(function () {
    number++;

    const one = Math.floor(number / 1) % 10;
    const two = Math.floor(number / 10) % 10;
    const three = Math.floor(number / 100) % 10;
    const four = Math.floor(number / 1000) % 10;
    const five = Math.floor(number / 10000) % 10;
    const six = Math.floor(number / 100000) % 10;

    ReactDOM.createRoot(document.getElementById('app')).render(
        <Home one={one} two={two} three={three} four={four} five={five} six={six}/>
    );
}, 1000);

ReactDOM.createRoot(document.getElementById('app')).render(<Home/>);