function Register() {
  return (
    <>
      <form className="flex w-full max-w-md flex-col rounded-2xl border border-purple-200 bg-white/80 p-8 shadow-xl backdrop-blur-sm animate-fade-in dark:border-gray-700 dark:bg-gray-900/80">
        <div className="mx-auto mb-6 w-fit rounded-full bg-purple-100 p-3 shadow-md dark:bg-purple-900/50">
          <svg className="h-10 w-10 text-purple-500 dark:text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
        </div>
        <h2 className="mb-6 text-center text-3xl font-extrabold tracking-tight text-purple-600 dark:text-purple-400">Sign Up</h2>
        <div className="mb-4 flex w-full flex-col">
          <label className="mb-2 ml-2 font-semibold text-gray-600 dark:text-gray-300" htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder="Choose a username"
            className="rounded-lg border-2 border-purple-200 bg-purple-50 p-3 text-gray-800 placeholder-gray-400 transition-all duration-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-200/50 outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 dark:focus:border-purple-500 dark:focus:ring-purple-500/50"
          />
        </div>
        <div className="mb-4 flex w-full flex-col">
          <label className="mb-2 ml-2 font-semibold text-gray-600 dark:text-gray-300" htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="rounded-lg border-2 border-purple-200 bg-purple-50 p-3 text-gray-800 placeholder-gray-400 transition-all duration-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-200/50 outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 dark:focus:border-purple-500 dark:focus:ring-purple-500/50"
          />
        </div>
        <div className="mb-6 flex w-full flex-col">
          <label className="mb-2 ml-2 font-semibold text-gray-600 dark:text-gray-300" htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Create a password"
            className="rounded-lg border-2 border-purple-200 bg-purple-50 p-3 text-gray-800 placeholder-gray-400 transition-all duration-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-200/50 outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 dark:focus:border-purple-500 dark:focus:ring-purple-500/50"
          />
        </div>
        <button
          type="submit"
          className="mb-2 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 py-3 text-lg font-bold text-white shadow-md transition-all duration-300 hover:from-purple-600 hover:to-blue-600 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800"
        >
          Register
        </button>
        <a href="#" className="mt-2 text-center text-sm text-purple-500 hover:underline dark:text-purple-400">Already have an account?</a>
      </form>
    </>
  );
}

export default Register;
