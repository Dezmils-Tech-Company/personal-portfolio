import React from "react";

const KenyaSpinner = ({ size = 80, text = "Loading" }) => {
  const ringWidth = size * 0.12;
  const coreSize = size * 0.38;

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center gap-4">
      <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500"></div>
            </div>
      <p className="uppercase tracking-widest font-semibold text-gray-700 text-sm">
        {text}
      </p>
    </div>
  );
};

export default KenyaSpinner;
