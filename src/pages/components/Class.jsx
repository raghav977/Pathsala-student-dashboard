import React from 'react';
import logo from '../../assets/images/userprofile.svg';

const Class = () => {
  const upcomingClasses = [
    {
      name: 'React',
      thumbnail: logo,
    },
    {
      name: 'Dot Net',
      thumbnail: logo,
    },
    {
      name: 'Three JS',
      thumbnail: logo,
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {upcomingClasses.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center bg-white rounded-xl shadow-lg p-4 hover:shadow-2xl transition-shadow border"
        >
          <h2 className="text-xl font-semibold text-green-700 mb-2">{item.name}</h2>
          <img
            src={item.thumbnail}
            alt={`${item.name} thumbnail`}
            className="w-24 h-24 object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default Class;
