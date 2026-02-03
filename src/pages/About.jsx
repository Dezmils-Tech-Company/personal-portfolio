// src/pages/About.jsx
const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">About Me</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-start mb-6">
            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mr-6">
              <span className="text-3xl">👨‍💻</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">John Doe</h2>
              <p className="text-gray-600 mb-2">Full Stack Developer</p>
              <p className="text-gray-500">Passionate about building amazing web applications</p>
            </div>
          </div>

          <div className="space-y-4 text-gray-700">
            <p>
              Hello! I'm a passionate Full Stack Developer with over 5 years of experience building web applications. 
              I specialize in the MERN stack (MongoDB, Express, React, Node.js) and enjoy creating efficient, scalable solutions.
            </p>
            <p>
              My journey in web development started when I built my first website in college. Since then, I've worked on various 
              projects ranging from small business websites to large-scale enterprise applications.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or sharing my knowledge through blog posts and tutorials.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Experience Timeline</h2>
          <div className="space-y-6">
            {[
              {
                year: '2023 - Present',
                role: 'Senior Full Stack Developer',
                company: 'Tech Corp',
                description: 'Leading development of customer-facing applications'
              },
              {
                year: '2021 - 2023',
                role: 'Full Stack Developer',
                company: 'Startup Inc',
                description: 'Built and maintained multiple web applications'
              },
              {
                year: '2019 - 2021',
                role: 'Frontend Developer',
                company: 'Web Agency',
                description: 'Created responsive websites for various clients'
              }
            ].map((exp, index) => (
              <div key={index} className="flex">
                <div className="mr-6">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mt-2"></div>
                  {index < 2 && <div className="w-0.5 h-full bg-gray-300 ml-1.5"></div>}
                </div>
                <div className="pb-8">
                  <span className="text-sm text-gray-500">{exp.year}</span>
                  <h3 className="text-lg font-semibold text-gray-900">{exp.role}</h3>
                  <p className="text-gray-600 mb-1">{exp.company}</p>
                  <p className="text-gray-500">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About