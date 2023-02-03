import React, { useState,useEffect } from "react";

import ReactDOM from "react-dom/client";

/* import { Objects, UserCard } from "./operaciones";

import Casado, { Casamiento } from "./married";

import { Greeting } from "./Greeting"; 


*/
/* import { Counter } from "./Counter"; */
import { Taskcard } from "./task";
import { Saludar } from "./Saludo.jsx";
import { Mensajes } from "./Msj";
import { Counter } from "./Counter";
const root = ReactDOM.createRoot(document.getElementById("root"));




root.render(
    <>
        <Taskcard ready={true} />
       
        <Counter/>
       
        
    </>
);
