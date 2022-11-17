import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";

const OrderConfirm = () => {

  const [paymentMenthod,setpaymentMethod] = useState('')
    const [btndisable, setbtndisable] = useState(false)

   const dispatch = useDispatch();
  
   const navigate = useNavigate()


        const  Submitahandler =(e)=>{

 e.preventDefault()
 console.log(paymentMenthod);
 
 navigate('/confirmation')

 dispatch({
  type: "emptycart",
 });
 setbtndisable(true)


        }


  return (
    <>
  <main  style={{width:"100%", height:"100vh",display:"flex",justifyContent:"center",alignItems:"center" ,flexDirection:"column"}}>   
    <div className="secure-payment">
    Secure Payment
    </div>

    <form  onSubmit={Submitahandler}>   

      <div className="payment-option">
        <div className="cod">
          Cod  <input type="radio" required  value={paymentMenthod} name='payment' onChange={(e)=>(setpaymentMethod("Cod"))} />
        </div>
        <div className="online">
          Online  <input type="radio" required value={paymentMenthod} name='payment' onChange={(e)=>(setpaymentMethod("Online"))} />
        </div>

      </div>

      <button disabled= {btndisable} type="submit" > Place Order </button>
        </form>
        </main>

    </>


  )
}

export default OrderConfirm