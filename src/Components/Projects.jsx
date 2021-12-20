import { React, useReducer } from 'react';
import ReactCardFlip from "react-card-flip";
import "./Style/Component.css";
import OpenCV from "./../Assets/opencv.png"
import ReactJS from "./../Assets/reactjs.png"
import Linux from "./../Assets/linux.png"
import Android from "./../Assets/android.png"
import Fantasy from "./../Assets/fantasy.png"

const Projects = () => {
    const initialState = {
        OpenCV: false,
        ReactJS: false,
        Linux: false,
        Android: false,
        PersonalReactJS: false,
        Fantasy: false
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'Flip_OpenCV':
                return {
                    OpenCV: (prev) => !prev
                }
            case 'Flip_ReactJS':
                return {
                    ReactJS: (prev) => !prev
                }
            case 'Flip_Linux':
                return {
                    Linux: (prev) => !prev
                }
            case 'Flip_Android':
                return {
                    Android: (prev) => !prev
                }
            case 'Flip_PersonalReactJS':
                return {
                    PersonalReactJS: (prev) => !prev
                }
            case 'Flip_Fantasy':
                return {
                    Fantasy: (prev) => !prev
                }
            case 'Success':
                return {
                    ...state,
                    ...action.payload
                }
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="title">
            <h1>
                Professional Projects
            </h1>
            <div className="content">
                <ReactCardFlip isFlipped={state.OpenCV} flipDirection="vertically">
                    <div className="card" onClick={() => dispatch({
                        type: 'Flip_OpenCV',
                        payload: {
                            OpenCV: (prev) => !prev
                        }
                    })}>
                        <img src={OpenCV} alt="OpenCV" />
                        <div className="container">
                            <h3><b>Video Anamoly Detection</b></h3>
                            <p>Project to detect Video Anamolies in Live TV</p>
                            <ul>
                                <li>
                                    Freeze Detection in Live Video that results in a frozen frame
                                </li>
                                <li>
                                    Pixelation Detection in Live Video that results in Pixelation, Artifeacts, Macro-Blocking, etc...
                                </li>
                                <li>
                                    Error Detection in Live Video that would result in an error screen being displayed
                                </li>
                                <li>
                                    BlackScreen Detection in Live Video that would result in the Live Video showing a Black Screen
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="card" onClick={() => dispatch({
                        type: 'Flip_OpenCV',
                        payload: {
                            OpenCV: (prev) => !prev
                        }
                    })}>
                        <div className="container">
                            <h3><b>Libraries</b></h3>
                            <p>Language: Python</p>
                            <ul>
                                <li>
                                    OpenCV
                                </li>
                                <li>
                                    Numpy
                                </li>
                                <li>
                                    paramiko
                                </li>
                                <li>
                                    Thread
                                </li>
                            </ul>
                        </div>
                    </div>
                </ReactCardFlip>
                <ReactCardFlip isFlipped={state.ReactJS} flipDirection="vertically">
                    <div className="card" onClick={() => dispatch({
                        type: 'Flip_ReactJS',
                        payload: {
                            ReactJS: (prev) => !prev
                        }
                    })}>
                        <img src={ReactJS} alt="ReactJS" />
                        <div className="container">
                            <h3><b>QA Dashboard</b></h3>
                            <p>Built a Custom Dashboard with Reactjs, Python, InfluxDB and Nginx</p>
                            <ul>
                                <li>
                                    ReactJS Frontend using Material-UI and PLotlyJS
                                </li>
                                <li>
                                    Python Backend using Flask and InfluxDB
                                </li>
                                <li>
                                    Nginx as the Reverse Proxy
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="card" onClick={() => dispatch({
                        type: 'Flip_ReactJS',
                        payload: {
                            ReactJS: (prev) => !prev
                        }
                    })}>
                        <div className="container">
                            <h3><b>Libraries</b></h3>
                            <p>Language: ReactJS and Python</p>
                            <ul>
                                <li>
                                    Pandas
                                </li>
                                <li>
                                    Numpy
                                </li>
                                <li>
                                    PlotlyJS
                                </li>
                                <li>
                                    Material-UI
                                </li>
                            </ul>
                        </div>
                    </div>
                </ReactCardFlip>
                <ReactCardFlip isFlipped={state.Linux} flipDirection="vertically">
                    <div className="card" onClick={() => dispatch({
                        type: 'Flip_Linux',
                        payload: {
                            Linux: (prev) => !prev
                        }
                    })}>
                        <img src={Linux} alt="Linux" />
                        <div className="container">
                            <h3><b>Linux Caching Server Monitoring</b></h3>
                            <p>Built Test and Monitoring Tools for our Linux based Streaming Caching Server</p>
                            <ul>
                                <li>
                                    Built automated test using Jenkins and Jmeter to simulate Load
                                </li>
                                <li>
                                    Built collection script in Python and shell to gather CPU, RAM and Server Temp
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="card" onClick={() => dispatch({
                        type: 'Flip_Linux',
                        payload: {
                            Linux: (prev) => !prev
                        }
                    })}>
                        <div className="container">
                            <h3><b>Libraries</b></h3>
                            <p>Language: Python</p>
                            <ul>
                                <li>
                                    Pandas
                                </li>
                                <li>
                                    Plotly
                                </li>
                                <li>
                                    Numpy
                                </li>
                                <li>
                                    Selenium
                                </li>
                            </ul>
                        </div>
                    </div>
                </ReactCardFlip>
                <ReactCardFlip isFlipped={state.Android} flipDirection="vertically">
                    <div className="card" onClick={() => dispatch({
                        type: 'Flip_Android',
                        payload: {
                            Android: (prev) => !prev
                        }
                    })}>
                        <img src={Android} alt="Android" />
                        <div className="container">
                            <h3><b>Android Set Top Box Testing</b></h3>
                            <p>Development a full envrionment for testing our Android Set Top Box</p>
                            <ul>
                                <li>
                                    Wrote scripts to test our Android Set Top Box automatically
                                </li>
                                <li>
                                    Built custom-plugin for pytest to send data to influxdb around test results
                                </li>
                                <li>
                                    Intergrated testing into Jenkins pipeline
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="card" onClick={() => dispatch({
                        type: 'Flip_Android',
                        payload: {
                            Android: (prev) => !prev
                        }
                    })}>
                        <div className="container">
                            <h3><b>Libraries</b></h3>
                            <p>Language: Python</p>
                            <ul>
                                <li>
                                    Pandas
                                </li>
                                <li>
                                    Numpy
                                </li>
                                <li>
                                    Thread
                                </li>
                                <li>
                                    OpenCV
                                </li>
                            </ul>
                        </div>
                    </div>
                </ReactCardFlip>
            </div>
            <h1>
                Personal Projects
            </h1>
            <div className="content">
                <ReactCardFlip isFlipped={state.PersonalReactJS} flipDirection="vertically">
                    <div className="card" onClick={() => dispatch({
                        type: 'Flip_PersonalReactJS',
                        payload: {
                            PersonalReactJS: (prev) => !prev
                        }
                    })}>
                        <img src={ReactJS} alt="ReactJSPersonal" />
                        <div className="container">
                            <h3><b>Personal Profile Site</b></h3>
                            <p>Developed a FullStack website to host my Profile Site</p>
                            <ul>
                                <li>
                                    ReactJS Frontend with custom CSS
                                </li>
                                <li>
                                    Python Backend using Flask
                                </li>
                                <li>
                                    Nginx as the Reverse Proxy with a RespberryPi hosting
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="card" onClick={() => dispatch({
                        type: 'Flip_PersonalReactJS',
                        payload: {
                            PersonalReactJS: (prev) => !prev
                        }
                    })}>
                        <div className="container">
                            <h3><b>Libraries</b></h3>
                            <p>Language: ReactJS and Python</p>
                            <ul>
                                <li>
                                    Pandas
                                </li>
                                <li>
                                    Numpy
                                </li>
                                <li>
                                    Thread
                                </li>
                                <li>
                                    OpenCV
                                </li>
                            </ul>
                        </div>
                    </div>
                </ReactCardFlip>
                <ReactCardFlip isFlipped={state.Fantasy} flipDirection="vertically">
                    <div className="card" onClick={() => dispatch({
                        type: 'Flip_Fantasy',
                        payload: {
                            Fantasy: (prev) => !prev
                        }
                    })}>
                        <img src={Fantasy} alt="Fantasy" />
                        <div className="container">
                            <h3><b>Code Creating Ranked List of Players</b></h3>
                            <p>Developed a Script to Form a Custom Ranked List for Fantasy Football</p>
                            <ul>
                                <li>
                                    Wrote Code using Pythong and the Pandas/Numpy libraries
                                </li>
                                <li>
                                    Used Data from various sites to feed into my model
                                </li>
                                <li>
                                    Use list to pick Fantasy Football Players during intial Draft
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="card" onClick={() => dispatch({
                        type: 'Flip_Fantasy',
                        payload: {
                            Fantasy: (prev) => !prev
                        }
                    })}>
                        <div className="container">
                            <h3><b>Libraries</b></h3>
                            <p>Language: Python</p>
                            <ul>
                                <li>
                                    Pandas
                                </li>
                                <li>
                                    Numpy
                                </li>
                                <li>
                                    Thread
                                </li>
                                <li>
                                    OpenCV
                                </li>
                            </ul>
                        </div>
                    </div>
                </ReactCardFlip>
            </div>
        </div>
    );
}

export default Projects;