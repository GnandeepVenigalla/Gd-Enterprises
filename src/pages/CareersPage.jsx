import React, { useEffect } from 'react';
import Careers from '../components/Careers';

const CareersPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32">
      <Careers />
    </div>
  );
};

export default CareersPage;
