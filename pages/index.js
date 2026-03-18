import { useState } from "react";
import Dashboard from "../components/Dashboard"
import DecisionPanel from "../components/DecisionPanel"
import { initialState, applyDecision } from "../simulation/engine"

export default function Home() {

  const [state, setState] = useState(initialState)

  function handleDecision(decision) {

    const updatedState = applyDecision(state, decision)

    setState(updatedState)

  }

  return (
    <div>

      <h1>Instructional Design Consultant Simulator</h1>

      <Dashboard state={state} />

      <DecisionPanel onDecision={handleDecision} />

    </div>
  )
}
