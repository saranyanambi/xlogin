import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const [isvalid,setIsvalid]=useState(false);
  const [error,setError]=useState("")

  const handlename=(e)=>{
    setUsername(e.target.value)
  }

  const handlepassword=(e)=>{
    setPassword(e.target.value)
  }
  const handlesubmit=(e)=>{
    e.preventDefault();

    if(username==="user" && password==="password")
    {
      setIsvalid(true)
    }
    else{
      setError("Invalid username or password")
    }
  }
  return (
    <div className="App">
      {isvalid ? (<><p>Welcome, {username}!</p></>)
      :(
        <>
       <h1>Login Page</h1>
      <p>{error}</p> 
       <form onSubmit={(e)=>handlesubmit(e)}>
       <label for="name">Username:</label>
       <input required type="text" placeholder="username" id="name" name="name" value={username} onChange={(e)=>handlename(e)}/>
       <br/>
       <label for="name">Password:</label>
       <input required type="password" placeholder="password" id="name" name="name" value={password} onChange={(e)=>handlepassword(e)}/>
       <br/>
       <button type="submit">Submit</button>
       </form>
       </>
)}
    </div>
  );
}

export default App;
