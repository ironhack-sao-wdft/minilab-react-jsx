import imgPuppy from '../assets/images/puppy.jpg'

function Profile() {
    return (
        <div>
            <img src={imgPuppy} alt="cachorrinho" />
            <h1>Cute Puppy</h1>
            <p>Teste</p>
        </div>
    );
}

export default Profile;