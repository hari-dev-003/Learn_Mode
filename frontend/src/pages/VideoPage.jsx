import { useSearchParams } from 'react-router-dom';
import SideBarCourse from '../components/SideBarCourse';
import VideoSection from '../components/VideoSection';

function VideoPage(){
   const [searchParams] = useSearchParams();

   const courseName = searchParams.get('name');
   console.log(courseName);


   return(
  <>
  <div className="flex flex-col md:flex-row w-full min-h-screen">
    <div className="w-full md:w-1/4 p-4 bg-gray-50 md:border-r border-gray-200">
      <SideBarCourse title={courseName} />
    </div>
    <div className="w-full  p-4 bg-white">
      <VideoSection courseName={courseName} />
      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-2">Course Description</h2>
        <p className="text-gray-700">
          This course covers the fundamentals of {courseName}. You will learn about the key concepts and practical applications.
        </p>
      </div>  
    </div>
  </div>
</>
   )
}
 
export default VideoPage;
