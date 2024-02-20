
// MySkills.jsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { createBarChart } from "../chartConfig.js";
import useMediaQuery from "../hooks/useMediaQuery";
import LineGradient from "../components/LineGradient";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");

  const skillsData = [
    { skill: "Programming Languages - Python, R, JS, C++, C", level: 4.5 },
    { skill: "Data Visualization - Tableau, Power BI", level: 4.5 },
    { skill: "Database Management - SQL, NoSql, Vector databases", level: 4 },
    { skill: "Machine Learning/ Deep Learning", level: 4 },
    { skill: "Mathematics", level: 4 },
    { skill: "Problem Solving", level: 4 },
    { skill: "Other Data Analytics tools - Excel, Spss", level: 4 },
  ];
  
  
  skillsData.sort((a, b) => b.level - a.level);

  useEffect(() => {
    createBarChart(skillsData, isAboveLarge);
  }, [isAboveLarge]);

  return (
    <section id="skills" className="pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-20">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
        </motion.div>
      </div>

      {/* SKILLS */}
      <div className="md:flex">
        {/* BAR GRAPH */}
        <motion.div
          className="md:w-4/5 mx-auto mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div style={{width: "100%",minHeight:"400px", margin: "0 auto" }}>
            <canvas id="myChart" style={{ width: "100%"}}></canvas>
          </div>
        </motion.div>
        {/* Empty div to maintain the layout */}
        <div className="md:w-1/5 mt-10 md:hidden"></div>
      </div>
    </section>
  );
};

export default MySkills;
