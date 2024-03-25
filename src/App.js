import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Logos from './components/Logos';
import ValueProp from './components/ValueProp';

function App() {
  return (
    <div className="App">
      <div>
        <Nav/>
        <Hero/>
        <Logos/>
        <ValueProp/>
      </div>
    </div>
  );
}

export default App;
