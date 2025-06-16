import React from 'react';
import photo from "../../assets/images/userprofile.svg";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const MyCourses = () => {
    const navigate = useNavigate();
  const courses = [
    {
      name: "MERN Stack",
      thumbnail: photo,
      link: "/student/course",
      progress: 70,
    },
    {
      name: "Python Basics",
      thumbnail: photo,
      link: "/student/course",
      progress: 40,
    },

    {
      name: "Python with Django",
      thumbnail: photo,
      link: "/student/course",
      progress: 90,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {courses.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition-shadow border"
        >
          {/* Left section */}
          <div className="flex flex-col justify-between gap-2 w-full pr-4">
            <h2 className="text-lg font-semibold text-green-700">{item.name}</h2>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
              <div
                className="bg-green-500 h-2 rounded-full"
                style={{ width: `${item.progress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600 mb-2">{item.progress}% completed</p>
            <Link to={`${item.link}/${index}`}
              className="bg-green-600 text-white text-sm px-4 py-2 rounded hover:bg-green-700 transition-colors w-max"
            >
              View
            </Link>
          </div>

          {/* Thumbnail */}
          <img
            src={item.thumbnail}
            alt={`${item.name} thumbnail`}
            className="w-20 h-20 object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default MyCourses;
