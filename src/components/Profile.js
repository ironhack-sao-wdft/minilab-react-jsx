import ProfilePhoto from "../assets/images/puppy.jpg";


function Profile() {
    return (
        <div className = "card" style = {{width: "18rem"}}>
            <img src = {ProfilePhoto} className = "card-img-top" alt = "Puppy"/>
                <div className = "card-body">
                    <h5 className = "card-title"> Cute Puppy </h5>
                    <p className = "card-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum tortor eget orci malesuada luctus. Nunc pharetra sodales nibh a ornare. Nam vel elit sagittis ex condimentum facilisis.</p>
                </div>
        </div>
    );
}

export default Profile;