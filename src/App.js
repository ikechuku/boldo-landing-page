import './App.css';
import Header from './components/header';
import Hero from './components/hero';
import Services from "./components/services"
import Footer from "./components/footer"
import Testimonials from "./components/testimonials"
import Subscribe from "./components/subscribe"
function App() {
  return (
    <div>
      <div className="bg-">
        <div className="app-container mx-auto">
          <Header />
          <Hero />
        </div>
      </div>
      <Services />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
