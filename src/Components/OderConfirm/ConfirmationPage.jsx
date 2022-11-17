import React ,{useEffect}from 'react'
import { useNavigate } from 'react-router-dom'

const ConfirmationPage = () => {

 const navigate = useNavigate()

 const navigateBtn= ()=>{

       
     navigate('/')
     

 }


  return (
    <>
    <main  style={{width:"100%",height:"100vh" , display:'flex',justifyContent:'center',alignItems:"center"}}>
              <div className="Order-Confirmed" style={{display:"flex",justifyContent:"center",flexDirection:"column"}} >
                <h2 style={{textTransform:'uppercase', fontWeight:'100'}}>Thank you for purchase</h2>
                <div className="order-number">Your order number is {"12355"}</div>
                <button className='continue-Shopping-btn'  onClick={navigateBtn} style={{background:"green", padding:"0.5rem"}}    >Continue Shopping</button>
              </div>
        </main> </>
  )
}

export default ConfirmationPage