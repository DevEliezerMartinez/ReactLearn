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
     export function Casamiento (){
        return <p>Se esta casando</p>
    }

export default Casado;