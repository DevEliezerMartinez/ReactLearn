import { useState, useEffect } from "react";
import Card from "./Card";

function MenuBar() {
  const [brawlers, SetBrawlers] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      let response;
      try {
        response = await fetch("https://api.brawlapi.com/v1/brawlers");
        console.log("fetcheando");
      } catch (error) {
        console.error("There was an error", error);
      }

      if (response?.ok) {
        const data = await response.json();
        SetBrawlers(data.list);
      } else {
        console.error(`HTTPssssss Response Code: ${response?.status}`);
      }
    }

    fetchData();
  }, []);



  return (
    <>
      
      <Card className="" value={brawlers} />
    </>
  );
}

export default MenuBar;
