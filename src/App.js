//import logo from './logo.svg';
//import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Navbar from './components/navbar';
import FunnyGoat from './components/funny_goat';
import Card from './components/website_card';
import Contacts from './components/contacts';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='card_wrap'>
        <Card/>
      </div>
      <FunnyGoat/>
      <Contacts/>
    </div>
  );
}

export default App;