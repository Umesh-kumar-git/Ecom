import React from 'react';
import '../src/App.css'
import Home from './Components/home/home';
import {BrowserRouter,
  Routes,
  Route} from "react-router-dom";
import CartSection from './Components/CartSection/CartSection';
import ProductsDetails from './Components/Productsdetails/ProductsDetails';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import ProductdetailsData from './Components/Productsdetails/ProductdetailsData';
import ScrollToTop from './Components/scrollRestoration/ScrollRestoration';
import ErrorPage from './Components/ErrorPage 404/ErrorPage';
import ShippingInfo from './Components/ShippingInfo/Shippping';
import { useAuth0 } from "@auth0/auth0-react";
import LoginPage from './Components/LoginPage/LoginPage';
import Protected from './Components/ProtectedRoutes/Protected';
import Profile from './Components/Profile/Profile';
import OrderConfirm from './Components/OderConfirm/OrderConfirm';
import ConfirmationPage from './Components/OderConfirm/ConfirmationPage';

function App() {



  const { isAuthenticated } = useAuth0();


   
  return (
   <>
   <BrowserRouter>
   <NavBar/>
     <ScrollToTop/>
   <Routes onUpdate={() => window.scrollTo(0, 0)}>


    <Route path="/" element={<Home/>}/>
    <Route path="/cart" element={<CartSection/>}/>
    <Route path="/ProductsDetails" element={<ProductsDetails/>}/>  
    <Route    element={<Protected isAuthenticated={isAuthenticated}/>}>
    <Route path="/ShippingInfo" element={ <ShippingInfo/>}/>
    <Route path="/profile" element={ <Profile/>}/>
    <Route path="/orderconfirm" element={<OrderConfirm/>}/>
    <Route path='/confirmation' element={<ConfirmationPage/>}/>
    </Route>
    <Route path="/ProductdetailsData/:ProductId" element={<ProductdetailsData/>}/>
    <Route path="/login" element={< LoginPage/>}/>
    <Route path='*' element ={<ErrorPage/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter> 
   </>
  );
}

export default App;
