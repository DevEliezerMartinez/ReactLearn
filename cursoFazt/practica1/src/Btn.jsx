import propTypes, { func } from 'prop-types'; // ES6

export function Btn({msj}){
return <button onClick={function(){console.log("holii");}}>{msj}</button>
}



Btn.propTypes = {
    msj: propTypes.string.isRequired
}