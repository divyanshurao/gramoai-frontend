import React, { useState, useEffect } from "react";

interface ScheduleModalProps {
  scheduledAt?: string;
  isOpen: boolean;
  onClose: () => void;
  onSave: (date: string, time: string) => void;
  initialDate?: string;
  initialTime?: string;
}

const ScheduleModal: React.FC<ScheduleModalProps> = ({
  isOpen,
  onClose,
  onSave,
  scheduledAt,
  initialDate = "",
  initialTime = ""
}) => {
  const [date, setDate] = useState(initialDate);
  const [time, setTime] = useState(initialTime);

  // Update state when modal opens or scheduledAt changes
  useEffect(() => {
    if (isOpen && scheduledAt) {
      const parsedDate = new Date(scheduledAt);
      setDate(parsedDate.toISOString().split("T")[0]); // Extract YYYY-MM-DD
      setTime(parsedDate.toISOString().split("T")[1].slice(0, 5)); // Extract HH:mm
    }
  }, [isOpen, scheduledAt]);

  const handleSave = () => {
    onSave(date, time);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Schedule Post</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block mb-2 font-medium">Date</label>
            <input
              type="date"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Time</label>
            <input
              type="time"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition mr-2"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition"
            onClick={handleSave}
          >
            Schedule
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScheduleModal;