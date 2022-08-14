import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";
//import { FaGithub } from "@react-i";


function App() {
  const [changeA, setChangeA] = useState('')
 // const [site, setSite] = useState('')
  const [data, setData] = useState('')
  const [file, setFile] = useState(null);
  //const [bname, setBname] = useState('')
    const getFileInfo = (e) => {
    const formData = new FormData();
    formData.append("file", e.target.files[0], e.target.files[0].name);
    setFile(formData);
  }
  useEffect(()=>{
if(changeA===true){
  const send = () => {
    console.log("handle info working")
    Axios.post("http://localhost:8080/file-upload", file)
  }
  send();
  fetch("/file-upload")
    .then((res) => res.json())
    .then((data) => setData(data.message))
     return setChangeA(false);
}
  },[changeA])
 
  return (
    <div className="App">
      <header className="App-header">
        <h1>STATIC WEBSITE DEPLOYMENT</h1>
        <div className="flex-container">

          <div className="flex-child" id="console">
            <h2>WEBSITE DEPLOYMENT</h2>
            <hr />
              <div className="flex">
                <div className="txt">
                NOTE:
                <br/>- Make sure the CSS is inline not external.
                <br/>- The name of the HTML file is supposed to be '<i> index </i>' only.
                <br/>- The extension for the HTML file is supposed to be '<i> .html </i>' .
                <br/>- Uploading the file more than once will result in replacing the recent file with existing or previously deployed website.
                </div>
              </div>
            <br />
            <div className="flex">
              <label htmlFor="file">HTML File</label>
              <input type="file" id="file" onChange={getFileInfo}  />
            </div>
            <br />
            <div className="btn"><button onClick={()=>{setChangeA(true)}}>DEPLOY</button></div>

          </div>

          <div className="flex-child" id="op">
            <h2>STATUS</h2>
            <hr />
            <br />
            <p>{!data? "Loading..." : data } </p>
            <br/>
            {!data? "" : <center><a href="https://test-awss3-bucket-9.s3.amazonaws.com/index.html"  target="_blank"><button className='linkbtn'>Click here to view the deployment!</button></a></center>}
          </div>
        </div>

      </header>
      <h6>© 2022 Copyright : Designed & Developed by <a href="https://github.com/AmimaShifa" target="_blank">Amima Shifa </a></h6>
    </div>
  );
}

export default App