
import React,{ useState ,useEffect } from 'react'
import './App.css'
import {useDispatch} from "react-redux"
import authService from "./appwrite/auth"
import { login, logout } from './features/authSlice'
import { Footer, Header } from './components'
import {Outlet} from "react-router-dom"

function App() {
  const [loading , setLoading] = useState(true)
  const dispatch=useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login(userData))
      }else{
        dispatch(logout())
      }
    })
    .catch((error)=>{ console.log("ERR IN LOADING:",error.message)})
    .finally(()=>setLoading(false))
  },[])



  return !loading ? (
    <div className="bg-slate-800  w-full h-full">
      <div className="text-gray-200 w-full h-full">
        <Header/>
        <main>
        TODO:<Outlet/>
        </main>
        <Footer/>
      </div>
    </div>
  ): null
  
} 

export default App
