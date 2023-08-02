//import logo from './logo.svg';
//import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Title from './components/title';
import Renders from './components/renders'
import Contacts from './components/contacts';
import TitlePicture from './components/title_picture';

function App() {
  const testFunction = async () => {
    const response = await  fetch('/test_route');
    
  }
  testFunction()
  return (
    <div className="App">
      <TitlePicture/>
      <Title/>
      <Renders/>
      <Contacts/>
    </div>
  );
}

export default App;