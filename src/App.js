import './App.css';
import './provider/GetData';
import Modal from './components/Modal';
import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';

function App() {

  const [show, setShow] = useState(false);
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
      <SearchBar data={data}/>
    </div>
  );
}

export default App;
