import React from "react";

interface CalendarCardProps {
  day: string;
  content: string;
}

const CalendarCard = ({ day, content }: CalendarCardProps) => {
  return (
    <div className="bg-white border rounded-xl shadow-md p-6 w-100">
      <h2 className="text-lg font-semibold mb-2">{day}</h2>
      <p className="text-gray-600 mb-4">{content}</p>
      <div className="flex justify-between mt-4">
            <button 
            className="border border-gray-400 text-gray-700 py-1 px-3 rounded hover:bg-gray-200 transition"
            onClick={() => alert("Edit functionality coming soon!")}
            >
            Edit
            </button>
            <div className="flex justify-end">
            <button 
                className="border border-gray-400 text-gray-700 py-1 px-3 rounded hover:bg-gray-200 transition mr-2"
                onClick={() => alert("Regenerate functionality coming soon!")}
            >
                Regenerate with prompts
            </button>
            <button 
                className="bg-gray-900 text-white py-1 px-3 rounded hover:bg-gray-700 transition"
                onClick={() => navigator.clipboard.writeText(content)}
            >
                Copy
            </button>
            
            </div>
      </div>
    </div>
  );
};

export default CalendarCard;