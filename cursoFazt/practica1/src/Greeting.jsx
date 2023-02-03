export function Greeting({title,name="user" }){
    console.log(title,name);
    return <h1>{title}, dice {name}</h1>
}