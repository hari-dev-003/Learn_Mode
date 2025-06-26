function Navbar() { 
  return ( 
   <> 
    <nav className="text-center h-screen max-w-sm bg-gray-800 text-white p-4">
        <img src="https://picsum.photos/200" alt="Logo" className="mx-auto mb-4 rounded-full w-32 h-32" />
        <ul className="flex flex-col justify-center space-x-4 space-y-4 text-center items-center mt-10 mb-10 border-t-2 border-b-2 border-gray-700 pt-4">
          <li className="text-xl m-4"><a href="/">Home</a></li>
          <li className="text-xl m-4"><a href="/about">About</a></li>
          <li className="text-xl m-4"><a href="/contact">Contact</a></li>
          <li className="text-xl m-4"><a href="/courses">Courses</a></li>
        </ul>
        <div className="mt-10 py-4 px-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Sign Up
          </button>
        </div>
    </nav>
         </>
    )
}


export default Navbar;
