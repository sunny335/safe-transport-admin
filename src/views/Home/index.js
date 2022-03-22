import React from 'react';

import Header from 'src/components/Header/Header';
import Footer from 'src/components/Footer/Footer';
import SectionLocations from 'src/components/SectionLocations/SectionLocations';
import SectionHero from 'src/components/SectionHero/SectionHero';

const Home = () => {
  return (
    <>
      <Header />

      <SectionHero />
      <SectionLocations />
      <Footer />
    </>
  );
};

export default Home;
