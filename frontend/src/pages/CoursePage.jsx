import SideBarCourse from '../components/SideBarCourse'; 


function CoursePage() { 
   return (
    <> 
      <div className="grid grid-cols-[25%_70%] h-screen">
        <SideBarCourse />
        <div className="flex-1 p-4 border-l border-gray-200">
            {/* Main content area */}
            <h2 className="text-2xl font-bold mb-4">Course Content</h2>
            <p>This is where the course content will be displayed.</p>
        </div>
      </div>
    </>
   )
}

export default CoursePage;
