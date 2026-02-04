import { useRouteError } from "react-router-dom";
import { FaEraser } from "react-icons/fa";

const ErrorBoundary = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen  bg-cyan-950 text-white justify-center items-center flex">
        <div className="mb-8 flex flex-col items-center  py-10 px-4 text-center z-1000 max-w-xs md:max-w-md bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-cyan-500 text-shadow-white-90 mb-4 flex"><FaEraser className="mr-2" /> oops!! Error</h1>
      <p className="text-red-500 mb-6">
        {error.statusText || error.message || "An unexpected error occurred."}
      </p>
      <a
        href="/"
        className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold"
      >
        Go Back Home
      </a>
      </div>
    </div>
  );
};

export default ErrorBoundary;
