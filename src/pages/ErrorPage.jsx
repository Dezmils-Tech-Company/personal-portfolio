// src/pages/ErrorPage.jsx
import { useRouteError, Link } from 'react-router-dom'
import { FiHome, FiAlertTriangle } from 'react-icons/fi'

const ErrorPage = () => {
  const error = useRouteError()
  console.error(error)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <div className="mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <FiAlertTriangle className="text-3xl text-red-600" />
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-2">Oops!</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Something went wrong
          </h2>
          <p className="text-gray-600 mb-8">
            {error.statusText || error.message || 'An unexpected error occurred'}
          </p>
        </div>

        <div className="space-y-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            <FiHome className="mr-2" />
            Back to Home
          </Link>
          
          <button
            onClick={() => window.location.reload()}
            className="block w-full px-6 py-3 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Refresh Page
          </button>
        </div>

        <div className="mt-8 text-sm text-gray-500">
          <p>Error Code: {error.status || 'Unknown'}</p>
          <p className="mt-2">If the problem persists, please contact support.</p>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage