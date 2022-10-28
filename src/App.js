// import logo from './logo.svg';
import './App.css';
import AurService from './components/aurservice/aur_service';
import Hero from './components/hero/Hero';
// import Button from './components/Button';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <AurService></AurService>
    </div>
  );
}

export default App;
