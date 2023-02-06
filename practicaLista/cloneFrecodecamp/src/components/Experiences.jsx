import React from 'react'
import {datos} from '../datos'
import photousers from '../assets/alexander.jpg'
function Experiences({value}) {
    
  return (
    <div className='card  rounded-md border-blue-400 border-2  max-w-5xl flex items-center'>
        <img className='w-1/4' src={photousers} alt="user-photo"/>
        <div className="card-body p-6 flex flex-col justify-center items-center w-full gap-5 text-white" >
            <h2 className='font-bold uppercase text-2xl '>{value.name}</h2>
            
            <span >Email: {value.email}</span>
            <p>" {value.text} "</p>

        </div>
    
    </div>
  )
}

export default Experiences