import React, { Fragment } from 'react';
import Hero from '@/components/Home/Hero';
import BingoSection from '@/components/Home/BingoSection';
import CasinoSection from '@/components/Home/CasinoSection';
import RoyalLoto from '@/components/Home/RoyalLoto';
import QuerySection from '@/components/Home/QuerySection';

function Landing() {
  return (
    <Fragment>
      <Hero />
      <RoyalLoto />
      <BingoSection />
      <CasinoSection />
      <QuerySection />
    </Fragment>
  );
}

export default Landing;
