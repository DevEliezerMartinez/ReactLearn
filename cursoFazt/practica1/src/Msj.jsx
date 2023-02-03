import React, { useState } from "react";
export function Mensajes() {
    const [mensaje, SetMensaje] = useState("");
    return (
        <div>
           <input onChange={({target})=>{SetMensaje(target.value)}} type="text" name="" id="" />
            <button onClick={console.log("")}>Imprimir</button>
        </div>
    );
}