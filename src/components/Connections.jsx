import axios from "axios"
import { BASE_URL } from "../utils/constants"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addConnections } from "../utils/connectionSlice"

const Connections = () => {
    const connections = useSelector((store)=> store.connection)
    const dispatch = useDispatch()

    const fetchConnections = async () =>{
        try{

            const res = await axios.get(BASE_URL+"/user/connections",{
                withCredentials:true,
            })
           console.log(res?.data)
           dispatch(addConnections(res?.data))
        }
        catch(err)
        {
            console.log(err)
            //Handle error case
        } 
    }

    useEffect(()=>{
        fetchConnections();
    },[])

    console.log("***",connections)

    if(!connections) return;

    if(connections.length === 0) return <h1>No Connections found..</h1>

  return (
    <div className="text-center my-10">
      <h1 className="text-bold text-white text-2xl">Connections</h1> 

      {connections.map((connection,index)=>{
        const{firstName,lastName,photoUrl,age,about,gender} = connection
      
        return(
            <div className=" flex m-4 p-4 rounded-lg bg-base-300 w-1/2 mx-auto" key={index}>

            <div><img src={photoUrl} className="w-20 h-20 rounded-lg " alt="photo" /></div>
            
            <div className="text-left mx-4"> 
             <h2 className="font-bold text-xl">{firstName + " "+ lastName}</h2>
            {age && gender &&  <p>{age+ ", "+gender}</p> }
            <p>{about}</p>
            
            </div>
            
          

            </div>
        )})}
    </div>
  )
}

export default Connections
