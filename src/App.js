//import logo from './logo.svg';
//import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Outlet/>
    </div>
  );
}

export default App;