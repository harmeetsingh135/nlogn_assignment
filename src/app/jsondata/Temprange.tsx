type TemperatureRange = {
    minTemp: number;
    maxTemp: number;
    description: string;
    imagePath: string;
  };
  
  const temperatureRanges: TemperatureRange[] = [
      {
          minTemp: -50,
          maxTemp: -11,
          description: "Extremely Cold 🥶",
          imagePath: "/images/extremely-cold.png"
      },
      {
          minTemp: -10,
          maxTemp: 0,
          description: "Freezing Cold ❄️",
          imagePath: "/images/freezing-cold.png"
      },
      {
          minTemp: 1,
          maxTemp: 10,
          description: "Cold 🧊",
          imagePath: "/images/cold.png"
      },
      {
          minTemp: 11,
          maxTemp: 20,
          description: "Cool 🌬️",
          imagePath: "/images/cool.png"
      },
      {
          minTemp: 21,
          maxTemp: 30,
          description: "Mild 🌼" ,
          imagePath: "/images/mild.png"
      },
      {
          minTemp: 31,
          maxTemp: 40,
          description: "Warm ☀️",
          imagePath: "/images/warm.png"
      },
      {
          minTemp: 41,
          maxTemp: 50,
          description: "Hot 🔥",
          imagePath: "/images/hot.png"
      },
      {
          minTemp: 51,
          maxTemp: 60,
          description: "Scorching 🌋",
          imagePath: "/images/scorching.png"
      }
  ];
  
  export default temperatureRanges;
  