import React from 'react';
import { FaDownload, FaCheckCircle } from 'react-icons/fa';
import certificateImg from '../../assets/images/digitalpathsalalogo.png'

const Certification = () => {
  const certificates = [
    {
      course: 'MERN Stack Development',
      issuedOn: 'June 5, 2025',
      status: 'Issued',
      link: '/certificates/mern.pdf',
    },
    {
      course: 'Python with Django',
      issuedOn: 'May 20, 2025',
      status: 'Issued',
      link: '/certificates/django.pdf',
    },
    {
      course: 'React Basics',
      issuedOn: '—',
      status: 'In Progress',
      link: '',
    },
  ];

  const getStatusStyle = (status) => {
    if (status === 'Issued') return 'text-green-700 bg-green-100';
    if (status === 'In Progress') return 'text-yellow-700 bg-yellow-100';
    return 'text-gray-600 bg-gray-100';
  };

  return (
    <div className="mt-4 md:grid md:grid-cols-3 flex flex-col items-center justify-center gap-6">
        
      {certificates.map((cert, index) => (
        <div
          key={index}
          className="flex items-center justify-between bg-[#f1fff2] border border-green-200 rounded-xl p-4 shadow-xl w-[400px]"
        >
          {/* Left: Details */}
          <div className="flex flex-col gap-2 w-full pr-4">
            <h2 className="text-xl font-semibold text-green-800">{cert.course}</h2>
            <p className="text-sm text-gray-700">Issued On: {cert.issuedOn}</p>
            <span
              className={`text-xs px-3 py-1 rounded-full w-fit font-medium ${getStatusStyle(cert.status)}`}
            >
              {cert.status === 'Issued' ? (
                <span className="flex items-center gap-1">
                  <FaCheckCircle className="text-green-600" /> Issued
                </span>
              ) : (
                <span>In Progress</span>
              )}
            </span>

            {/* Button */}
            {cert.status === 'Issued' ? (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 w-fit text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-sm flex items-center gap-2"
              >
                <FaDownload /> Download
              </a>
            ) : (
              <button
                disabled
                className="mt-2 w-fit text-white bg-gray-400 px-4 py-2 rounded text-sm opacity-70 cursor-not-allowed"
              >
                Not Available
              </button>
            )}
          </div>

          {/* Right: Thumbnail */}
          <img
            src={certificateImg}
            alt="Certificate Preview"
            className="w-24 h-24 object-contain ml-4 hidden sm:block"
          />
        </div>
      ))}
    </div>
  );
};

export default Certification;
