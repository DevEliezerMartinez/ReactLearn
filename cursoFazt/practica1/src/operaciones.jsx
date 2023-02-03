export function Objects(){
    const user= {
        firstname: "Eliezer",
        lastname:   "Martinez"
    }
return <div>
    <h1>{user.firstname}</h1>
    <p>{user.lastname}</p>
</div>
}

export function UserCard({name,amount,married,points,address,mifuncion}){
    
    return <div>
        <h1>{name}</h1>
        <p>{amount}</p>
        <p>{married?"Casadini:3":"Solteron "}</p>
        <p>{points[0]}</p>
       <ul>
        <li>{address.street}</li>
        <li>{address.city}</li>
       </ul>
       
    </div>

}

