import { Link } from 'react-router-dom';

function SideBarCourse({ title }){ 
  return (
    <div> 
      <div className="flex flex-col items-center justify-items-normal h-full">
      <h1 className="text-2xl font-bold mb-4 pt-4">{ title }</h1>
      <ul className= "list-none p-0 m-0  border-t border-gray-200 w-full"> 
        <li className="m-4 mb-2 text-center"><Link to="/courses/web-dev" className="text-blue-500 hover:underline">Web Development</Link></li>
        <li className=" m-4 mb-2 text-center"><Link to="/courses/dsa" className="text-blue-500 hover:underline">DSA</Link></li>
        <li className="m-4 mb-2 text-center"><Link to="/courses/computer-networks" className="text-blue-500 hover:underline">Computer Networks</Link></li>
        <li className="m-4 mb-2 text-center"><Link to="/courses/database" className="text-blue-500 hover:underline">DataBase</Link></li>
      </ul>
    </div>
  </div>
  )
}

export default SideBarCourse;
