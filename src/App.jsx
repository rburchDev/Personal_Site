import React from 'react';
import { Nav } from './Nav';
import { Main } from './Components';
import NavProvider from './Context/NavContext';
import "./App.css"
import Particles from "react-tsparticles";
import ParticleConfig from "./Components/Data/ParticleConfig"

function App() {
    return (
        <div className="App-background">
            <NavProvider>
                <Particles height="100vh" width="100vw" params={ParticleConfig} />
                <Nav />
                <Main />
            </NavProvider>
        </div>
    );
}

debugger;

export default App;