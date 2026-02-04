import { FiMail, FiPhone, FiGithub, FiLinkedin } from "react-icons/fi";

const ProfileSidebar = () => {
  return (
    <aside className="flex flex-col p-2">
      <img
        src="https://i.ibb.co/cXKRgnw5/nba.jpg"
        alt="Ezra Ndege"
        className="w-30 h-30 rounded-full border-3 border-cyan-400 object-cover mb-4"
      />
      <h1 className="text-2xl font-bold mb-2">Ezra Ndege</h1>
      <p className="text-cyan-400 mb-4">Full-Stack Developer</p>

      {/* Contact Info */}
      <div className="space-y-3 text-gray-300">
        <div className="flex items-center gap-2">
          <div className="text-2xl bg-orange-500/5 p-2 border border-orange-500 rounded-xl"><FiMail /></div>
          <div className="border-l-2 rounded-">
            <p>Email</p>
          <p className="flex items-center gap-2">
          Ndegeezra05@gmail.com
        </p></div>
          
        </div>
        
        <p className="flex items-center gap-2">
          <FiPhone /> +254 712 310 100
        </p>
        <p className="flex items-center gap-2">
          <FiGithub /> github.com/Dezmils-Tech-Company
        </p>
        <p className="flex items-center gap-2">
          <FiLinkedin /> linkedin.com/in/ezra-ndege
        </p>
      </div>

      {/* Download Resume */}
      <a
        href="/resume.pdf"
        className="mt-6 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg font-semibold"
      >
        Download Resume
      </a>
    </aside>
  );
};

export default ProfileSidebar;
