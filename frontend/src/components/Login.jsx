function Login() {
  return (
    <>
      <form className="flex w-full max-w-md flex-col rounded-2xl border border-gray-200 bg-white/80 p-8 shadow-xl backdrop-blur-sm animate-fade-in dark:border-gray-700 dark:bg-gray-900/80">
        <div className="mx-auto mb-6 w-fit rounded-full bg-blue-100 p-3 shadow-md dark:bg-blue-900/50">
          <svg className="h-10 w-10 text-blue-500 dark:text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
        </div>
        <h2 className="mb-6 text-center text-3xl font-extrabold tracking-tight text-blue-600 dark:text-blue-400">Sign In</h2>
        <div className="mb-4 flex w-full flex-col">
          <label className="mb-2 ml-2 font-semibold text-gray-600 dark:text-gray-300" htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder="Enter your username"
            className="rounded-lg border-2 border-blue-200 bg-blue-50 p-3 text-gray-800 placeholder-gray-400 transition-all duration-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-200/50 outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 dark:focus:border-blue-500 dark:focus:ring-blue-500/50"
          />
        </div>
        <div className="mb-6 flex w-full flex-col">
          <label className="mb-2 ml-2 font-semibold text-gray-600 dark:text-gray-300" htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="rounded-lg border-2 border-blue-200 bg-blue-50 p-3 text-gray-800 placeholder-gray-400 transition-all duration-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-200/50 outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 dark:focus:border-blue-500 dark:focus:ring-blue-500/50"
          />
        </div>
        <button
          type="submit"
          className="mb-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 py-3 text-lg font-bold text-white shadow-md transition-all duration-300 hover:from-blue-600 hover:to-purple-600 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
        >
          Login
        </button>
        <a href="#" className="mt-2 text-center text-sm text-blue-500 hover:underline dark:text-blue-400">Forgot password?</a>
      </form>
    </>
  );
}

export default Login;
