function SideBarCourse(){ 
  return (
    <div> 
      <div className="flex flex-col items-center justify-items-normal h-full">
      <h1 className="text-2xl font-bold mb-4 pt-4">Course Sidebar</h1>
      <ul> 
        <li className="m-4 mb-2"><a href="#section1" className="text-blue-500 hover:underline">Section 1</a></li>
        <li className=" m-4 mb-2"><a href="#section2" className="text-blue-500 hover:underline">Section 2</a></li>
        <li className="m-4 mb-2"><a href="#section3" className="text-blue-500 hover:underline">Section 3</a></li>
        <li className="m-4 mb-2"><a href="#section4" className="text-blue-500 hover:underline">Section 4</a></li>
      </ul>
    </div>
  </div>
  )
}

export default SideBarCourse;
