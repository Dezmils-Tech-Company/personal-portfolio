import ResumeContent from "./ResumeContent";

const Resume = () => {
  return (
    <div className="min-h-screen flex">
      

      {/* Scrollable Content */}
      <div className="w-full md:ml-1/3 lg:ml-1/4 flex-1 overflow-y-auto">
        <ResumeContent />
      </div>
    </div>
  );
};

export default Resume;
