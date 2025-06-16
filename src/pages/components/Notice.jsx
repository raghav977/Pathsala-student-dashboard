import React from 'react';

const Notice = () => {
  const notices = [
    {
      title: "Class Merged",
      description: "Hey guys",
      instructor: "John Doe"
    },
    {
      title: "Class Postponed",
      description: "Class is postponed for this course",
      instructor: "John Doe"
    }
  ];

  return (
    <div className="p-6 grid gap-6 md:grid-cols-1">
      {notices.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow"
        >
          <h2 className="text-xl font-semibold text-green-600 mb-2">{item.title}</h2>
          <p className="text-gray-700 mb-2">{item.description}</p>
          <p className="text-sm text-gray-500">Instructor: {item.instructor}</p>
        </div>
      ))}
    </div>
  );
};

export default Notice;
