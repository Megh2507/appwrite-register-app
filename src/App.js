// import logo from './logo.svg';
// import './App.css';
import React,{useEffect} from 'react'
import './App.css';
import Reactform from "./Components/Reactform";
import API from "./api/api"

function App() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async()=>{
    if(!localStorage.getItem("cookieFallback")){
      await API.account.createAnonymousSession();
      await API.account.updateName("anoname");
    }
  },[])
  return (
    <div className="App">
      <Reactform/>
    </div>
  );
}

export default App;
