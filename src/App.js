import axios from 'axios';
import { useState } from 'react';
import { boolean } from 'yup';
import './App.css';

function App() {
  const [userNameValue,setUserNameValue]=useState("");
  const [salary,setSalary]=useState("");
  const [getDetails,setGetDetails]=useState({});
  const [styleDiv,setStyleDiv]=useState('hide')

  function handleClick(){
    if(userNameValue ==="" || salary ===""){
      return alert("Both Fields are required");
    }
    const obj={
      UserName:userNameValue,
      Salary:salary
    }
    setUserNameValue("");
    setSalary("")
    axios.post('http://localhost:8080/addUserDetails',obj).then((response)=>{
      setGetDetails(response.data.userList)
      setStyleDiv('display')
    }).catch(err=>console.log(err))
  }

  return (
    <div id="form-layout">
      <div id="form-card">
        <label htmlFor="userName">User Name: </label>
        <input type="text" id="userName" placeholder='Enter Name' value={userNameValue} onChange={(e)=>{
          setUserNameValue(e.target.value,setStyleDiv('hide'))
        }}/>
        <div id="salaryfield">
        <label htmlFor="Salary">Salary: </label>
        <input type="text" id="Salary" placeholder='Enter Salary' value={salary} onChange={(e)=>{setSalary(e.target.value,setStyleDiv('hide'))}}/>
        </div>
        <button onClick={handleClick} id="btn">Get Tax Amount</button>
        <div id={styleDiv}>
          <div style={{marginTop:'15px'}}>Name: {getDetails.UserName}</div>
          <div style={{marginTop:'2px'}}>Salary: {getDetails.Salary}</div>
          <div style={{marginTop:'2px'}}>Tax Amount: {getDetails.Tax}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
