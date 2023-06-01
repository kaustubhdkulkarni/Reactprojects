import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Join from './components/Join/Join';
import Plans from './components/Plans/Plans';
import Programs from './components/Programs/Programs';
import Reason from './components/Reason/Reason';
import Testimonial from './components/Testimonials/Testimonial';
function App() {
  return (
    <div className="App">
      <Hero/>
      <Programs/>
      <Reason/>
      <Plans/>
      <Testimonial/>
      <Join/>
      <Footer/>
    </div>

  );
}

export default App;
