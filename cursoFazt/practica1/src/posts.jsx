import { BsFillAwardFill } from "react-icons/bs";

export const  Post=()=>{
    return <div> <button onClick={api}><BsFillAwardFill/> Traer datos</button> </div>
}


function api(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response=>response.json())
  .then(data=>console.log(data))
}