import NavBar from './NavBar'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import axios from 'axios'
import { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../utils/userSlice'
const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const userData = useSelector((store)=> store.user);
  
  const fetchData = async() =>{

    if(userData)  return;

    try{
      const res =  await axios.get( BASE_URL+"/profile/view",{
       withCredentials:true,
      });

      console.log(res.data)

      dispatch(addUser(res.data))

    }
    catch(err) {
      if(err.status === 401)
      {
        navigate("/login")
      }
      console.log(err);
    }
  }


  useEffect(()=>{
   fetchData()
  },[])
  
  return (
    <div>
    <NavBar/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default Body