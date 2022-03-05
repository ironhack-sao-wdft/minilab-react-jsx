import imgPuppy from '../assets/images/puppy.jpg'

function Profile() {
    return (
        <div className ="card" style={{width: "18rem"}}>
            <img src={imgPuppy} class="card-img-top" alt="puppy"/>
            <div className="card-body">
                <h5 className="card-title">Cute puppy</h5>
                <p className ="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac velit enim. Aliquam consequat tortor ac condimentum viverra. Aliquam vitae sodales nunc, vitae semper massa. Vivamus ac tortor porttitor, luctus arcu blandit, aliquet turpis.</p>
            </div>
        </div>
    );
}

export default Profile;