/* eslint-disable react/prop-types */
import { useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const EditProfile = ({user}) => {

    const[firstName,setFirstName] = useState(user.firstName);
    const[lastName,setLastName] = useState(user.lastName);
    const[age,setAge] = useState(user.age);
    const[gender,setGender] = useState(user.gender);
    const[about,setAbout] = useState(user.about);
    const[photoUrl,setPhotoUrl] = useState(user.photoUrl);
    const[error,setError] = useState("")
    const[showToast,setShowToast] = useState(false);

    const dispatch = useDispatch()
    
    const saveProfile = async() =>{

        //clear the errors
        setError("");

        try{
            const res = await axios.patch(BASE_URL+ "/profile/edit",{
                firstName,
                lastName,
                photoUrl,
                age,
                gender,
                about
            }, { withCredentials:true}
        )

        dispatch(addUser(res?.data?.data));
        setShowToast(true);

        setTimeout(()=>{
            setShowToast(false);
        },3000)
       
    }

        catch(err){
            console.log(err.response.data)
          setError(err.response.data)
        }
    }
  return (
    <>
    <div className="flex justify-center my-10">
    <div className='flex justify-center mx-10'>
    <div className="card bg-base-300 w-96 shadow-xl">
      <div className="card-body">
        <h2 className="card-title justify-center">Edit Profile</h2>
        <div>
          <label className="form-control w-full max-w-xs my-2">
            <div className="label">
              <span className="label-text">FirstName </span>
            </div>
            <input type="text"
            value={firstName} 
            placeholder="Type here" 
            className="input input-bordered w-full max-w-xs"
            onChange={(e)=> setFirstName(e.target.value)}
             />
          
          </label>

          <label className="form-control w-full max-w-xs my-2">
            <div className="label">
              <span className="label-text">LastName </span>
            </div>
            <input type="text"
            value={lastName} 
            placeholder="Type here" 
            className="input input-bordered w-full max-w-xs"
            onChange={(e)=> setLastName(e.target.value)}
             />
          
          </label>

          <label className="form-control w-full max-w-xs my-2">
            <div className="label">
              <span className="label-text">PhotoUrl</span>
            </div>
            <input type="text"
            value={photoUrl} 
            placeholder="Type here" 
            className="input input-bordered w-full max-w-xs"
            onChange={(e)=> setPhotoUrl(e.target.value)}
             />
          
          </label>

          <label className="form-control w-full max-w-xs my-2">
            <div className="label">
              <span className="label-text">Age</span>
            </div>
            <input type="text"
            value={age} 
            placeholder="Type here" 
            className="input input-bordered w-full max-w-xs"
            onChange={(e)=> setAge(e.target.value)}
             />
          
          </label>
          <label className="form-control w-full max-w-xs my-2">
            <div className="label">
              <span className="label-text">Gender</span>
            </div>
            <input type="text"
            value={gender} 
            placeholder="Type here" 
            className="input input-bordered w-full max-w-xs"
            onChange={(e)=> setGender(e.target.value)}
             />
          
          </label>

          <label className="form-control w-full max-w-xs my-2">
            <div className="label">
              <span className="label-text">About</span>
            </div>
            <input type="text"
            value={about} 
            placeholder="Type here" 
            className="input input-bordered w-full max-w-xs"
            onChange={(e)=> setAbout(e.target.value)}
             />
          
          </label>

         

        </div>
          <p className='text-red-500'>{error}</p>
        <div className="card-actions justify-center m-2">
          <button className="btn btn-primary" onClick={saveProfile}>Save Profile</button>
        </div>
      </div>
    </div>
  </div>
  <UserCard user={{firstName,lastName,photoUrl,age,gender,about}}/>
  </div>

 { showToast &&   (<div className="toast toast-top toast-center">
  <div className="alert alert-success">
    <span>Profile saved successfully.</span>
  </div>
</div>
 )}
   </>
  )
}

export default EditProfile
