import React from "react";

function Banner() {
  return (
    <div className="banner p-4  w-10/12 m-auto mt-4 font-Fjalla text-xl text-violet-700 ">
      <h3 className="font-Montserrat font-bold md:text-2xl">El mejor contenido de brawlStars:3</h3>
      <div className="minicards flex flex-col gap-4 mt-4  md:grid grid-cols-3">
        <p className="border rounded-md bg-rose-100 p-3">Contamos con un total de 100 Stars</p>
        <p className="border rounded-md bg-rose-100 p-3">Toda la información acerca de los eventos</p>
        <p className="border rounded-md bg-rose-100 p-3">Conoce los rankings</p>
        
      </div>
    </div>
  );
}

export default Banner;
