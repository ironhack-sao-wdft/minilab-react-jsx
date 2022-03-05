function Emotions() {
  const emotion = "HAPPY";

  if (emotion === "HAPPY") {
    return <i className="far fa-laugh-beam fa-5x"></i>;
  }

  if (emotion === "SAD") {
    return <i className="far fa-frown fa-5x"></i>;
  }
}

export default Emotions;