
import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const GraphAnimation = () => {
  const initialData = [
    { Year: 2000, UnitedStates: 10284.75, China: 4887.301, Japan: 1955.673, Germany: 1451.316, UnitedKingdom: 1387.21, France: 1327.964, Italy: 1214.912, Canada: 1145.109, India: 476.745 },
    { Year: 2005, UnitedStates: 13093.7, China: 5112.465, Japan: 2176.434, Germany: 2775.573, UnitedKingdom: 1417.603, France: 2308.786, Italy: 2007.45, Canada: 1355.834, India: 1001.257 },
    { Year: 2010, UnitedStates: 14964.4, China: 5812.464, Japan: 2585.455, Germany: 3309.668, UnitedKingdom: 2560.002, France: 2207.079, Italy: 2087.889, Canada: 1729.01, India: 1232.742 },
    { Year: 2015, UnitedStates: 18036.65, China: 11226.186, Japan: 4382.42, Germany: 3365.293, UnitedKingdom: 2863.304, France: 2420.163, Italy: 2088.155, Canada: 1825.82, India: 1752.808 },
    { Year: 2020, UnitedStates: 20936.6, China: 14772.731, Japan: 5064.873, Germany: 3806.06, UnitedKingdom: 2707.744, France: 2622.984, Italy: 2603.004, Canada: 1886.445, India: 2646.706 },
  ];

  const countries = [
    "UnitedStates",
    "China",
    "Japan",
    "Germany",
    "UnitedKingdom",
    "France",
    "Italy",
    "Canada",
    "India",
  ];

  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulate the increase in x-axis data over time
    let newData = [];
    initialData.forEach((item) => {
      newData.push(item);
      setTimeout(() => {
        setData([...newData]);
      }, 1000);
    });
  }, []);

  const customTickFormatter = (tick) => {
    return tick;
  };

  return (
    <ResponsiveContainer width="100%" height={600}>
      <LineChart data={data} margin={{ left: 0, right: 0 }}>
        {/* Add multiple linear gradients */}
        <defs>
          {countries.map((country, index) => (
            <linearGradient key={index} id={`gradient${index}`} x1="0" y1="0" x2="1" y2="0">
              <stop offset="14.53%" stopColor={index === 0 ? "#24CBFF" : index === 1 ? "#FC59FF" : "#FFBD0C"} />
              <stop offset="69.36%" stopColor={index === 0 ? "#FC59FF" : index === 1 ? "#FFBD0C" : "#24CBFF"} />
              <stop offset="117.73%" stopColor={index === 0 ? "#FFBD0C" : index === 1 ? "#24CBFF" : "#FC59FF"} />
            </linearGradient>
          ))}
        </defs>
        <XAxis dataKey="Year" axisLine={false} tickLine={false} tickFormatter={customTickFormatter} />
        <YAxis hide={true} />
        <Tooltip
          content={({ active, payload, label }) => {
            if (active && payload && payload.length) {
              return (
                <div className="tooltip">
                  <p>{`Year: ${label}`}</p>
                  {payload.map((entry, index) => (
                    <p key={index} style={{ color: entry.color }}>
                      {`${countries[index]}: ${entry.value} million $`}
                    </p>
                  ))}
                </div>
              );
            }
            return null;
          }}
        />
        <Legend content={() => null} /> {/* Hide the legend */}
        {countries.map((country, index) => (
          <Line
            key={index}
            type="monotone"
            dataKey={country}
            stroke={`url(#gradient${index})`}
            strokeWidth={2}
            dot={false}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default GraphAnimation;
