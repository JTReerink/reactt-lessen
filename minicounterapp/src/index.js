//Import react
import React from "react";
//Import reactDOM
import ReactDOM from "react-dom/client";
//Import app
import App from "./App/App"
//Variabele koppelen aan html element
const root = ReactDOM.createRoot(document.getElementById("root"));
//render de variabele in root
root.render(
    <React.StrictMode>
        <App /> 
    </React.StrictMode>
    
)