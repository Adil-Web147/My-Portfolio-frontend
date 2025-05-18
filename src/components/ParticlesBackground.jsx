import { useCallback } from "react"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import "./ParticlesBackground.css"

const ParticlesBackground = ({ theme }) => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])

  const lightModeOptions = {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#1b89c4",
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.5,
        random: false,
      },
      size: {
        value: 2,
        random: true,
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#338BA8",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
      },
    },
    retina_detect: true,
  }

  const darkModeOptions = {
    ...lightModeOptions,
    particles: {
      ...lightModeOptions.particles,
      color: {
        value: "#4a88c7",
      },
      line_linked: {
        ...lightModeOptions.particles.line_linked,
        color: "#5a9bda",
      },
    },
  }

  return (
    <div className="particles-container">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={theme === "light" ? lightModeOptions : darkModeOptions}
      />
    </div>
  )
}

export default ParticlesBackground
