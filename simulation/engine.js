export function applyDecision(state, option) {
  return {
    time: state.time + option.impact.time,
    quality: state.quality + option.impact.quality,
    satisfaction: state.satisfaction + option.impact.satisfaction,
    message: option.result
  };
}
