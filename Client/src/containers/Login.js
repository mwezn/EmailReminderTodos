import {React, useState, useContext} from "react";
import { AuthContext } from '../App'
import './login.css'


export default function Login() {
  
  const [loginCredentials, setParams] = useState({email: "", password: "", emailExist:null, passCorrect: null,error:null});
  const  { dispatch } = useContext(AuthContext);
  



  

  async function handleSubmit(event) {
    event.preventDefault();
    const requestOptions = {
      method: 'POST',
      //mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'React POST Request Example',data: loginCredentials})
  };
  
  fetch('/login',requestOptions) //<--This needs changing to /login
     .then(res => {
       if (res.status===401) {
        const newObj={passCorrect: false}
        setParams(oldObj=>{ return {...oldObj, ...newObj}})
      }
      else if(res.status===400){
        const newObj={emailExist: false}
        setParams(oldObj=>{return {...oldObj, ...newObj}})
      }
      return res.json()
    })
    .then(resJSON=>{
      console.log(resJSON)
      dispatch({type: "LOGIN", payload: resJSON})
    })

  
  }
  

  
  function enterEmail(e){
    const newObj={email:e.target.value}
    setParams(oldObj=>{
        return {...oldObj,...newObj}
    })
    
  }
  function enterPassword(e){
    const newObj={password:e.target.value}
    setParams(oldObj=>{
        return {...oldObj,...newObj}
    })
    
  }



  return (
    <div className="login">
    <div className="loginCard">
    <form id="loginCardItems" className="form-control" onSubmit={(e)=>handleSubmit(e)} method="post">
        <label for="email">Email:</label><br></br>
        <input type="email" name="email" placeholder="Enter Email" onChange={(e)=>enterEmail(e)} required></input><br></br>
        <label for="pass">Password:</label><br></br>
        <input type="password" name="pass" placeholder="Enter Password" onChange={(e)=>enterPassword(e)} required></input><br></br>
        <button className="btn btn-primary">Login</button>
    </form>
    <div><a id="noacc" href="/register"> Don't have an account?</a></div> 
    <div><h1>{loginCredentials.emailExist===false?<p className="emailTaken">Email doesn't exist</p>:loginCredentials.passCorrect===false?<p className="emailTaken">Wrong Password</p>:loginCredentials.error===true?<p className="emailTaken">Server error</p>:null}</h1></div>
    </div>
    </div>
    
  );
  };
