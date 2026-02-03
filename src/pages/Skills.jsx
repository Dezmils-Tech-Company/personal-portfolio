// src/pages/Skills.jsx
const Skills = () => {
  const skills = {
    'Frontend': [
      { name: 'React', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'JavaScript', level: 95 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'Tailwind CSS', level: 90 },
    ],
    'Backend': [
      { name: 'Node.js', level: 88 },
      { name: 'Express', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'REST APIs', level: 90 },
    ],
    'Tools & Others': [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 75 },
      { name: 'AWS', level: 70 },
      { name: 'CI/CD', level: 80 },
      { name: 'Testing', level: 85 },
    ]
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Skills & Technologies</h1>
      
      <div className="grid md:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6 pb-3 border-b">
              {category}
            </h2>
            <div className="space-y-4">
              {skillList.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-600 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Currently Learning</h2>
        <div className="flex flex-wrap gap-2">
          {['GraphQL', 'Next.js', 'Microservices', 'Kubernetes', 'Machine Learning'].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-green-100 text-green-700 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills