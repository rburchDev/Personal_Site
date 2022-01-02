import React, { useState, forwardRef } from 'react';
import "./Style/Component.css";
import Profile from "./../Assets/profile-pic.jpeg";
import { MdEmail, MdPhoneIphone } from "react-icons/md";
import { BsLinkedin, BsFacebook, BsYoutube } from "react-icons/bs";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useNav } from '../customHooks/useNav';

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Home() {
    const [isOpen, setOpen] = useState(false);

    const handleClick = (param) => {
        navigator.clipboard.writeText(param)
        setOpen(true)
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const handleEmail = () => {
        window.location.href = 'mailto:rtburch@outlook.com'
    }

    const homeRef = useNav('Home');

    return (
        <section className="Root" ref={homeRef} id='homeContainer'>
                <div className="info-Bar">
                    <h2>
                        Ryan Burch
                    </h2>
                    <img
                        className="Profile"
                        src={Profile}
                        alt="Profile" />
                    <p><b>
                        QA Software Engineer
                    </b></p>
                    <div className="info-List-text">
                        <ul>
                            <li onClick={() => handleEmail()}>
                                <MdEmail /> rtburch@outlook.com
                            </li>
                            <li onClick={() => handleClick('518-729-6063')}>
                                <MdPhoneIphone />
                                518-729-6063
                            </li>
                        </ul>
                        <Snackbar open={isOpen}
                            autoHideDuration={3000}
                            onClose={() => handleClose()}>
                            <Alert onClose={handleClose} severity="success" sx={{ width: '100%', color: 'white' }}>
                                Successfully copied to clipboard!
                            </Alert>
                        </Snackbar>
                    </div>
                    <div className="info-List">
                        <ul>
                            <li>
                                <a href="https://linkedin.com/in/ryanburch-software-engineer" target="_blank" rel="noreferrer noopener">
                                    <BsLinkedin />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/ryan.burch.3139" target="_blank" rel="noreferrer noopener">
                                    <BsFacebook />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/channel/UCS082ztyK0bWZaYCzNoPp2A/featured" target="_blank" rel="noreferrer noopener">
                                    <BsYoutube />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={'mainContent'}>
                </div>
        </section>
    );
}

export default Home;