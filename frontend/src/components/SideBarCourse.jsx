function SideBarCourse(){ 
  return (
    <div> 
      <div className="flex flex-col items-center justify-items-normal h-full">
      <h1 className="text-2xl font-bold mb-4 pt-4">Course Sidebar</h1>
      <ul className= "list-none p-0 m-0  border-t border-gray-200 w-full"> 
        <li className="m-4 mb-2 text-center"><a href="#section1" className="text-blue-500 hover:underline">Web Development</a></li>
        <li className=" m-4 mb-2 text-center"><a href="#section2" className="text-blue-500 hover:underline">DSA</a></li>
        <li className="m-4 mb-2 text-center"><a href="#section3" className="text-blue-500 hover:underline">Computer Networks</a></li>
        <li className="m-4 mb-2 text-center"><a href="#section4" className="text-blue-500 hover:underline">DataBase</a></li>
      </ul>
    </div>
  </div>
  )
}

export default SideBarCourse;
