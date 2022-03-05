function EmotionMeterFace() {
    const emotion = "SAD"

    if (emotion === "HAPPY") {
        return <i className = "far fa-smile fa-5x" />
    } else if (emotion === "SAD") {
        return <i className = "far fa-frown fa-5x" />
    } else {
        return <i className = "far fa-times-circle fa-5x" />
    }
}

export default EmotionMeterFace;

