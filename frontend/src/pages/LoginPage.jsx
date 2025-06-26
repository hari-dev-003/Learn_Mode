import Login from '../components/Login';


function LoginPage() {
  // TODO: Login Page(AppName, Image, Login component)
  return (
    <>
      <div className="flex flex-col items-center justify-stretch h-screen bg-gray-100 border-gray-200   rounded-lg shadow-lg w-full max-w-xl">
      <h1 className="text-3xl font-bold text-center mt-10 mb-20">Welcome to MyApp</h1>
      <img src="https://picsum.photos/200/300" alt="App Logo" className="mb-6 rounded-lg shadow-md mt-10"/>
      </div>
        <Login/>
    </>
  )
}

export default LoginPage;
