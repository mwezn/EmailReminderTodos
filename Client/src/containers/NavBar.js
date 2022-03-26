
import { AuthContext } from '../App'
import {useContext } from "react";






function Navigate(props){
  const  { dispatch } = useContext(AuthContext);
  
  return props.authed?(
    <nav className="navbar navbar-light bg-light">
      <ul className="navbar navbar-text navbar-expand-lg">
        <li className="navbar-brand"><a href="/" /*onClick={(e)=>e.preventDefault()}*/ >Home</a></li>
        <li className="navbar-brand"><a href="/completed">Complete</a></li>
        <li className="navbar-brand"><a href="/logout" onClick={()=>dispatch({type: "LOGOUT"})}>Logout</a></li>
      </ul>
    </nav>):(
      <nav className='navbar navbar-light bg-light'>
      <ul className="navbar navbar-light navbar-expand-lg">
        <li className="navbar-brand"><a href="/">Login</a></li>
        <li className="navbar-brand"><a href="/register">Register</a></li>
      </ul>
    </nav>
)
}



  export default Navigate
