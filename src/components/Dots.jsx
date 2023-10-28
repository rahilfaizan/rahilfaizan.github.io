import React from "react";
import { Particles } from "react-tsparticles";

const ParticleBackground = () => {
  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: "#1a202c", // Set the background color of the particle container
        },
        particles: {
          number: {
            value: 100, // Adjust the number of particles
          },
          size: {
            value: 3, // Adjust the size of particles
          },
        },
        interactivity: {
          detectsOn: "window",
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
        },
      }}
    />
  );
};

export default ParticleBackground;
