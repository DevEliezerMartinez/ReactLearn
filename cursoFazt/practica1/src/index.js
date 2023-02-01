import React from "react";

import ReactDOM from "react-dom/client";

import {Objects} from './operaciones'

const root = ReactDOM.createRoot(document.getElementById("root"));

function Casado() {
    const married = false;

    /* if (married) {
          return <h1>Hola estoy casado</h1>
      }else{
          return <h1>No estoy casado JAJJAJAJA</h1>
      } */
    // ** Es mejor utilizar un operador terneario

    
    return <h1>{married ? "estoy casado" : "no estoy casado 🤩"}</h1>;
} 



function Operaciones(){
    function suma(a,b){
        return a+b
    }

    return(<h1>La operacion da: {suma(5,4)}</h1>)
}

root.render( <> <Objects/> </>);
