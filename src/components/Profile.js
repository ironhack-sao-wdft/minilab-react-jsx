import puppy from "../assets/images/puppy.jpeg";

function ProfileCard() {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={puppy} className="card-img-top" alt="Puppy" />
      <div className="card-body">
        <h5 className="card-title">Cute Puppy</h5>
        <p className="card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras commodo
          eros eu nunc vulputate pellentesque in id urna. Morbi eu velit
          pellentesque, iaculis odio sit amet, pulvinar ligula. Vestibulum
          mollis velit ut leo rhoncus, in elementum augue tempus. Proin euismod
          velit eu eros suscipit pharetra.
        </p>
      </div>
    </div>
  );
}

export default ProfileCard;