function Login() { 
   return ( 
      <>
          <form className="flex flex-col max-w-md  mx-auto mt-10 mb-5 p-10 ">
              <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
              <div className="flex flex-col w-full m-2">
                  <input 
                      type="text"
                      placeholder="Username"
                      className="border p-2 rounded mt-2 m-4 w-full"
                  />
              </div>
              <div className="flex flex-col w-full m-2">
                  <input 
                      type="password"
                      placeholder="Password"
                      className="border p-2 rounded mt-2 m-4 w-full"
                  />
              </div>
              <div className="flex flex-col w-full m-1">
                  <button 
                      type="submit"
                      className="bg-blue-500 text-white py-2 p-2  rounded-full mx-5 mb-4  w-full hover:bg-blue-600 transition-colors duration-200"
                  >
                      Login
                  </button>
              </div>
          </form>
      </>
   )
}

export default Login;
