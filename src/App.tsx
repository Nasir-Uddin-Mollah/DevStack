import { useState } from "react";
import Home from "./Components/Home"
import Navbar from "./Components/Navbar"
import Technologies from "./Components/Technologies/Technologies"
import type { TechnologyType } from "./Types";
import Footer from "./Components/Footer";

const fetchTechnologies = async (): Promise<TechnologyType[]> => {
  const res = await fetch('/data.json');
  const data = await res.json();
  return data;
}

function App() {
  const [technologiesPromise] = useState(() => fetchTechnologies());

  return (
    <>
      <Navbar />
      <Home />
      <Technologies technologiesPromise={technologiesPromise} />
      <Footer />
    </>
  )
}

export default App
