import { Link,useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

function VideoSideBar() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const courseName = searchParams.get('name');

  return (
    <div className="flex h-full flex-col p-4 bg-gray-50 dark:bg-gray-900">
      <div className="mb-4 flex items-center border-b border-gray-200 pb-4 dark:border-gray-700">
        <button
          className="mr-4 rounded-full p-2 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
          onClick={() => {
            navigate("/courses", { replace: true });
          }}
        >
          <svg className="h-6 w-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
        </button>
        <h1 className="truncate text-xl font-bold text-gray-800 dark:text-white">{courseName}</h1>
      </div>
      <ul className="w-full list-none space-y-2 p-0 m-0">
        <li>
          <Link to={`/videos?name=${courseName}&id=1`} className="block rounded-lg px-4 py-3 text-center font-medium text-gray-700 transition-all duration-200 hover:bg-blue-100 hover:text-blue-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-400">
            HTML
          </Link>
        </li>
        <li>
          <Link to={`/videos?name=${courseName}&id=2`} className="block rounded-lg px-4 py-3 text-center font-medium text-gray-700 transition-all duration-200 hover:bg-blue-100 hover:text-blue-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-400">
            CSS
          </Link>
        </li>
        <li>
          <Link to={`/videos?name=${courseName}&id=3`} className="block rounded-lg px-4 py-3 text-center font-medium text-gray-700 transition-all duration-200 hover:bg-blue-100 hover:text-blue-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-400">
            JavaScript
          </Link>
        </li>
      </ul>
    </div>
  );
}


export default VideoSideBar;
