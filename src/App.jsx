import React, { useState } from "react";
import fetchData from "./services/api";
import Card from "./components/Card/Card";
import initalData from "./components/helpers/initialData";

function App() {
  const [city, setCity] = useState('');
  const [data, setData] = useState(initalData);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("🚀 ~ fetchData ~ response:", city)
    fetchData(city).then((response) => {
      setData(response)    
    });
  }

  return (
    <div className=" bg-[#f5f5f5] flex flex-col w-full h-screen items-center sm:justify-center p-4">
      <form onSubmit={handleSubmit} className="fixed bottom-0 w-full flex p-4 sm:relative justify-center">
        <input
          type="text"
          placeholder="Cidade"
          className="p-3 bg-white rounded-lg outline-none w-full flex-1 sm:max-w-[300px]"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white p-3 rounded-lg ml-3 text-bold"
        >Pesquisar</button>
      </form>
      <Card data={data} />
    </div>
  )
}

export default App
