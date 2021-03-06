//This is the functional component definition 
//Its needed in order to use react hooks 
import React from 'react';

import { AuthContext } from '../App'
import './todo.css'




const initialState = {
  userInput: "", toDoList: [], vis: [],
  greentick: []
}

function inputValidator(arr) {
  var Regex = /^[a-zA-Z0-9_]+$/g
  var result = arr.some(e => Regex.test(e));
  return result
}





function TimePicker(props) {
  var curr = new Date();
  //var t = curr.toISOString(); this doesnt account for BST/GMT +1!!
  //I changed it to LocaleTimeString as below
  var t = curr.toLocaleTimeString()
  return (
    <div className="timeSelect"><label>Set Time:</label>
      <input type="time" id="appt" name="appt"
         onChange={props.onChange} defaultValue={t.slice(0, 5)} required></input></div>)
}

function Calendar(props) {

  var curr = new Date();
  var dt = curr.toISOString().substr(0, 10);
  var tt = curr.toLocaleTimeString().slice(0, 5);
  let [timeline, setTime] = React.useState({ date: dt, time: tt, todo: props.item });

  function handleTime(e) {
    const newObj = { time: e.target.value }
    console.log(newObj)
    setTime(oldObj => {
      return { ...oldObj, ...newObj }
    })
  }

  function handleDate(e) {
    const newObj = { date: e.target.value }
    setTime(oldObj => {
      return { ...oldObj, ...newObj }
    })
  }
  return (<div className={props.style2 || props.style}>
    <label >Enter deadline:</label>
    <input type="date" id="start" onChange={(e) => handleDate(e)} defaultValue={dt} name="trip-start"

      min="2020-01-01" max="2099-12-31"></input><TimePicker onChange={(e) => handleTime(e)} /><button id="setReminder" className={props.submitStyle} onClick={props.onClick} value={JSON.stringify(timeline)}>Set Reminder</button></div>)

}



function MyToDoComp(props) {
  const [AppState, setParams] = React.useState({ userInput: "", toDoList: [], serverList: [], vis: [], greentick: [] });
  const { dispatch } = React.useContext(AuthContext);


  function clear() {
    setParams(old => { return { ...old, ...initialState } })
  }

  function setTime(e) {
    AppState.vis.splice(e, 1, !AppState.vis[e])
    setParams(old => {
      return { ...old, ...AppState.vis }
    })

  }

  function handleSubmit() {

    const itemsArray = AppState.userInput.split(',');
    if (itemsArray[itemsArray.length - 1] === "") itemsArray.pop()
    let visi = []
    for (let i = 0; i < itemsArray.length; i++) {
      visi.push(true);
      AppState.greentick.push(false)
    }
    let newObj = { toDoList: itemsArray, vis: visi }
    console.log(newObj)
    setParams(old => {
      return { ...old, ...newObj }

    })

  }
  function handleChange(e) {
    let newO = { userInput: e.target.value }
    console.log(newO)
    setParams(old => {
      return { ...old, ...newO }
    });
    console.log(AppState)
  }
  function removeOverdue(i) {
    console.log(AppState)
    let newObj = { ...props.user }
    let item = newObj.overdue.splice(i, 1)
    console.log(item)
    const requestOptions = {
      method: 'POST',
      //mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: newObj, Item: item })
    }

    fetch('/removeOverdue', requestOptions)
      .then(res => { return res.json() })
      .then(resJSON => dispatch({ type: "SETREMINDER", payload: resJSON }))
  }


  function removeReminder(i) {
    console.log(AppState)
    let newObj = { ...props.user }
    let item = newObj.log.splice(i, 1)
    console.log(item)
    const requestOptions = {
      method: 'POST',
      //mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: newObj, Item: item })
    }

    fetch('/removeTodo', requestOptions)
      .then(res => { return res.json() })
      //.then(resJSON=>console.log(resJSON))
      .then(resJSON => dispatch({ type: "SETREMINDER", payload: resJSON }))
  }

  function dueDone(i) {
    console.log(AppState)
    let newObj = { ...props.user }
    let item = newObj.log.splice(i, 1)
    console.log(item)
    const requestOptions = {
      method: 'POST',
      //mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: newObj, Item: item })
    }

    fetch('/dueDone', requestOptions)
      .then(res => { return res.json() })
      //.then(resJSON=>console.log(resJSON))
      .then(resJSON => dispatch({ type: "SETREMINDER", payload: resJSON }))
  }
  function overdueDone(i) {
    console.log(AppState)
    let newObj = { ...props.user }
    let item = newObj.overdue.splice(i, 1)
    console.log(item)
    const requestOptions = {
      method: 'POST',
      //mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: newObj, Item: item })
    }

    fetch('/overdueDone', requestOptions)
      .then(res => { return res.json() })
      //.then(resJSON=>console.log(resJSON))
      .then(resJSON => dispatch({ type: "SETREMINDER", payload: resJSON }))
  }

  function submitToServer(e, index) {
    let obj = JSON.parse(e.target.value)
    
    AppState.greentick.splice(index, 1, !AppState.greentick[index])
    setParams(old => {
      console.log(old, obj)
      console.log({ ...old, obj })

      return { ...old, obj }
    })



    let newObj = { ...props.user };
    newObj.log.push(obj)
    console.log(newObj)


    const requestOptions = {
      method: 'POST',
      //mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: newObj })
    }


    fetch('/addTodo', requestOptions)
      .then(res => { return res.json() })
      .then(resJSON=>{
        console.log(resJSON)
        return resJSON
      })
      .then(resJSON => dispatch({ type: "SETREMINDER", payload: resJSON }))

  }
  function addItems(){
    let ta=document.getElementById('textArea')
    console.log(ta)
    ta.classList.toggle('active')
  }


  //console.log(props.user)
  const items = !inputValidator(AppState.toDoList) && AppState.toDoList.length === 0 ? <h1>Enter your tasks separated by commas</h1> : AppState.toDoList.map((d, index) => d === "" ? null : <div key={index}><li className="btn1" key={index}>{d}<span onClick={() => setTime(index)} className={AppState.greentick[index] ? "clock2" : "clock"}>&#128337;</span><span className={AppState.greentick[index] ? "greenTick1" : "greenTick2"}>&#9989;</span></li><Calendar onClick={(e) => { submitToServer(e, index) }} item={d} style={AppState.vis[index] ? "calendar1" : "calendar2"} style2={AppState.greentick[index] ? "calendar2" : "calendar1"} submitStyle={AppState.greentick[index] ? "submitted" : "notsubmitted"} /></div>)
  const items2 = props.user.overdue.map((d, i) => <li className="row overdueitems" key={i}>{`Task:${d.todo}, date: ${d.date}, time:${d.time}`}<span className="close" onClick={() => removeOverdue(i)} >X<span class="tooltiptext">Delete Reminder?</span></span><span className="done" onClick={() => overdueDone(i)} >&#9989;<span class="tooltiptext">Complete?</span></span></li>)
  const items3 = props.user.log.map((d, i) => <li className="row listitems" key={i}>{`Task:${d.todo}, date: ${d.date}, time:${d.time}`}<span className="close" onClick={() => removeReminder(i)} >X<span class="tooltiptext">Delete Reminder?</span></span><span className="done" onClick={() => dueDone(i)} >&#9989;<span class="tooltiptext">Complete?</span></span></li>)
  
  return (

    <div className="container">
      
      <h1 className='card text-center border-primary mb-3'>Hello {props.user.username} here's your "To Do" List:</h1>
      
      <div>
      <div className='card text-center'><h2>Your overdue Tasks:</h2><ul>{items2}</ul></div>
      <div className="card text-center"><h2>You will be emailed the following reminders:</h2><ul>{items3}</ul></div>
      </div>
      <button onClick={()=>addItems()}>+ Items</button>
      <div id="textArea">
      <div id="card"><ul>{items}</ul></div>
      <div>
      <textarea
        onChange={(e) => handleChange(e)}
        value={AppState.userInput}

        placeholder='Separate Tasks With Commas'
      />
      </div>
      <br />
      <button className="btn btn-primary" onClick={() => handleSubmit()}>Create List</button>
      <button className="btn btn-danger" onClick={() => clear()}>Clear List</button>
      </div>
      



    </div>
  );
}



export default MyToDoComp;
