let emotion = "HAPPY";

function EmotionMeter() {
  if (emotion === "HAPPY") {
    return <i class="fas fa-smile-beam"></i>;
  } else {
    return <i class="fas fa-sad-tear"></i>;
  }
}

export default EmotionMeter;
