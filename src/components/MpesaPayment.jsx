import React from 'react'
import { useState } from 'react'
import {useLocation} from 'react-router-dom'
import axios from 'axios'


const MpesaPayment = () => {

// initializing hooks

const[loading,setLoading]=useState("")
const[success,setSuccess]=useState("")
const[error,setError]=useState("")

// custom hooks 

const[phone,setPhone]=useState("")

// receiving the parsed data from get products

const{product}=useLocation().state || {}


const submit=async(e)=>{

e.preventDefault()

setLoading("Please wait for a moment")



try {

  const data=new FormData()

  data.append("phone",phone)
  data.append("amount",product.product_cost)
 



const response=await axios.post("https:jpmurage.alwaysdata.net/api/mpesa_payment",
data)


  setSuccess(response.data.message)

  setLoading("")



  
} catch (error) {

setLoading("Please wait for a moment...")

  setError(error.message)
  
}


}











  return (
    <div className='row justify-content-center'>
<h1>Make payments-Lipa na mpesa</h1>

<p  className='text-success'>{product.product_name} </p>
<p  className='text-warning'>{product.product_cost} </p>
  <p  className='text-secondary'>{product.product_description}</p>

    <div  className='col-md-6'>

      <form action="" onSubmit={submit}>

    <p  className='text-warning'>{loading} </p>
    <p  className='text-success'> {success} </p>
    <p className='text-danger'>{error} </p>


          <input type="tel"className='form-control' placeholder='Enter phone number starting with  +254' value={phone} required onChange={(e)=>setPhone(e.target.value)}/>

          <br />

          <button className='btn btn-secondary w-100' type='submit' >Make Payments</button>









      </form>




    </div>



    </div>
  )
}

export default MpesaPayment
