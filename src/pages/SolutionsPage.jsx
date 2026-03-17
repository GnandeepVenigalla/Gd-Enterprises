import React, { useEffect } from 'react';
import SolutionsPortal from '../components/SolutionsPortal';
import Services from '../components/Services';

const SolutionsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32">
      <SolutionsPortal />
      <Services />
    </div>
  );
};

export default SolutionsPage;
