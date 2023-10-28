import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery"; // Replace with the correct path to your useMediaQuery hook

const LetterByLetterAnimation = ({ text = "Based in Kelowna, BC Canada" }) => {
  const [showText, setShowText] = useState(false);
  const isMobile = useMediaQuery("(max-width: 767px)");

  useEffect(() => {
    const revealText = () => {
      setShowText(true);
    };

    // Delay the reveal of the text by 1 second for a better effect
    setTimeout(revealText, 1000);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 1 } }}
      className="flex justify-center mt-5"
    >
      <h2 className={`font-semibold ${isMobile ? "text-5xl" : "text-8xl"}`}>
        {showText &&
          text.split("").map((letter, index) => (
            <motion.span key={index} initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.5, delay: index * 0.1 } }}>
              {letter}
            </motion.span>
          ))}
      </h2>
    </motion.div>
  );
};

export default LetterByLetterAnimation;
