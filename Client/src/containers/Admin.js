import React, {Component} from 'react';

class  AdminPage extends Component{
    constructor(props){
        super(props);
        this.state={data:null}
    }

    async componentDidMount(){
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        };
          //https://api.binance.com" might need this url in fetch instead of in proxy field inside package.json?
          await fetch('/admin/users/authed',requestOptions)
           .then(res=>res.json())
           .then(d=>{
               this.setState({data:d})
               return d
           })
           .then(data=>console.log(data))
        }
    listUsers(arr){
        let view=arr.map(d=><li><p>Email:{d.email}</p>ID: {d['_id']}<p></p></li>)
        return view
    }
   

    render(){
        return (
          <div>
            <h1>Only Admin should see this page</h1>
            <ol>{this.state.data?this.listUsers(this.state.data):null}</ol>
        </div>)
        }

    
}

export default AdminPage
