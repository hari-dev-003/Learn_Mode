import { useSearchParams } from 'react-router-dom';
import VideoSection from '../components/VideoSection';
import VideoSideBar from '../components/VideoSideBar';
import CourseIntroduction from '../components/CourseIntroduction';

function VideoPage() {
  const [searchParams] = useSearchParams();

  const courseName = searchParams.get('name') || 'Course';
  const videoId = searchParams.get('id');

  const content = [
    {
      id: 1,
      title: "HTML Introduction",
      src: "https://www.youtube.com/embed/kUMe1FH4CHE?si=HsWGhdUik3fEAxWm",
      description: "Learn the basics of HTML, the standard markup language for creating Web pages."
    },
    {
      id: 2,
      title: "CSS Fundamentals",
      src: "https://www.youtube.com/embed/OXGznpKZ_sA?si=6ya2XZ8tfTn-4n7r",
      description: "Discover how to style your web pages with CSS (Cascading Style Sheets)."
    },
    {
      id: 3,
      title: "JavaScript for Beginners",
      src: "https://www.youtube.com/embed/Zi-Q0t4gMC8?si=lToky4tDR_OwnROR",
      description: "Get started with JavaScript, the programming language of the Web."
    }
  ];

  const currentVideo = videoId ? content.find(video => video.id === parseInt(videoId)) : null;

  return (
    <div className="grid h-screen grid-cols-[22%_78%] bg-gray-100 dark:bg-gray-950">
      <div className="overflow-y-auto border-r border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
        <VideoSideBar />
      </div>
      <main className="overflow-y-auto p-6 lg:p-8">
        <div className="mx-auto max-w-5xl">
          {currentVideo ? (
            <>
              <VideoSection key={currentVideo.id} src={currentVideo.src} />
              <div className="mt-8 rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800/50">
                <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                  {currentVideo.title}
                </h1>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                  {currentVideo.description}
                </p>
                <div className="mt-6 border-t border-gray-200 pt-6 dark:border-gray-700">
                  <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">About this course: {courseName}</h2>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    This course covers the fundamentals of {courseName}. You will learn about the key concepts and practical applications.
                  </p>
                </div>
              </div>
            </>
          ) : (
            <CourseIntroduction courseName={courseName} />
          )}
        </div>
      </main>
    </div>
  );
}

export default VideoPage;
