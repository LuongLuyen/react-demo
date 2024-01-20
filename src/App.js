import './App.css';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  const [data, setData] = useState()
  const [server, setServer] = useState([])
  console.log(server[0])
  
  useEffect(()=>{
    const fetchData = async()=>{
      const res = await axios.get("https://server-97i3.onrender.com/api/posts/film")
      setServer(res.data)
    }
    fetchData()
  },[])
  const sendData = async()=>{
    try {
      await axios.post("",{dataClient: data})
      setData('')
    } catch (error) {
      return null
    }
  }
  const handleInput = (e)=>{
    setData(e.target.value)
  }
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <div>server</div>
          {server.map((x)=>(
            <div key={x._id}>
             <img src ={x.img} alt='img'/>
             <div>{x.name}</div>
            </div>
          ))}
        </div>
        <div>Client</div>
        <input value={data} onChange={handleInput}/>
        <div onClick={sendData}>sendData</div>
      </header>
    </div>
  );
}

export default App;
