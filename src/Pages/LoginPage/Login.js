import React, { useState } from "react";
import "./Login.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { user } from "../../Api/Url";
import { Navigate } from "react-router-dom";
import { useToast,toast } from '@chakra-ui/react'
function Login() {
  const toast = useToast()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function errorToast(data){
   return toast({
      title: data,
      status: 'error',
      duration: 2000,
      isClosable: true,
    })
  }
  const signIn = () => {
    
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    fetch(`${user}/?email=${email}`).then((res)=>{
      res.json().then((res)=>{
        if(res.length>0){
          if(res.password==password){
           
          }
        }
        else{
          errorToast("please create Account first");
        }
      })
    })
  };

  const registerSignIn = (e) => {
    e.preventDefault();
     <Navigate to={'/signin'}/>
  };
  return (
    <div className="login">
      <div className="login__container">
        <div className="login__logo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjGZVurt8r1so9YWuK5gV3pIVuhxgzg-dvUhm4bdcUAaMZPNpu9PI9KzWPGPDB7HqUHw&usqp=CAU"
            alt=""
          />
        </div>
        <div className="login__desc">
          <p>A Place to Share knowledge and better understand the world</p>
          
        </div>
        <div className="login__auth">
          <div className="login__authOptions">
            <div className="login__authOption">
              <img
                className="login__googleAuth"
                src="https://media-public.canva.com/MADnBiAubGA/3/screen.svg"
                alt=""
              />
              <p 
              // onClick={signIn}
              >Continue With Google</p>
            </div>
            <div className="login__authOption">
              <img
                className="login__googleAuth"
                src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo-500x350.png"
                alt=""
              />
              <span>Continue With Facebook</span>
            </div>
            <div className="login__authDesc">
              <p>
                <span style={{ color: "blue", cursor: "pointer" }}>
                  Sign Up With Email
                </span>
                . By continuing you indicate that you have read and agree to
                Quora's
                <span style={{ color: "blue", cursor: "pointer" }}>
                  Terms of Service{" "}
                </span>
                and{" "}
                <span style={{ color: "blue", cursor: "pointer" }}>
                  Privacy Policy
                </span>
                .
              </p>
            </div>
          </div>
          <div className="login__emailPass">
            <div className="login__label">
              <h4>Login</h4>
            </div>
            <div className="login__inputFields">
              <div className="login__inputField">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  placeholder="Email"
                />
              </div>
              <div className="login__inputField">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="login__forgButt">
              <small>Forgot Password?</small>
              <button onClick={handleSignIn}>Login</button>
            </div>
            <button onClick={registerSignIn}>Register</button>
          </div>
        </div>
        <div className="login__lang">
          <p>हिन्दी</p>
         
          <ArrowForwardIcon/>
        </div>
        <div className="login__footer">
          <p>About</p>
          <p>Languages</p>
          <p>Careers</p>
          <p>Businesses</p>
          <p>Privacy</p>
          <p>Terms</p>
          <p>Contact</p>
          <p>&copy; Quora Fake Inc. 2021</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
