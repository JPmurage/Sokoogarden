import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const GetProducts = () => {
  // return displays in browser and not in terminal

const[error,setError]=useState("")
const[loading,setLoading]=useState("")
const[products,setProducts]=useState([])

// a variable to store our images

const img_url="https://jpmurage.alwaysdata.net/static/images/"



// A function to get our  products from the api API(fetch)

const fetchproducts=async()=>{

try {
  


// call your API

const response=await axios.get("https://jpmurage.alwaysdata.net/api/getproductdetails")

setProducts(response.data)

console.log("The response is",response)
setLoading("")

} catch (error) {

  setLoading("")
  setError(error.message)
  
  
}

}
// This is where we have our useEffect

useEffect(()=>{

fetchproducts()



// dependency array-to fetch once
},[])

  return (
    <div  className='row bg-secondary'>
   
<h1>Available products</h1>

<p className='text-warning'>{loading}</p>
<p  className='text-danger'>{error}</p>


{/* mapping through the products */}

{products.map((product)=>(




    <div  className='col-md-4 justify-content-center mt-3 '>


      <div  className='card shadow '>
  <br />
      <img src={img_url+product.product_photo} alt="Bakewelltart" className='product_img' />

<div  className='card-body'></div>
    <h3 className='text-info'>{product.product_name}</h3>
    <p>{product.product_description}</p>
    <b  className='text-warning'>{product.product_cost}</b>

    <br />
    <input type="button" value="Make Payment"className='btn btn-dark w-100 text-info' />


</div>






    </div>
))}
    </div>
  )
}

export default GetProducts
