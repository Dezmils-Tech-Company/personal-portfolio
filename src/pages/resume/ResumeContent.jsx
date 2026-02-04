const ResumeContent = () => {
  return (
    <main className="h-full flex flex-col items-center justify-start p-4" >
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Resume</h2>

      {/* Education */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold text-cyan-600 mb-4">Education</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-bold">Bachelor of Science in Computer Science</h4>
            <p className="text-gray-600">Maseno University, 2015 – 2019</p>
            <p className="text-sm text-gray-500">First Class Honours</p>
          </div>
          <div>
            <h4 className="font-bold">Master of Science in Computer Science</h4>
            <p className="text-gray-600">Maseno University, 2021 – 2024</p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold text-cyan-600 mb-4">Experience</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-bold">Full-Stack Developer</h4>
            <p className="text-gray-600">Sports Results Platform (2023 – Present)</p>
            <ul className="list-disc list-inside text-gray-500">
              <li>Designed backend schemas and controllers with MongoDB & Express</li>
              <li>Built dynamic admin panels with React & TailwindCSS</li>
              <li>Integrated GitHub API for automated project sync</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold text-cyan-600 mb-4">Skills</h3>
        <div className="grid grid-cols-2 gap-4 text-gray-700">
          <span>React.js</span>
          <span>Node.js</span>
          <span>Express.js</span>
          <span>MongoDB</span>
          <span>Python (AI/ML)</span>
          <span>TailwindCSS</span>
        </div>
      </section>

      {/* Achievements */}
      <section>
        <h3 className="text-xl font-semibold text-cyan-600 mb-4">Achievements</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Built scalable sports results system with automated workflows</li>
          <li>Selected for DSA 2026 Summer School</li>
        </ul>
      </section>
    </main>
  );
};

export default ResumeContent;
