function EmotionMeter() {
  const emotion = "HAPPY";
  return emotion === "HAPPY" ? (
    <i className="fas fa-smile fa-5x"></i>
  ) : (
    <i className="fas fa-frown fa-5x"></i>
  );
}
export default EmotionMeter;
