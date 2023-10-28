import React from "react";

const BarGraph = () => {
  // Replace this data with your actual skill data
  const skillsData = [
    { skill: "Data Analysis 1", level: 80 },
    { skill: "Data Analysis 2", level: 60 },
    { skill: "Data Analysis 3", level: 90 },
    // Add more skills and levels as needed
  ];

  return (
    <div className="flex flex-col items-center">
      {skillsData.map((skill, index) => (
        <div
          key={index}
          className="w-64 mb-4 p-2 bg-gray-200 rounded-md shadow"
        >
          <div
            className="h-8 bg-blue rounded-md"
            style={{ width: `${skill.level}%` }}
          ></div>
          <p className="text-center mt-2">{skill.skill}</p>
        </div>
      ))}
    </div>
  );
};

export default BarGraph;
