import React from "react";
import MenuItem from "./components/MenuItem";
import { Link, Route, Switch } from "react-router-dom";
import About from "./page/About";
import Call from "./page/Call";
import Home from "./page/Home";

const menuItem = [
    {
        text: "صفحه ی نخست",
        link: "/",
    },
    {
        text: "درباره ی من",
        link: "/about",
    },
    {
        text: "تماس با من",
        link: "/call",
    },
];

function App() {
    return (
        <div className="App">
            <header className="w-full p-4">
                <h1 className="text-4xl mb-4">وبلاگ تمرین</h1>
                <h3>این وبلاگ برای تمرین مطالب دوره طراحی شده است</h3>
            </header>
            <main className="w-full h-full flex md:flex-row-reverse justify-center items-start p-6 flex-col">
                <nav className="md:w-1/5 w-full mb-6 flex md:flex-col flex-row justify-start items-start md:h-screen h-auto md:mr-3 bg-white shadow p-4 md:pt-8">
                    <h2 className="md:text-2xl md:text-base md:my-4 mx-2 my-2" >لینک های وبلاگ</h2>
                    {menuItem.map((item, index) => (
                        <Link to={item.link} key={index}>
                            <MenuItem {...item} />
                        </Link>
                    ))}
                </nav>
                <article className="flex flex-row justify-center items-satrt w-full md:w-4/5 h-screen md:ml-3 bg-white shadow p-4 pt-10">
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/call">
                            <Call />
                        </Route>
                        <Route exact path="/">
                            <Home />
                        </Route>
                    </Switch>
                </article>
            </main>
            <footer className="w-full h-20 flex flex-row justify-center items-center">
                <pre>
                    <i className="fa fa-copyright"></i> Copyright Divar 2020
                </pre>
            </footer>
        </div>
    );
}

export default App;
