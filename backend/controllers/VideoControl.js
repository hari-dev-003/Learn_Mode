import { YoutubeTranscript } from 'youtube-transcript';
import { GoogleGenerativeAI } from '@google/generative-ai';

const getTranscript = async (req, res) => {
  const { videoId } = req.params;
  if (!videoId) {
    return res.status(400).json({ message: 'Video ID is required' });
  }
  try {
    const transcriptItems = await YoutubeTranscript.fetchTranscript(videoId);
    const transcript = transcriptItems.map(item => ({
      text: item.text,
      offset: item.offset,
      duration: item.duration,
    }));
    return res.status(200).json({ transcript });
  } catch (error) {
    console.error('Error fetching transcript:', error);
    const message =
      error.message?.includes('Could not get transcript') ||
      error.message?.includes('Transcript is disabled')
        ? 'Transcript is not available for this video.'
        : 'Failed to fetch transcript.';
    return res.status(500).json({ message });
  }
};

const askQuestion = async (req, res) => {
  const { question, transcript, videoTitle } = req.body;

  if (!question || !transcript) {
    return res.status(400).json({ message: 'Question and transcript are required' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ message: 'Gemini API key is not configured on the server.' });
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const transcriptText = transcript
      .map(item => item.text)
      .join(' ')
      .slice(0, 30000);

    const prompt = `You are a helpful tutor assistant for an online learning platform called "Learn Mode".
A student is watching a video titled: "${videoTitle || 'Unknown Video'}".

Here is the transcript of the video:
---
${transcriptText}
---

The student has asked the following question about the video:
"${question}"

Please provide a clear, concise, and educational answer based on the video transcript above. 
If the answer is not covered in the transcript, say so politely and provide a general answer if possible.`;

    const result = await model.generateContent(prompt);
    const answer = result.response.text();

    return res.status(200).json({ answer });
  } catch (error) {
    console.error('Error generating answer:', error);
    return res.status(500).json({ message: 'Failed to generate an answer. Please try again.' });
  }
};

export { getTranscript, askQuestion };
