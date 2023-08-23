//import logo from './logo.svg';
//import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import FunnyGoat from './components/funny_goat';
import Card from './components/website_card';
import Contacts from './components/contacts';

function App() {
  const testFunction = async () => {
    const response = await  fetch('/test_route');
    
  }
  testFunction()
  return (
    <div className="App">
      <div className='background_color'></div>
      <FunnyGoat/>
      <div className='card_wrap'>
        <Card/>
      </div>
      <Contacts/>
    </div>
  );
}

export default App;