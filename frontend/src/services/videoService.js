const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

export const fetchTranscript = async (videoId) => {
  const response = await fetch(`${API_BASE_URL}/api/video/transcript/${videoId}`);
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to fetch transcript.');
  }
  return response.json();
};

export const askVideoQuestion = async ({ question, transcript, videoTitle }) => {
  const response = await fetch(`${API_BASE_URL}/api/video/ask`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ question, transcript, videoTitle }),
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to get an answer.');
  }
  return response.json();
};
