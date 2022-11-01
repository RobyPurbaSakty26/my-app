// import logo from './logo.svg';
// import './App.css';
import './index.css';
import AurService from './components/aurservice/aur_service';
import Hero from './components/hero/Hero';

// import Button from './components/Button';
import Navbar from './components/navbar/Navbar';
import WyUs from './components/wyus/wy_us';
import Testimonial from './components/testimonial/testimonial';
import $ from 'jquery';
import Card from './components/testimonial/carosel/card';
import Own from './components/testimonial/carosel/carosel';
import Getting from './components/getting/getting';
import Faq from './components/faq/faq';
import Footer from './components/footer/footer';
// import './owl.carousel.min.js';
// import './owl.js';

// import Own from './components/testimonial/carosel/carosel';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <AurService></AurService>
      <WyUs></WyUs>
      <Testimonial></Testimonial>
      {/* <Own></Own> */}
      {/* <Card></Card> */}
      <Getting></Getting>
      <Faq></Faq>
      <Footer></Footer>
    </div>
  );
}

export default App;
