const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

export const getVideoDetails = async (videoId) => {
  if (!API_KEY) {
    throw new Error("YouTube API key is missing. Please add it to your .env file.");
  }
  const response = await fetch(`${BASE_URL}/videos?part=snippet,contentDetails&id=${videoId}&key=${API_KEY}`);
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error.message || 'Failed to fetch video details.');
  }
  const data = await response.json();
  return data.items[0];
};