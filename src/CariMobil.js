// import logo from './logo.svg';
// import './App.css';
import './index.css';

// import Button from './components/Button';
import Navbar from './components/navbar/Navbar';

import Footer from './components/footer/footer';
import HomeCar from './components/homeCar/homeCar';
import Cari from './components/formCari/cari';
import CardMobil from './components/card/card';

function CariMobil() {
  return (
    <div>
      <Navbar></Navbar>
      <HomeCar />
      {/* <Cari></Cari> */}
      <CardMobil />
      <Footer />
    </div>
  );
}

export default CariMobil;
