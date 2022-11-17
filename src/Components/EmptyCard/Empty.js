import React from 'react'
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import "./EmptyCart.css"

const Empty = () => {


  return (
    <> 
    <div className="emptyCartSection">
     <div className="wapp">
        <div className="removeShopingCartIcon"> <RemoveShoppingCartIcon/></div>
        <div className="para-section">Cart is empty add somthing!</div>
     </div> 
    </div>

    </>
  )
}



export default Empty