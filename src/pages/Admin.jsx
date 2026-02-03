// src/pages/Admin.jsx
const Admin = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <button className="p-4 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 text-left">
              <div className="text-lg font-semibold mb-1">Sync from GitHub</div>
              <p className="text-sm">Update projects from your GitHub repositories</p>
            </button>
            <button className="p-4 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 text-left">
              <div className="text-lg font-semibold mb-1">Add New Project</div>
              <p className="text-sm">Manually add a new project to your portfolio</p>
            </button>
            <button className="p-4 bg-yellow-50 text-yellow-700 rounded-lg hover:bg-yellow-100 text-left">
              <div className="text-lg font-semibold mb-1">View Analytics</div>
              <p className="text-sm">Check portfolio views and engagement metrics</p>
            </button>
            <button className="p-4 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 text-left">
              <div className="text-lg font-semibold mb-1">Manage Content</div>
              <p className="text-sm">Edit about section, skills, and contact info</p>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[
              { action: 'Project synced from GitHub', time: '2 hours ago', count: '3 new projects' },
              { action: 'Portfolio viewed', time: '5 hours ago', count: '24 views' },
              { action: 'Contact form submitted', time: '1 day ago', count: 'New message' },
              { action: 'Project updated', time: '2 days ago', count: 'Weather App' }
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div>
                  <div className="font-medium text-gray-900">{activity.action}</div>
                  <div className="text-sm text-gray-500">{activity.time}</div>
                </div>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                  {activity.count}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>Admin features will be fully implemented with backend integration.</p>
          <p className="mt-2">For now, this is a demonstration of the admin interface.</p>
        </div>
      </div>
    </div>
  )
}

export default Admin