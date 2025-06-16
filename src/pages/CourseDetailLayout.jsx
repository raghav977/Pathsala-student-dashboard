import React, { useState } from 'react';

const CourseDetailLayout = () => {
  const weeks = [
    {
      name: "Week 1",
      videos: ["video1.mp4", "video2.mp4", "video3.mp4", "video4.mp4"],
    },
    {
      name: "Week 2",
      videos: ["video1.mp4", "video2.mp4", "video3.mp4", "video4.mp4"],
    },
    {
      name: "Week 3",
      videos: ["video1.mp4", "video2.mp4", "video3.mp4", "video4.mp4"],
    },
  ];

  const [expandedWeekIndex, setExpandedWeekIndex] = useState(0); // Default: Week 1 expanded
  const [selectedVideo, setSelectedVideo] = useState(weeks[0].videos[0]);
  const handleWeekClick = (index) => {
    setExpandedWeekIndex(index === expandedWeekIndex ? null : index);
  };

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="main flex flex-col md:grid md:grid-cols-2 h-screen gap-4 p-4">
      <div className="grid grid-rows-2 gap-4">
        <div className=" p-4 rounded shadow">
          <video width="100%" height="auto" controls>
            <source src={`../Videos/${selectedVideo}`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className=" p-4 rounded shadow overflow-y-auto flex justify-around">
          <h1 className="font-semibold mb-2">Q&A</h1>
          <h1 className="font-semibold">Notes</h1>
        </div>
      </div>
      <div className=" p-4 rounded shadow overflow-y-auto">
        {weeks.map((week, index) => (
          <div key={index} className="mb-4">
            <div
              onClick={() => handleWeekClick(index)}
              className="cursor-pointer font-bold text-lg bg-blue-200 px-4 py-2 rounded hover:bg-blue-300 transition"
            >
              {week.name}
            </div>
            {expandedWeekIndex === index && (
              <ul className="mt-2 pl-4">
                {week.videos.map((video, vidIndex) => (
                  <li
                    key={vidIndex}
                    onClick={() => handleVideoClick(video)}
                    className={`cursor-pointer py-1 px-2 rounded hover:bg-blue-300 ${
                      selectedVideo === video ? 'bg-blue-400 text-white' : ''
                    }`}
                  >
                    {video.replace('.mp4', '')}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseDetailLayout;
