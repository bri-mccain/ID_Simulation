import { useState } from "react";
import "../styles/globals.css";
import { applyDecision } from "../simulation/engine";

export default function Home() {
  const [state, setState] = useState({
    time: 5,
    quality: 5,
    satisfaction: 5,
    message: ""
  });

  const scenario = {
    title: "The Rushed Online Course",
    description:
      "A faculty member needs their course moved online in 2 weeks. They want it done quickly and are not interested in a full redesign.",
  };

  const options = [
    {
      text: "Build the course quickly with minimal changes",
      impact: { time: +2, quality: -2, satisfaction: -1 },
      result:
        "You met the deadline, but the course lacks engagement and structure.",
    },
    {
      text: "Conduct a full needs analysis before building",
      impact: { time: -2, quality: +3, satisfaction: +1 },
      result:
        "The course is high-quality, but the faculty member is frustrated with delays.",
    },
    {
      text: "Use a template-based approach for faster design",
      impact: { time: +1, quality: +1, satisfaction: +2 },
      result:
        "The course is solid, and the faculty member is happy with the balance.",
    },
  ];

  function handleDecision(option) {
    const newState = applyDecision(state, option);
    setState(newState);
  }

  return (
    <div className="container">
      <h1>{scenario.title}</h1>
      <p>{scenario.description}</p>

      <div className="dashboard">
        <div className="metric">Time: {state.time}</div>
        <div className="metric">Quality: {state.quality}</div>
        <div className="metric">Satisfaction: {state.satisfaction}</div>
      </div>

      <div className="buttons">
        {options.map((option, index) => (
          <button key={index} onClick={() => handleDecision(option)}>
            {option.text}
          </button>
        ))}
      </div>

      {state.message && (
        <div className="results">
          <p>{state.message}</p>
        </div>
      )}
    </div>
  );
}
