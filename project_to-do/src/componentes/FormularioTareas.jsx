import { useContext, useState, useEffect } from "react";
import { Contexto } from "../Context";

function FormularioTareas() {
 

  let { mia } = useContext(Contexto);

  let [title, setTitle] = useState();

  function si(e) {
    e.preventDefault();
    mia(title);
  }

  return (
    <div className="bg-slate-500">
      <p>FormularioTareas</p>
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button className="border p-5 bg-cyan-300" onClick={si}>
        dale
      </button>
    </div>
  );
}

export default FormularioTareas;
