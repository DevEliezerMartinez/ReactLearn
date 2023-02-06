import { datos } from "../datos";
import Experiences from "./Experiences";


function App() {
  
  return (
    <div className="App bg-zinc-800 p-4 ">
      <header>
        <h1 className="text-center text-white font-bold text-6xl">FreeCodeCamp</h1>
      </header>
      <main>
        <h3 className="text-center text-white mt-8 font-mono text-3xl mb-8">Esto es lo que dicen nuestros alumnos</h3>
        <section className="opinions flex flex-col gap-8 w-3/4 m-auto">
          {datos.map((datos) => (
            
            <Experiences key={datos.id} value={datos}/>
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
