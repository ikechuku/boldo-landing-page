import './App.css';
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, } from '@cloudinary/react';
import { fill } from "@cloudinary/url-gen/actions/resize";

import Header from './components/header';
import Hero from './components/hero';
import Services from "./components/services"
import Footer from "./components/footer"
import Subscribe from "./components/subscribe"

const App = () => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'techKnight'
    }
  });

  const myImage = cld.image('docs/models');

  myImage.resize(fill().width(250).height(250));

  return (
    <>
      <Header />
      <div>
        
      </div>
      {/* <Hero />
      <Services /> */}
      <Subscribe />
      <Footer />
    </>
  )
}

export default App;
