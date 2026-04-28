import { useState, useRef, useEffect } from 'react';
import { FaRobot, FaUser, FaPaperPlane, FaExclamationTriangle } from 'react-icons/fa';
import { askVideoQuestion } from '../services/videoService';

function VideoQA({ transcript, videoTitle }) {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: `Hi! I've analysed this video${videoTitle ? ` on "${videoTitle}"` : ''}. Ask me anything about it!`,
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const question = input.trim();
    if (!question || loading) return;

    setInput('');
    setError(null);
    setMessages(prev => [...prev, { role: 'user', text: question }]);
    setLoading(true);

    try {
      const data = await askVideoQuestion({ question, transcript, videoTitle });
      setMessages(prev => [...prev, { role: 'assistant', text: data.answer }]);
    } catch (err) {
      setError(err.message);
      setMessages(prev => [...prev, { role: 'assistant', text: `Sorry, I couldn't answer that. ${err.message}` }]);
    } finally {
      setLoading(false);
    }
  };

  const noTranscript = !transcript || transcript.length === 0;

  return (
    <div className="rounded-2xl bg-white dark:bg-gray-800 shadow-lg mt-6 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 p-5 border-b border-gray-100 dark:border-gray-700">
        <FaRobot className="text-purple-500 h-5 w-5 flex-shrink-0" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Ask About This Video</h3>
      </div>

      {noTranscript ? (
        <div className="p-5 flex items-center gap-2 text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20 m-4 rounded-lg">
          <FaExclamationTriangle className="h-4 w-4 flex-shrink-0" />
          <p className="text-sm">
            Please load the transcript first by clicking <strong>Video Transcript</strong> above, then you can ask questions.
          </p>
        </div>
      ) : (
        <>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 max-h-96">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
              >
                <div
                  className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center ${
                    msg.role === 'user'
                      ? 'bg-blue-500 text-white'
                      : 'bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400'
                  }`}
                >
                  {msg.role === 'user' ? (
                    <FaUser className="h-4 w-4" />
                  ) : (
                    <FaRobot className="h-4 w-4" />
                  )}
                </div>
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${
                    msg.role === 'user'
                      ? 'bg-blue-500 text-white rounded-tr-none'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex gap-3 flex-row">
                <div className="flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400">
                  <FaRobot className="h-4 w-4" />
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl rounded-tl-none px-4 py-2.5">
                  <div className="flex gap-1 items-center h-5">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-100 dark:border-gray-700">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question about this video…"
                disabled={loading}
                className="flex-1 rounded-full border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 px-4 py-2 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 disabled:opacity-60 transition"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="flex-shrink-0 rounded-full bg-purple-500 hover:bg-purple-600 disabled:bg-gray-300 dark:disabled:bg-gray-600 p-2.5 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400"
              >
                <FaPaperPlane className="h-4 w-4" />
              </button>
            </form>
            {error && (
              <p className="mt-2 text-xs text-red-500 dark:text-red-400">{error}</p>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default VideoQA;
