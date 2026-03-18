export default function Dashboard({state}) {

  return (
    <div>
      <h2>Week {state.week}</h2>

      <p>Faculty Buy-In: {state.facultyBuyIn}</p>
      <p>Student Engagement: {state.studentEngagement}</p>
      <p>Course Quality: {state.courseQuality}</p>
      <p>Budget: ${state.budget}</p>

    </div>
  )
}
