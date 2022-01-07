
import axios from "axios";
import React from "react";
import { useState } from "react";
export default function App()
{
  return (
    <div>
      <MyComponent />
    </div>
  );
}






function MyComponent() {


const [name, setUsername] = useState("");
const[password, setUserpassword  ]=useState("");
const[email, setUseremail  ]=useState("");
const [mobile_no, setUsermobile] = useState("");
const [list, setList] = useState([]);


const handleUsername =(e)=>{
    setUsername(e.target.value);
  }
  const handlePassword =(e)=>{
    setUserpassword(e.target.value);
}
const handleUseremail =(e)=>{
  setUseremail(e.target.value);
}

const handleUsermobile =(e)=>{
  setUsermobile(e.target.value);
}

const addUser = async () => {
 

  const url = "http://localhost:4000/add-user";
  const data = {
    name: name,
    password: password,
    email:email,
    mobile_no:mobile_no
  };

  // AJAX using AXIOS
  await axios.post(url, data);

  const newList = [data, ...list];
  setList(newList);

  setUsername("");
  setUserpassword("");
  setUseremail("");
  setUsermobile("");

};

  
  const getUser = async () => {
  const url = "http://localhost:4000/users";
  const result = await fetch(url);
  const list = await result.json();

  const newList = [...list];
  setList(newList);
};
  return <div>
    <div className="container-fluid bg-danger">
      <div className="row">
        <div className="col text-center bg-warning">
  <h1>User Registration</h1>
    <div>
      <input type="text" name="" id="" value={name} onChange={handleUsername} />
    </div>
    <div>
      <input type="text" name="" id="" value={password} onChange={handlePassword} />
    </div>
    <div>
      <input type="text" name="" id="" value={email} onChange={handleUseremail} />
    </div>
    <div>
      <input type="text" name="" id="" value={mobile_no} onChange={handleUsermobile} />
    </div>
    <div>
      <input type="button" value="Register" onClick={addUser} />
        <input type="button" value="users" onClick={getUser} /></div>

      <h3 className="bg-dark text-light mt-1 p-3">User List</h3>

      {list.map((item, index) => (
        <div key={index} className="alert alert-secondary fs-4">
          {item.name} {item.password} {item.mobile_no} {item.email}
        </div>
      ))}
        </div>
     
        </div>
      </div>
    
    </div>








  
  
}