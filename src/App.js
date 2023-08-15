import './App.css';
import Aut from './Components/Aut/Aut';
import Client from './Components/Client/Client';
import Degre from './Components/Degre/Degre';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Portofolio from './Components/Protofolio/Portofolio';
import Services from './Components/Services/Services';
import Works from './Components/Works/Works';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Home />
   
    <Services/>
    <Degre/>
    <Works></Works>
    <Portofolio/>
    <Client/>
    <Aut/>
    <Footer/>
      
    </>
  );
}

export default App;
