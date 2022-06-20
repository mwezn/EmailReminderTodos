
import { AuthContext } from '../App'
import {useContext } from "react";






function Navigate(props){
  const  { dispatch } = useContext(AuthContext);

 

  async function removeAccount(e) {
    let conf=window.confirm("Are you sure you want to delete your account?");
    if (conf) {
      e.preventDefault()
      let id=JSON.parse(localStorage.getItem('user'));
      console.log(id, id['email'], id['_id'])
      
    try {
       const options = {
          method: 'DELETE',
          /* body: JSON.stringify({
             id: id['_id'] 
          }), */
          headers: {
             'Content-Type': 'application/json'
          }
       }
       await fetch(`/${id['_id']}`, options)
       localStorage.clear();
       window.location.href='/remove';
 
   } catch (err) {
       console.warn(err);
   }
  }
}
 
  
  return props.authed?(
    <nav className="navbar navbar-light bg-light">
      <ul className="navbar navbar-text navbar-expand-lg">
        <li className="navbar-brand"><a href="/" /*onClick={(e)=>e.preventDefault()}*/ >Home</a></li>
        <li className="navbar-brand"><a href="/completed">Complete</a></li>
        <li className="navbar-brand"><a href="/logout" onClick={()=>dispatch({type: "LOGOUT"})}>Logout</a></li>
        <li className="navbar-brand"><a href="/remove" onClick={(e)=>removeAccount(e)}>Delete account</a></li>
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
