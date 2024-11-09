import axios from "axios";
import { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import UserCard from "./UserCard";

const Feed = () => {
  const feed = useSelector((store) => store.feed)
  const dispatch = useDispatch()

  const getfeed = async()=>{
    
    if(feed) return;
    try{
      const res = await axios.get(BASE_URL + "/feed",{
        withCredentials:true
      })
      dispatch(addFeed(res.data))
     console.log(res.data)
    }
    catch(err)
    {
      console.log(err)
    }

  }


  useEffect(()=>{
    getfeed()
  },[])
  
  return (
    feed && (

    <div className="flex justify-center my-10">
      <UserCard user = {feed[0]}/>
    </div>
    )
  );
}

export default Feed
