import React from 'react'
import { Link, unstable_getRequest } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

export const SignUp = () => {


  // initialize the hooks

const[username,setUsername]=useState("")

const[email,setEmail]=useState("")

const[phone,setPhone]=useState("")

const[password,setPassword]=useState("")


// initialize other hooks like loading,success and error
const[loading,setLoading]=useState("")
const [success,setSuccess]=useState("")
const[error,setError]=useState("")

// function to send out data to the server

const submit=async(e)=>{

  e.preventDefault()

  setLoading("please wait for a moment...")


try {
  
const data= new FormData()

data.append("username",username)
data.append("email",email)
data.append("phone",phone)
data.append("password",password)

// calling the api

const response=await axios.post("https://jpmurage.alwaysdata.net/api/signup",data)


setLoading("")


setSuccess(response.data.message)

// reset your form

setUsername("")
setEmail("")
setPassword("")
setPhone("")







} catch (error) {
  

  setLoading("")
  setError(error.message)






}






}



  return (
    <div  className='row justify-content-center mt-3'>


      <div className='card shadow col-md-6 '>

        <h1>Sign Up</h1>
        <form action="" onSubmit={submit}>


      <p  className='text-warning'>{loading}</p>
      <p  className='text-success'>{success}</p>
      <p  className='text-danger'>{error}</p>







        <input type="text" placeholder='Enter your username' className='form-control' required value={username} onChange={(e)=>setUsername(e.target.value)}/>
      
        <br />


      
          

            <input type="email"  placeholder='Enter your email' className='form-control'  required value={email} onChange={(e)=>setEmail(e.target.value)}/>
    
    <br />




            <input type="password" placeholder='Enter your password' className='form-control' required value={password} onChange={(e)=>setPassword(e.target.value)}/>
        
        <br />


            <input type="tel"placeholder='Enter your phone number' className='form-control' required value={phone} onChange={(e)=>setPhone(e.target.value)}/>

            <br />

           <input type="submit" value="Sign Up"className='bg-secondary w-100 form-control text-white' />
            
            
            <br />

            <p>Already have an account? <Link to="/signin">Sign in</Link></p>





      </form>




          

        







      </div>
        
        
     
       


        </div>
  )
}
