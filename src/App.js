import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [time, setTime] = useState(new Date());
  const [theme, setTheme] = useState("dark-theme");

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (date) => ({
    hour: date.getHours() % 12 || 12,
    minute: String(date.getMinutes()).padStart(2, "0"),
    second: String(date.getSeconds()).padStart(2, "0"),
    shift: date.getHours() >= 12 ? "PM" : "AM",
    date: date.toLocaleDateString(),
    day: date.toLocaleDateString("en-US", { weekday: "long" }),
  });

  const { hour, minute, second, shift, date, day } = formatTime(time);

  return (
    <div className={`app ${theme}`}>
      <nav className="buttons">
        <ul>
          <li><button onClick={() => setTheme("dark-theme")}>DARK</button></li>
          <li><button onClick={() => setTheme("light-theme")}>LIGHT</button></li>
          <li><button onClick={() => setTheme("blue-theme")}>BLUE</button></li>
          <li><button onClick={() => setTheme("green-theme")}>GREEN</button></li>
          <li><button onClick={() => setTheme("purple-theme")}>PURPLE</button></li>
        </ul>
      </nav>
      <div className="main-container">
        <div className="container">
          <span className="small-text">{date}</span>
          <h1 className="time">{hour}</h1>
          <span className="small-text">{shift}</span>
        </div>
        <span className="colon">:</span>
        <div className="container">
          <span className="small-text">{day}</span>
          <h1 className="time">{minute}</h1>
          <span className="small-text">{second}</span>
        </div>
      </div>
    </div>
  );
};

export default App;
