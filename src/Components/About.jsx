import { React, useState } from 'react';
import "./Style/Component.css";
import SkillBar from 'react-skillbars';
import {SkillsL, SkillsT} from './Data/Skills'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

function About() {
    const [open, setOpen] = useState(false);
    const [text, setText] = useState();
    const [confused, setConfused] = useState(false);

    const handleClose = (param) => {
        if (param === 'Confused') {
            setOpen(false);
            setConfused(true);
        }
        if (param === 'Good') {
            setOpen(false);
        }
    };

    const handleConfusedClosed = () => {
        setConfused(false);
    }

    const handleEmail = () => {
        setConfused(false);
        window.location.href = 'mailto:rtburch@outlook.com'
    }

    const handleClick = (param) => {
        if (param === 'Python') {
            setOpen(true);
            setText('Python is the language I use the most during my day and most my programs are written in Python. I use Python daily.')
        }
        if (param === 'React') {
            setOpen(true);
            setText('I have used ReactJS to build a custom QA Dashboard and this website. ReactJS is something I use weekly but not necessarily daily.')
        }
        if (param === 'ShellScript') {
            setOpen(true);
            setText('I have built Shell Scripts which collect data from systems I am performing test on. I feel comfortable with Shell Scripts, but I am no expert. I write Shell Scripts at least once a month.')
        }
        if (param === 'JaveScript') {
            setOpen(true);
            setText('I have used JaveScript in the websites I have built with ReactJS (Obviously...). I also help debug a product which is written in JaveScript. I use JaveScript weekly, either in the form of programming or debugging.')
        }
        if (param === 'CSS') {
            setOpen(true);
            setText('I have developed the CSS for this site and the custom QA Dashboard. Outside of that, I have limited experience with CSS and HTML. I use CSS weekly, but that use is limited.')
        }
        if (param === 'GitHub/Git') {
            setOpen(true);
            setText('I use GitHub and Git daily as our repo for all of our code and version control system. I am very comfortable with both.')
        }
        if (param === 'PyCharm') {
            setOpen(true);
            setText('PyCharm is the IDEA I use for all of my Python Development. I use it daily and I am comfortable with all of its abilities.')
        }
        if (param === 'Jenkins') {
            setOpen(true);
            setText('I use Jenkins as our continous automation server. I am comfortable with Jenkins and use it weekly.')
        }
        if (param === 'Jira') {
            setOpen(true);
            setText('I use Jira for Bug Reporting and as our Scrum Board. I am comfortable with Jira and use it daily.')
        }
        if (param === 'VisualStudio') {
            setOpen(true);
            setText('VisualStudio Code is the IDEA I use when programming anything other than Python. I use it daily and am very comfortable with it.')
        }
    }

    return (
        <>
            <div className="aboutHeader">
                <h1>
                    <span>
                        About
                    </span>
                </h1>
            </div>
            <div className='aboutContainer'>
                <span className="skillBar" onClick={(e) => handleClick(e.target.innerText)}>
                <h3>
                    Languages
                </h3>
                    <SkillBar skills={SkillsL} animationDelay={1000} animationDuration={3000} />
                <h3>
                    Tools
                </h3>
                    <SkillBar skills={SkillsT} animationDelay={3000} animationDuration={3000} />
                </span>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"What does the Percent mean?"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {text}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => handleClose('Confused')}>Confused</Button>
                        <Button onClick={() => handleClose('Good')} autoFocus>
                            Understood
                        </Button>
                    </DialogActions>
                </Dialog>
                <Dialog
                    open={confused}
                    onClose={handleConfusedClosed}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"I am sorry...."}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {'If you would like me to elborate more, please click "Email Me". Otherwise, click "No Thanks".'}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleConfusedClosed}>No Thanks</Button>
                        <Button onClick={handleEmail} autoFocus>
                            Email Me
                        </Button>
                    </DialogActions>
                </Dialog>
                <div className="aboutContent">
                    <p>
                        Hello! My name is Ryan Burch and I enjoy solving complicated issues that require developing new programs. This passion has fortunately grown into a career.
                    </p>
                    <p>
                        I am currently employed by Dish Network on the Dish Business QA team as a QA Software Engineer. My current projects include but are not limited to:
                    </p>
                    <ul>
                        <li>
                            Live Video Anomaly Detection using Surprised Machine Learning and OpenCV
                        </li>
                        <li>
                            Building and Maintaining a Custom QA Dashboard built with ReactJS and Python
                        </li>
                        <li>
                            Building Data Collectors and Automated Test for our Linux Caching Server
                        </li>
                        <li>
                            Building Automated Test for our Android TV Set-Top-Box
                        </li>
                    </ul>
                    <p>
                        Within each of those projects I am able to use a multitude of technologies. Those current technologies include:
                    </p>
                    <ul>
                        <li>
                            Python
                        </li>
                        <li>
                            ReactJS
                        </li>
                        <li>
                            Shell Script
                        </li>
                        <li>
                            Nginx
                        </li>
                    </ul>
                    <p>
                        Outside of work I enjoy being outdoors with my wife and dog. We mostly enjoy hiking and backpacking. I also enjoy running, skiing and racing my dirt bike.
                    </p>
                </div>
            </div>
        </>
    );
}

export default About;