/* eslint-disable react/prop-types */


const UserCard = ({user}) => {
  const{firstName, lastName, photoUrl, age, about, gender} = user
    console.log(user)
  return (
    <div className="card bg-base-300 w-96 shadow-xl">
  <figure>
    <img
      src={user.photoUrl}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName+" "+ lastName}</h2>
    <p>{about}</p>
   {age && gender && <p>{about}</p> }
    <div className="card-actions justify-center my-4">
      <button className="btn btn-primary">Ingore</button>
      <button className="btn btn-secondary">Interested</button>
    </div>
  </div>
</div>
  )
}

export default UserCard
