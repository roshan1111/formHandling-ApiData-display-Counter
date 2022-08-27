import Apidatas from './Apidatas';
import './App.css';
import Form from './components/Form';
import Game from './components/Game';

function App() {
const userData = (value)=>{
return value;

}

  return (
    <>
    <nav>
      <h1>Roshan's App:</h1>
    </nav>
    <Game/>
    <Form userData = {userData}/>
    <div className="apidatas">
    <Apidatas/>
    </div>
    
    
    </>
  );
}

export default App;
