import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";
/*
const send = event => {
  //const data = new FormData();
  //data.append("name", name);
  //data.append("file", file);

  Axios.post("http://localhost:8080/file-upload", {
value:"test"
  })
    //.then(res => console.log(res))
    //.catch(err => console.log(err));
};*/
function App() {
  /*const [name, setName] = useState();
  const [file, setFile] = useState();*/
  const[file,setFile]=useState(null);
  const send = () => {
    console.log("handle info working")
    Axios.post("http://localhost:8080/file-upload", file)}

        const getFileInfo=(e)=>{
          console.log("File info working")
          console.log(e.target.files[0]);
          const formData = new FormData();
          formData.append("file",e.target.files[0],e.target.files[0].name );
          setFile(formData);
        }
      
        const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
    .then((res) => res.json())
    .then((data) => setData(data.message));
      
  }, []);
  const bname = {
    name: this.state.name
  }
  const handleChange = (event) =>{
    this.setState({ name: event.target.value});
    
  };

  const createb = () => {
    Axios.post("http://localhost:8080/create-bucket",{bname})
  }
  const deleteb = () => {
    Axios.post("http://localhost:8080/delete-bucket", {bname})

  }
  const listb = () => {
    Axios.post("http://localhost:8080/list-bucket")

  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>AWS S3 BUCKET MANAGEMENT SYSTEM</h1>
      <div className="flex-container">

<div className="flex-child" id="console">
  <h2>S3 Bucket Control</h2>
  <hr/>
  
  <form action="#">
          <div className="flex">
            <label htmlFor="name" className="name">Bucket Name</label>
            <input type="text" className="textip"onChange= {this.handleChange} />
            <br/>            
          </div>
          <br/><br/>
          <div className="bbtn">
            <button className="bfn" onClick={createb}> Create BUCKET</button>
            <button className="bfn"onClick={deleteb}> Delete BUCKET</button>
            <button className="bfn"onClick={listb}>List BUCKETS</button>
            </div>
        </form>
        <br/> 
        <div className="flex">
            <label htmlFor="file">HTML File</label>
            <input type="file" id="file" onChange={getFileInfo}               />
          </div>
          <br/>
        <div className="btn"><button onClick={send}>Send</button></div>
        
</div>

<div className="flex-child" id="op">
<h2>OUTPUT</h2>
<hr/>
<br/> 
  <p>{!data ? "Loading..." : data} </p>
</div>
</div>
  
      </header>
      <h6>Footer</h6>
    </div>
  );
}

export default App;