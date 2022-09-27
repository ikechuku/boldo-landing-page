import './App.css';
import Header from './components/header';
import Hero from './components/hero';
import Services from "./components/services"
import Footer from "./components/footer"
import Testimonials from "./components/testimonials"
import Subscribe from "./components/subscribe"
function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
