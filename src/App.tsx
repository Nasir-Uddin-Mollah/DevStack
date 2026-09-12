import { Suspense, useState } from "react";
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
      <Suspense fallback={
        <div className="container mx-auto mt-5 grid max-w-6xl gap-6 px-6 lg:grid-cols-[minmax(0,1fr)_280px] lg:px-8">
          <div className="flex min-h-40 items-center justify-center">
            <h1 className="text-center text-sm font-medium text-slate-400">Loading Technologies...</h1>
          </div>
        </div>
      }>
        <Technologies technologiesPromise={technologiesPromise} />
      </Suspense>
      <Footer />
    </>
  )
}

export default App
