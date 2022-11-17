import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navbar.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import Loding from "../LodingPage/Loding";
// import UserProfile from "../signUpAndLogin/SignUpAndLogin";
import LogoutIcon from '@mui/icons-material/Logout';


function NavBar() {
  const [Opencard, setOpencard] = useState(false);


  /* Close the drawer when the user clicks outside of it */
  

  const [openDrawer, toggleDrawer] = useState(false);
  const drawerRef = useRef(null);


  const { loginWithRedirect ,logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  const count = useSelector((state) => state.custom);


  useEffect(() => {
    const closeDrawer = (event) => {
      if (drawerRef.current && drawerRef.current.contains(event.target)) {
        return;
      }

      toggleDrawer(false);
    };

    document.addEventListener("mousedown", closeDrawer);

    return () => document.removeEventListener("mousedown", closeDrawer);
    
  }, []);



  return   (
    
    <div className="cover">
      <Navbar.Wrapper>
        <Navbar.Logo>
          <Link className="link" to="/">
            <img src="/imgs/logos/logo2.png" alt="loding.." />
          </Link>
        </Navbar.Logo>
        <div className="resCart">
          <Link to={"/cart"}>
            <div className="cart-items">
              <div className="cart-items-section">
                <ShoppingCartIcon />
                <span className="cart-length-Number">{count.length}</span>
              </div>
            </div>
          </Link>
        </div>
        <HamburgerButton.Wrapper onClick={() => toggleDrawer(true)}>
          <HamburgerButton.Lines />
        </HamburgerButton.Wrapper>

        <Navbar.Items ref={drawerRef} openDrawer={openDrawer}>
          <Navbar.Item>
            <Link className="link" to={"/"}>
              <h4 className="home-section ">Home </h4>
            </Link>
          </Navbar.Item>
          <Navbar.Item>
            <Link className="link" to={"/About"}>
              <h4 className="about-section">About</h4>
            </Link>
          </Navbar.Item>
          <Navbar.Item>
            <div className="profileSection"     >
              {isAuthenticated ? (
                <div className="user-avtar"   onClick={() => setOpencard (!Opencard)} >
                  <img src={user.picture} alt={user.name} />
                </div>
              ) : (
                <div className="login-section">
                  <button className="login-btn" onClick={() => loginWithRedirect()}> <h4>Login</h4></button>
                </div>
              )}
                
              
            </div>
          </Navbar.Item>
          <Navbar.Item>
            <Link to={"/cart"}>
              <div className="cart-items">
                <div className="cart-items-section">
                  <ShoppingCartIcon />
                  <span className="cart-length-Number">{count.length}</span>
                </div>
              </div>
            </Link>
          </Navbar.Item>
        </Navbar.Items>
      </Navbar.Wrapper>

      <div className={`Profilecard ${Opencard ? 'active' : 'inactive'} ` } >
       
       <div className="EmailAndName">
     {  isAuthenticated && (
      <div className='Email-List'>
        <img src={user.picture} alt={user.name} />
        <h2 className='user-name'>{user.name}</h2>
      </div>
    )}
       </div>
     
     <div className="logout" onClick={() => logout({ returnTo: window.location.origin })}>
       <LogoutIcon/> <button >
      Log Out
    </button>
     </div>
     </div>
      
    </div>
    
  );
}

//Styled Components

const Navbar = {
  Wrapper: styled.nav`
    padding: 1rem 3rem;
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ff6d3c;
    box-shadow: 0 0.75rem 0.5rem -0.5rem rgba(0, 0, 0, 0.2);
    z-index: 999;
    position: fixed;
    top: 0;
    //40em == 640px
    @media only screen and (max-width: 40em) {
      z-index: 2;
      width: 100vw;
      top: 0;
    }
  `,

  Logo: styled.h1`
    position: relative;
    top: 5px;
    padding: 0 1rem 0 0;
  `,

  Items: styled.ul`
    display: flex;
    list-style: none;

    a {
      font-size: 1.2rem;
      text-transform: uppercase;
      text-decoration: none;
      color: #fff;
    }

    @media only screen and (max-width: 40em) {
      position: fixed;
      right: 0;
      top: 0;
      color: white;
      height: 100%;
      color: white;
      flex-direction: column;
      background-color: rgb(37, 32, 32);
      padding: 1rem 2rem;
      transition: 0.2s ease-out;
      z-index: 999;

      transform: ${({ openDrawer }) =>
        openDrawer ? `translateX(0)` : `translateX(100%)`};
    }
  `,

  Item: styled.li`
    position: relative;
    top: 5px;
    padding: 0 1rem;
    cursor: pointer;
    color: white;
    margin-right: 2rem;

    @media only screen and (max-width: 40em) {
      padding: 1rem 0;
      margin-top: 2rem;
    }
  `,
};

const HamburgerButton = {
  Wrapper: styled.button`
    height: 3rem;
    width: 3rem;
    position: relative;
    font-size: 12px;

    display: none;

    @media only screen and (max-width: 40em) {
      display: block;
    }

    /* Remove default button styles */
    border: none;
    background: transparent;
    outline: none;

    cursor: pointer;

    &:after {
      content: "";
      display: block;
      position: absolute;
      height: 150%;
      width: 150%;
      top: -25%;
      left: -25px;
    }
  `,

  Lines: styled.div`
    top: 50%;
    margin-top: -0.125em;

    &,
    &:after,
    &:before {
      height: 2px;
      pointer-events: none;
      display: block;
      content: "";
      width: 100%;
      background-color: #000000;
      position: absolute;
    }

    &:after {
      /* Move bottom line below center line */
      top: -0.8rem;
    }

    &:before {
      /* Move top line on top of center line */
      top: 0.8rem;
    }
  `,
};

export default NavBar;

// const Navbar = ({ isAuthenticated = false }) => {
//   const count = useSelector((state) => state.custom);
//   return (
//     <>
//       <div className="navbar">
//         <div className="logo-section">
//           <img src="/imgs/logos/logo2.png" alt="loding.." />
//         </div>

//         <div className="nav-box">
//           <Link to={"/"}>
//             <h4 className="home-section ">Home </h4>
//           </Link>
//           <Link to={"/About"}>
//             <h4 className="about-section">About</h4>
//           </Link>
//           <Link to={isAuthenticated ? "/me" : "/SignUpAndLogin"}>
//             {isAuthenticated ? (
//               <Avatar
//                 sx={{ width: 25, height: 25, bgcolor: deepPurple[500] }}
//               ></Avatar>
//             ) : (
//               <div className="login-section">
//                 <Avatar
//                   sx={{ width: 25, height: 25, bgcolor: pink[600] }}
//                 ></Avatar>
//               </div>
//             )}
//           </Link>
//           <Link to={"/cart"}>
//             <div className="cart-items">
//               <div className="cart-items-section">
//                 <ShoppingCartIcon />
//                 <span className="cart-length-Number">{count.length}</span>
//               </div>
//             </div>
//           </Link>
//         </div>

//       </div>

//       <div className="burger-btn">
//         <div className ="center">
//   <div></div>
// </div></div>
//     </>
//   );
// };

// export default Navbar;
