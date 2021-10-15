import React from "react"
import Home from "./page/Home"

function App() {
  return (
    <div className="App">
      <main className="w-full h-full flex md:flex-row-reverse justify-center items-start p-6 flex-col">
        <article className="flex flex-row justify-center items-satrt w-full md:w-4/5 h-screen md:ml-3 bg-white shadow p-4 pt-10">
          <Home />
        </article>
      </main>
    </div>
  )
}

export default App
