import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const AddProducts = () => {
  
  
//   initializing hooks
        const[product_name,setProduct_name]=useState("")
        const[product_description,setProduct_description]=useState("")
        const[product_cost,setProduct_cost]=useState("")
        const[product_photo,setProduct_photo]=useState("")

// initializing success,error and loading 
        const[success,setSuccess]=useState("");
        const[error,setError]=useState("");
        const[loading,setLoading]=useState("");


//   function to send data

        const submit=async(e)=>{

        e.preventDefault() 
        setLoading("Please wait as we upload your products")

    try {
        
    const data=new FormData()

    data.append("product_name",product_name)
    data.append("product_description",product_description)
    data.append("product_cost",product_cost)
    data.append("product_photo",product_photo)


    const response=await axios.post("https://jpmurage.alwaysdata.net/api/addproducts",data)


    setLoading("")


    setSuccess(response.data.message)

    // Then we have to reset our form


    setProduct_name("")
    setProduct_description("")
    setProduct_cost("")
    setProduct_photo("")








    } catch (error) {
        setLoading("")
        setError(error.message)

    
}



} 


  

  
  
  
  
  
    return (
   <div className='row justify-content-center mt-5'>

      <div className='card shadow col-md-6'>

        <h1>Upload products</h1>

        <form action="" onSubmit={submit} >


          <p className='text-warning'>{loading}</p>
          <p className='text-success'>{success}</p>
          <p className='text-danger'>{error}</p>


          <input type="text" placeholder='Enter Product Name' className='form-control'   required value={product_name} onChange={(e)=>setProduct_name(e.target.value)} />
          <br />
          <textarea name="" id="" placeholder='Describe Your Product'className='form-control'  required value={product_description} onChange={(e)=>setProduct_description(e.target.value)} ></textarea>
          <br />
          <input type="number" placeholder='Enter Product cost' className='form-control' required value={product_cost} onChange={(e)=>setProduct_cost(e.target.value)} />
          <br />
          <p><b>Upload Product Photo</b></p>
          <br />
          <input    type="file" className='form-control'  onChange={(e)=>setProduct_photo(e.target.files[0])} accept='image/*' />
                   
        
                  <br />

           <input type="submit"value="Upload Product" className='btn bg-primary   form-control  w-100 text-white'/>
           <br />
           <br />
           




        </form>



      </div>


    </div>
  )
}


export default AddProducts
