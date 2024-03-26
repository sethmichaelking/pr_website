import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Logos from './components/Logos';
import ValueProp from './components/ValueProp';
import Howitworks from './components/Howitworks'
import { AccordionFx } from './components/Accordion';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <div>
        <Nav/>
        <Hero/>
        <Logos/>
        <ValueProp/>
        <Howitworks/>
        <AccordionFx/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
