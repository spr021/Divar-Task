import React from "react"
import { HashRouter as Router, Route, Switch } from "react-router-dom"
import Action from "./page/Action"
import Home from "./page/Home"

function App() {
  return (
    <Router>
      <div className="App">
        <main className="w-full h-full flex md:flex-row-reverse justify-center items-start p-6 flex-col">
          <article className="flex flex-row justify-center items-satrt w-full min-h-screen md:w-4/5 md:ml-3 bg-white shadow p-4 pt-10">
            <Switch>
              <Route path="/action">
                <Action />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          </article>
        </main>
      </div>
    </Router>
  )
}

export default App
