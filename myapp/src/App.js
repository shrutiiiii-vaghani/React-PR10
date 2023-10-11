import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const[record,setRecord] = useState([]);
  const[second,setSecond] = useState([]);

  useEffect(()=>{
    fetch(`https://dummyjson.com/quotes`)
    .then(res => res.json())
    .then(data => setRecord(data.quotes))
    .catch(err => console.log(err));
  },[])

  useEffect(()=>{
    axios.get(`https://dummyjson.com/todos`)
    .then((res)=>{
      setSecond(res.data.todos);
    }).catch((err)=>{
      console.log(err);
      return false;
    })
  },[])

  return (
   <body style={{backgroundImage:"url('https://images.pexels.com/photos/922353/pexels-photo-922353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
     <center>
      <h1 style={{color:"black"}}>Fetch API</h1>
      <div className='container'>
      <table border={2} class="table table-dark table-striped">
       <thead>
          <tr style={{textAlign:"center",color:"white",backgroundColor:"#212529"}}>
              <td>Id</td>
              <td>Quote</td>
              <td>Author</td>
            </tr>
       </thead>
        <tbody>
          {
            record.map((val)=>{
              return(
                <tr>
                  <td>{val.id}</td>
                  <td>{val.quote}</td>
                  <td>{val.author}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      </div>
      <br></br>
      <h1 style={{color:"black"}}>Axios API</h1>
      <div className='container'>
      <table border={1} class="table table-dark table-striped">
        <thead>
          <tr style={{textAlign:"center"}}>
            <td>Id</td>
            <td>Todos</td>
            <td>Userid</td>
          </tr>
        </thead>
        <tbody>
          {
            second.map((val)=>{
              return(
                <tr>
                  <td>{val.id}</td>
                  <td>{val.todo}</td>
                  <td>{val.userId}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      </div>
    </center>
   </body>
  );
}

export default App;
