function Emotions() {
  const emotion = "HAPPY";

  if (emotion === "HAPPY") {
    return <i className="far fa-laugh-beam"></i>;
  }

  if (emotion === "SAD") {
    return <i className="far fa-frown"></i>;
  }
}

export default Emotions;
