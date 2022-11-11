import React, {Component} from 'react';

class  AdminPage extends Component{

    async componentDidMount(){
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        };
          //https://api.binance.com" might need this url in fetch instead of in proxy field inside package.json?
          await fetch('/admin/users/authed',requestOptions)
           .then(res=>res.json())
           .then(data=>console.log(data))
        }

    render(){
        return (
          <div>
            <h1>Only Admin should see this page</h1>
            <h2>Next step is to only view registered emails/total users
                Not their personal details aswell
            </h2>
        </div>)
        }

    
}

export default AdminPage
