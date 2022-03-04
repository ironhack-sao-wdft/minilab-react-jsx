function EmotionMeter() {
  let emotion = "SAD";

  if (emotion === "HAPPY") {
    return <i className="far fa-laugh-wink"></i>;
  } else if (emotion === "SAD") {
    return <i class="far fa-sad-cry"></i>;
  }
}
export default EmotionMeter;
