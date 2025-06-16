import React from 'react';

const Assignment = () => {
  const assignments = [
    {
      title: 'React Hooks Quiz',
      dueDate: 'June 20, 2025',
      status: 'Pending',
    },
    {
      title: 'Build a ToDo App',
      dueDate: 'June 15, 2025',
      status: 'Submitted',
    },
    {
      title: 'Django API Integration',
      dueDate: 'June 25, 2025',
      status: 'Pending',
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Submitted':
        return 'bg-green-100 text-green-700';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold text-green-800">Assignments</h1>
      {assignments.map((assignment, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row md:items-center justify-between bg-white border rounded-lg shadow-md p-4 hover:shadow-lg transition"
        >
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-medium text-gray-800">{assignment.title}</h2>
            <p className="text-sm text-gray-600">Due: {assignment.dueDate}</p>
            <span
              className={`w-fit text-xs px-3 py-1 rounded-full font-medium ${getStatusColor(
                assignment.status
              )}`}
            >
              {assignment.status}
            </span>
          </div>
          <button className="mt-3 md:mt-0 bg-green-600 text-white px-4 py-2 text-sm rounded hover:bg-green-700 transition">
            {assignment.status === 'Pending' ? 'Submit' : 'View'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Assignment;
