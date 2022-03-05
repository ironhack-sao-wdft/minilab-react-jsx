function EmotionMeter() {
  let emotion = "SAD";

  return emotion === "HAPPY" ? (
    <i className="far fa-laugh-wink fa-5x"></i>
  ) : (
    <i className="far fa-sad-cry fa-5x"></i>
  );

  // if (emotion === "HAPPY") {
  //   return <i className="far fa-laugh-wink fa-5x"></i>;
  // } else if (emotion === "SAD") {
  //   return <i className="far fa-sad-cry fa-5x"></i>;
  // }
}
export default EmotionMeter;
