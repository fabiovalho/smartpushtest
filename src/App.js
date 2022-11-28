import './App.css';
import './GetData';
import Modal from './Modal';
import React, { useState, useEffect } from 'react';

function App() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [data, setData] = useState([]);

  const getData = () => {
      fetch('data.json'
      ,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
          }
      }
      )
        .then(function(response) {
          console.log(response)
          return response.json();
        })
        .then(function(myJson) {
          setData(myJson)
        });
    }
    useEffect(() => {
      getData()
    },[])

  return (
    <div className="App">
      <Modal show={handleShow}>
      </Modal>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>lastname</th>
            <th>firstname</th>
            <th>age</th>
            <th>city</th>
            <th>address</th>
          </tr>
        </thead>
        <tbody>
          {data.map(row =>
          <tr>
            {Object.values(row).map(key => <td>{key}</td>)}
          </tr>)}
        </tbody>
      </table>
    </div>
  );
}

export default App;
