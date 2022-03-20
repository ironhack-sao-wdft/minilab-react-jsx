function EmotionMeter() {
    
    const emotion = "HAPPY";
   
    return emotion === "HAPPY" ? (
    <i className="fab fa-angellist fa-5x"></i> 
    ) : (
    <i className="fal fa-thumbs-down fa-5x"></i>
    );
}


export default EmotionMeter;