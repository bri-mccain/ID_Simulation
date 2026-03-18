export const initialState = {
  week: 1,
  facultyBuyIn: 40,
  studentEngagement: 55,
  courseQuality: 50,
  budget: 50000
}

export function applyDecision(state, decision) {

  const newState = { ...state }

  switch(decision) {

    case "workshop":
      newState.facultyBuyIn += 12
      newState.budget -= 4000
      break

    case "redesign":
      newState.courseQuality += 10
      newState.studentEngagement += 8
      newState.budget -= 3000
      break

    case "aiTools":
      newState.studentEngagement += 12
      newState.courseQuality += 8
      newState.facultyBuyIn -= 8
      newState.budget -= 6000
      break

    case "survey":
      newState.studentEngagement += 6
      newState.courseQuality += 4
      newState.budget -= 1000
      break
  }

  newState.week += 1

  return newState
}
