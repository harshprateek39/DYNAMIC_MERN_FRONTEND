
import './App.css';
import Nav from './components/nav';   
import Home from './components/home';
import Feature from './components/feature';
import Contact from './components/contact';
import Footer from './components/footer';
import { BrowserRouter as Router,Routes, Route, } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from'react';
function App() {
  const [myData, setMyData] = useState({});
    
    const getApi=()=>{
        axios.get('https://dynamic-web-api.vercel.app/home')
      .then(res=>{
            console.log(res.data)
            setMyData(res.data);
        })
      .catch(err=>{
            console.log(err)
        })
    }
    useEffect(()=>{
    getApi();
    },[])
  const mystyle = {
    
    backgroundImage: "url(" + `${myData.img}` + ")",
    
    backgroundSize: "100vw 120vh"
  };
  return (
    <div className="App  " style={mystyle}>
     <Router>
     <Nav/>
    <Routes> 
       <Route path="/" element={<Home/>} />
       <Route path="/features" element={<Feature/>} />
       <Route path="/contact" element={<Contact/>} />
    </Routes>
    <Footer/>
       </Router>
       </div>
    
  );
}

export default App;
