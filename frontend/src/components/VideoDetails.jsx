import React from 'react';

const VideoDetails = ({ videoData, loading }) => {
  if (loading) {
    return (
      <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg mt-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6 mb-2"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-4/5"></div>
        </div>
      </div>
    );
  }

  if (!videoData) {
    return null; // Don't render anything if there's no data
  }

  const { title, description } = videoData.snippet;

  return (
    <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg mt-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{title}</h2>
      <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{description}</p>
    </div>
  );
};

export default VideoDetails;
