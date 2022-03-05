
function EmotionMeter() {
    let emotion = 'HAPPY';

    if (emotion === 'HAPPY') {
        return <i className="fas fa-smile fa-5x"></i>
    } else {
        return <i class="fas fa-frown fa-5x"></i>
    };
}

export default EmotionMeter;