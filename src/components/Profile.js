import puppy from "../assets/images/puppy.jpg";

function Profile() {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={puppy} class="card-img-top" alt="Dog" />
      <div className="card-body">
      <h5 className="card-title"> Cute Puppy</h5>
        <p className="card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec
          eleifend lectus. Vestibulum eget justo dolor. Nullam in massa sed
          turpis mollis mattis a vitae enim. Curabitur sit amet eros nibh.
          Suspendisse quis eros ante. Pellentesque condimentum urna sit amet sem
          consectetur condimentum. Aliquam erat volutpat. Integer ac cursus
          nisi, quis condimentum mi. Quisque a ornare est.
        </p>
      </div>
    </div>
  );
}
export default Profile;