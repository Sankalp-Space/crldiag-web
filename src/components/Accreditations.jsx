import React from 'react';

const Accreditations = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">🏆 Accreditations and Achievements</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center">
          <img src="/certificate 1.jpeg" alt="Certificate 1" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
        <div className="text-center">
          <img src="/certificate 2.jpeg" alt="Certificate 2" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
        <div className="text-center">
          <img src="/cerficate 3.png" alt="Certificate 3" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default Accreditations;
