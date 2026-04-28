import { useState, useEffect } from 'react';
import { FaFileAlt, FaChevronDown, FaChevronUp, FaExclamationTriangle } from 'react-icons/fa';
import { fetchTranscript } from '../services/videoService';

const formatTime = (offsetMs) => {
  const totalSeconds = Math.floor(offsetMs / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

function TranscriptPanel({ videoId, onTranscriptLoaded }) {
  const [transcript, setTranscript] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    setTranscript([]);
    setError(null);
    setFetched(false);
    setIsExpanded(false);
  }, [videoId]);

  const handleToggle = async () => {
    if (!fetched && !loading) {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchTranscript(videoId);
        setTranscript(data.transcript || []);
        if (onTranscriptLoaded) {
          onTranscriptLoaded(data.transcript || []);
        }
        setFetched(true);
        setIsExpanded(true);
      } catch (err) {
        setError(err.message);
        setFetched(true);
      } finally {
        setLoading(false);
      }
    } else {
      setIsExpanded(prev => !prev);
    }
  };

  return (
    <div className="rounded-2xl bg-white dark:bg-gray-800 shadow-lg mt-6 overflow-hidden">
      <button
        onClick={handleToggle}
        className="w-full flex items-center justify-between p-5 text-left focus:outline-none hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
        disabled={loading}
      >
        <div className="flex items-center gap-3">
          <FaFileAlt className="text-blue-500 h-5 w-5 flex-shrink-0" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Video Transcript
          </h3>
          {loading && (
            <span className="text-sm text-gray-500 dark:text-gray-400 animate-pulse">
              Loading…
            </span>
          )}
        </div>
        {loading ? (
          <div className="h-5 w-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
        ) : isExpanded ? (
          <FaChevronUp className="text-gray-500 h-4 w-4" />
        ) : (
          <FaChevronDown className="text-gray-500 h-4 w-4" />
        )}
      </button>

      {isExpanded && (
        <div className="px-5 pb-5">
          {error ? (
            <div className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
              <FaExclamationTriangle className="h-4 w-4 flex-shrink-0" />
              <p className="text-sm">{error}</p>
            </div>
          ) : transcript.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              No transcript available.
            </p>
          ) : (
            <div className="max-h-72 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
              {transcript.map((item, index) => (
                <div key={index} className="flex gap-3 items-start group">
                  <span className="text-xs font-mono text-blue-500 flex-shrink-0 mt-0.5 bg-blue-50 dark:bg-blue-900/30 px-1.5 py-0.5 rounded">
                    {formatTime(item.offset)}
                  </span>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default TranscriptPanel;
