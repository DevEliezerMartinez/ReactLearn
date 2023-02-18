import { useState, useEffect } from "react";
import down from "../assets/sort-down-com.svg";
import up from "../assets/sort-up.svg";

function Card({ value }) {
  const [brawlBuscar, setBrawlBuscar] = useState("");
  const [totalBrawlers, setTotalBrawlers] = useState([]);
  const [aux, setAux] = useState(0);
  const [categories, setCategories] = useState([]);
  const [brawlCategoria, setBrawlCategoria] = useState("");
  useEffect(() => {
    setTotalBrawlers(value);
  }, [value]);

  const busqueda = (e) => {
    e.value = "";
    e.preventDefault();
    let auxBusqueda = "";
    value.map((e) => {
      
      if (e.name == brawlBuscar) {
        setTotalBrawlers([e]);
        console.log(typeof [e]);
        auxBusqueda = "-";
      }
    });
    auxBusqueda == ""
      ? alert("No se encontro ningun brawler")
      : console.log("si");
  };

  const reset = () => {
    document.getElementById("input_busqueda").value = "";
    console.log("reset");
    setTotalBrawlers(value);
  };

  const sort = (option) => {
    if (option == "asc") {
      const ord = (x, y) => {
        if (x.name < y.name) {
          return -1;
        }
        if (x.name > y.name) {
          return 1;
        }
        return 0;
      };
      let resultado = value.sort(ord);

      setTotalBrawlers(resultado);
    }

    if (option == "desc") {
      console.log("desc");
      const ord = (x, y) => {
        if (y.name < x.name) {
          return -1;
        }
        if (y.name > x.name) {
          return 1;
        }
        return 0;
      };
      let resultado = totalBrawlers.sort(ord);

      setTotalBrawlers(resultado);
    }
  };
  
  let fil =()=>{
   
    let CategoriesFilter=[]
  totalBrawlers.map(element => {
    CategoriesFilter.includes(element.rarity.name)?false: CategoriesFilter.push(element.rarity.name)
  });
  setCategories(CategoriesFilter)
  }


  let busquedaFilter=(e)=>{
    e.value = "";
    e.preventDefault();
   
    let CategoriesFilter=[]
    value.map((e) => {
      
      if (e.rarity.name == brawlCategoria) {
        CategoriesFilter.push(e)
 
      }
    });
    setTotalBrawlers(CategoriesFilter)
  }
  return (
    <div className="bg-gradient-to-r from-sky-500 to-indigo-500 pt-4">
      <div className="flex justify-center items-center text-white my-4">
        <form className="" onSubmit={(e) => busqueda(e)}>
          <input
            className=" p-2 bg-stone-600 border-white  rounded-l-lg w-1/2"
            type="text"
            id="input_busqueda"
            placeholder="Shelly"
            onChange={(e) => {
              setBrawlBuscar(e.target.value);
            }}
          />
          <input
            className=" p-2 bg-teal-400 border-white rounded-r-lg font-bold "
            value="Buscar"
            type="submit"
          />
        </form>
       
      </div>
      <div className="sort-container flex justify-center gap-4 my-4">
        <img
          className="w-12 border-2 rounded"
          onClick={() => {
            sort("desc");
            setAux(aux + 1);
          }}
          src={down}
          alt="sort-down logo"
        />
        <img
          className="w-12 border-2 rounded"
          onClick={() => {
            sort("asc");
            setAux(aux + 1);
          }}
          src={up}
          alt="sort-up logo"
        />
        <form onSubmit={(e)=>{busquedaFilter(e)}} className="flex gap-3">
        <select className="p-2 border  bg-transparent rounded" name="Categories" id=""  onClick={()=>{fil()}}>
          <option value="null">Seleccione</option>
          {categories.map(e=>(<option key={e} value={e} onClick={()=>{setBrawlCategoria(e)}}>{e}</option>))}         
        </select>
        <button className="border-2 p-1 rounded bg-slate-300" type="submit">Buscar</button>
        </form>
        
      </div>
      <button onClick={reset} className=" p-2 rounded border-2">
          Volver
        </button>
      <div className="container-list flex flex-col gap-4 pt-2 ">
        {totalBrawlers.map((character) => (
          <li
            key={character.id}
            className=" w-11/12 flex flex-col justify-between border-2 rounded m-auto font-bold max-w-sm sm:flex-row sm:max-w-5xl sm:justify-start"
          >
            <picture className="sm:flex sm:w-2/5">
              <img
                src={character.imageUrl2}
                alt="character-picture"
                className="w-10/12 m-auto p-4    "
              />
            </picture>

            <div className="card-body py-4 px-2 text-white md:w-3/5">
              <h4 className="text-white text-2xl font-Montserrat  ">
                {character.name}
              </h4>
              <p className="text-left text-emerald-400 text-xl ">
                {character.rarity.name}
              </p>
              <p className="text-justify p-1">{character.description}</p>

              <div className="skills flex flex-col gap-4 ">
                <h3 className=" text-2xl font-Montserrat  mt-3 ">
                  Stars powers
                </h3>
                <div className="power flex items-center">
                  <img
                    className="w-10 max-w-[30px] h-8 mr-1"
                    src={character.starPowers[0].imageUrl}
                    alt="logo-power"
                  />
                  <p>{character.starPowers[0].description}</p>
                </div>

                <div className="power flex items-center">
                  <img
                    className="w-10 max-w-[30px] h-8 mr-1"
                    src={character.starPowers[1].imageUrl}
                    alt="logo-power"
                  />
                  <p>{character.starPowers[1].description}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
}

export default Card;
