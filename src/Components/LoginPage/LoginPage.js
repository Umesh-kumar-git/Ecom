import React,{useEffect} from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import Loding from '../LodingPage/Loding';



const LoginPage = () => {

    const { loginWithRedirect,isLoading} = useAuth0();
    

useEffect(() => {
  
    loginWithRedirect()
  
}, [loginWithRedirect()])

return(
    <>
    <div className="LoginPage" style={{width:'100%',height:'100vh'}}>
         {isLoading&&<Loding/>}
    </div>
    </>
)
}

export default LoginPage