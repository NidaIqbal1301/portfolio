'use client';
import React, { useState } from 'react';
import { portfolioItems } from '../utils/projectsdb';
import PortfolioCard from './PortfolioCard';

const ShowProjects = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedItems = showAll ? portfolioItems : portfolioItems.slice(0, 6);

  return (
    <>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {displayedItems.map((item, index) => (
          <PortfolioCard key={index} item={item} />
        ))}
      </div>

      {portfolioItems.length > 6 && (
        <div className="flex justify-center mt-8">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="btn-grad rounded-lg"
          >
            {showAll ? 'Show Less' : 'Show More'}
          </button>
        </div>
      )}
    </>
  );
}

export default ShowProjects;
