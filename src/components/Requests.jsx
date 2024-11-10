import axios from "axios"
import { BASE_URL } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { addRequest } from "../utils/requestSlice"
import { useEffect } from "react"


const Requests = () => {
    const requests = useSelector((store)=> store.requests)
    const dispatch = useDispatch()

    const fetchRequests = async() =>{
        try{

            const res = await axios.get(BASE_URL+ "/user/request/received",{
                withCredentials:true
            })

            dispatch(addRequest(res?.data?.data))
        }
        catch(err)
        {
            console.log(err)
        }
    }

    useEffect(()=>{
        fetchRequests()
    },[])


    
    if(!requests) return;

    if(requests.length === 0) return <h1>No Requests found..</h1>


  return (
    <div className="text-center my-10">
      <h1 className="text-bold text-white text-2xl">Connection Requests</h1> 

      {requests.map((request)=>{
        const{_id,firstName,lastName,photoUrl,age,about,gender} = request.fromUserId;
      
        return(
            <div className=" flex justify-between items-center m-4 p-4 rounded-lg bg-base-300 w-2/3 mx-auto" key={_id}>

            <div><img src={photoUrl} className="w-20 h-20 rounded-lg " alt="photo" /></div>
            
            <div className="text-left mx-4"> 
             <h2 className="font-bold text-xl">{firstName + " "+ lastName}</h2>
            {age && gender &&  <p>{age+ ", "+gender}</p> }
            <p>{about}</p>
            
            </div>
            
            <div>
            <button className="btn btn-primary mx-2">Reject</button>
            <button className="btn btn-secondary mx-2">Accept</button>
            </div>
          

            </div>
        )})}
    </div>
  )
}

export default Requests