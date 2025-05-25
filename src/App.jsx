import React from 'react';
import Navbar from './components/navbar';
import HomeSection from './components/homeSection';
import AboutUsSection from './components/aboutus';
import Amenities from './components/amenities';
import LocationBenefits from './components/locationBenifits';
import Gallery from './components/gallery';
import Contact from './components/contact';
import Footer from './components/footer';



function App() {
  
  return (
   <div>
      <Navbar />
      <HomeSection></HomeSection>
      <AboutUsSection></AboutUsSection>
      <Amenities></Amenities>
      <LocationBenefits></LocationBenefits>
      <Gallery></Gallery>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
