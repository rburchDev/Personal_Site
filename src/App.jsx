import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import "./App.css"
import Home from "./Components/Home.jsx"
import About from "./Components/About.jsx"
import Projects from './Components/Projects.jsx';
import Particles from "react-tsparticles";
import ParticleConfig from "./Components/Data/ParticleConfig"

function App() {
    return (
        <>
        <Particles height="100vh" width="100vw" params={ParticleConfig} />
            <Router>
                <div className="App-background">
                    <nav>
                        <ul className="Nav-ul">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/project">Projects</Link>
                            </li>
                        </ul>
                    </nav>

                    {/* A <Routes> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
                    <Routes>
                        <Route path="/about" caseSensitive={false} element={<About />} />
                        <Route path="/project" caseSensitive={false} element={<Projects />} />
                        <Route path="/" caseSensitive={false} element={<Home />} />
                    </Routes>
                </div>
            </Router>
        </>
    );
}

debugger;

export default App;