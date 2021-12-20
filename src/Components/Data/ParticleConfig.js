const ParticleConfig = {
    background: {
        color: {
            value: "#000",
        },
        repeat: "no-repeat"
    },
    fpsLimit: 30,
    interactivity: {
        events: {
            onClick: { enable: true, mode: "push" },
            onHover: {
                enable: false,
                mode: "repulse",
                parallax: { enable: false, force: 60, smooth: 10 }
            },
            resize: true
        },
        modes: {
            push: { quantity: 4 },
            repulse: { distance: 20, duration: 0.4 }
        }
    },
    particles: {
        color: { value: "#800080" },
        move: {
            direction: "none",
            enable: true,
            outModes: "out",
            random: true,
            speed: 2,
            straight: false
        },
        number: {
            density: {
                enable: true,
                area: 800
            },
            value: 100
        },
        opacity: {
            animation: {
                enable: true,
                speed: 0.01,
                sync: true,
                startValue: "max",
                destroy: "min"
            },
            value: {
                min: 0,
                max: 500
            }
        },
        shape: {
            type: "circle"
        },
        size: {
            value: { min: 1, max: 5 }
        }
    }
}

export default ParticleConfig;