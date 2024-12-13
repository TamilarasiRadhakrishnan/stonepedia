import React from 'react';

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/banner.jpg")' }}>
      <h1 className="text-5xl font-bold text-white">Welcome to Stonepedia</h1>
      <p className="text-xl text-gray-200 mt-4">Discover premium stones for your dream project.</p>
      <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">Explore Now</button>
    </div>
  );
};

export default Hero;
