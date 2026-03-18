export default function DecisionPanel({onDecision}) {

  return (
    <div>

      <button onClick={() => onDecision("workshop")}>
        Host Faculty Workshop
      </button>

      <button onClick={() => onDecision("redesign")}>
        Redesign Assignments
      </button>

      <button onClick={() => onDecision("aiTools")}>
        Introduce AI Tools
      </button>

      <button onClick={() => onDecision("survey")}>
        Student Feedback Survey
      </button>

    </div>
  )
}
