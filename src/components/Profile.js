import puppy from "../assets/images/puppy.jpg";

function Profile() {
  return (
    <div class="card" style={{ width: "18rem" }}>
      <img src={puppy} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Cute Puppy</h5>
        <p class="card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a velit
          sed nunc ultrices scelerisque et ac urna. Aenean hendrerit scelerisque
          augue non vehicula. Curabitur vitae elit mi.
        </p>
      </div>
    </div>
  );
}

export default Profile;
