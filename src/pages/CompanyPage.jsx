import React, { useEffect } from 'react';
import About from '../components/About';
import OriginStory from '../components/OriginStory';

const CompanyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32">
      <OriginStory />
      <About />
    </div>
  );
};

export default CompanyPage;
