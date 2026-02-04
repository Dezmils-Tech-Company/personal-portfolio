import { FiMail, FiPhone, FiGithub, FiLinkedin } from "react-icons/fi";
import { FaPhone } from "react-icons/fa";

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
          <div className="text-xl bg-orange-500/5 p-1 border border-orange-500 rounded-xl"><FiMail /></div>
          <div className="border-l-2 border-orange-500 rounded-l-sm pl-2">
            <p>Email</p>
          <p className="flex items-center text-sm text-cyan-500 gap-2">
          Ndegeezra05@gmail.com
         </p></div> 
        </div>
        
        <div className="flex items-center gap-2">
          <div className="text-xl bg-orange-500/5 p-1 border border-orange-500 rounded-xl"><FiPhone /></div>
          <div className="border-l-2 border-orange-500 rounded-l-sm pl-2">
            <p>Phone</p>
          <p className="flex items-center text-sm text-cyan-500 gap-2">
          071 231 0100
         </p></div> 
        </div>
        <div className="flex items-center gap-2">
          <div className="text-xl bg-orange-500/5 p-1 border border-orange-500 rounded-xl"><FiGithub /></div>
          <div className="border-l-2 border-orange-500 rounded-l-sm pl-2">
            <p>GitHub</p>
          <a href="https://github.com/Dezmils-Tech-Company" target="_blank" rel="noopener noreferrer" className="text-sm text-cyan-400 hover:underline">View Profile</a>
          </div> 
        </div>
        <div className="flex items-center gap-2">
          <div className="text-xl bg-orange-500/5 p-1 border border-orange-500 rounded-xl"><FiLinkedin /></div>
          <div className="border-l-2 border-orange-500 rounded-l-sm pl-2">
            <p>LinkedIn</p>
          <a href="https://www.linkedin.com/in/ezra-ndege-578906317?lipi=urn%3Ali%3Apage%3Ad_flagship3_messaging_conversation_detail%3BoYR%2B%2FqViSAG4QElXD3IeKw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-sm text-cyan-400 hover:underline">View Profile</a>
          </div> 
        </div>
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
