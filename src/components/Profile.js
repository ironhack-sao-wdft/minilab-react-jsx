import puppy from "../assets/images/puppy.jpg";

function Profile() {
  return (
    <div className="card">
      <img src={puppy} className="card-img-top" alt="puppy" />
      <div className="card-body">
        <h1>Cute Puppy</h1>
        <p className="card-text">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          rhoncus tincidunt sem, a tempus purus luctus id. Nunc vel justo ut
          lectus ullamcorper lobortis vel at tellus.{" "}
        </p>
      </div>
    </div>
  );
}

export default Profile;

// className="card" style="width: 18rem;"
