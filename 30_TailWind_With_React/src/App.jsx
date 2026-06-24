import "./App.css";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline bg-green-500">
        Tailwind v4 Working 🚀
      </h1>

      <h2 className="text-xl font-semibold text-blue-600 mt-4">Welcome to Tailwind CSS v4!</h2>

      <h3 className="text-lg font-medium text-gray-800 mt-4 underline">Admission Form</h3>
      <form className="mt-4 border-white">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            <span className="text-red-500 underline">
              Name
              </span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            <span className="text-red-500 underline">
              Email
              </span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default App;
