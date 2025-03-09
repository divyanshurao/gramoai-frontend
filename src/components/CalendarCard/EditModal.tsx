import React, { useState, useEffect, useRef } from "react";
import ContentModal from "./RegenerateModal"; // Import the ContentModal component

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (settings: ContentSettings, editedContent: string) => void;
  initialContent: string;
}

export interface ContentSettings {
  length: "Shorter" | "Longer";
  style: "Funny" | "Professional" | "Insightful" | "Motivational";
  pointOfView: "First person" | "Second person" | "Third person";
  linkedInUrl?: string;
  personalComments?: string;
  scheduledDate?: string;
  scheduledTime?: string;
}

const EditModal: React.FC<ModalProps> = ({ 
  isOpen, 
  onClose, 
  onSave, 
  initialContent,
}) => {
  const [settings, setSettings] = useState<ContentSettings>({
    length: "Shorter",
    style: "Professional",
    pointOfView: "First person",
    linkedInUrl: "",
    personalComments: "",
  });
  
  const [editedContent, setEditedContent] = useState(initialContent);
  const [isContentModalOpen, setIsContentModalOpen] = useState(false); // State to control ContentModal visibility
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (isOpen) {
      const savedSettings = localStorage.getItem("contentSettings");
      if (savedSettings) {
        setSettings(JSON.parse(savedSettings));
      }
      setEditedContent(initialContent);

      // Focus on the textarea
      if (textareaRef.current) {
        textareaRef.current.focus();
      }
    }
  }, [isOpen, initialContent]);

  const handleSave = () => {
    localStorage.setItem("contentSettings", JSON.stringify(settings));
    onSave(settings, editedContent);
    onClose();
  };

  const handleChange = (field: keyof ContentSettings, value: string) => {
    setSettings((prev) => ({ ...prev, [field]: value }));
  };

  const handleRegenerate = () => {
    setIsContentModalOpen(true); // Open the ContentModal
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl p-6 w-full max-w-6xl max-h-[90vh] flex">
          {/* Content Editor - Left Side (40%) */}
          <div className="w-full pr-3 flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">
                Edit Content
              </h2>
              <button 
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>
            <div className="mb-6 flex-grow">
              <textarea
                ref={textareaRef}
                className="w-full p-3 border border-gray-300 rounded-lg h-[calc(60vh-10rem)]"
                value={editedContent}
                onChange={(e) => setEditedContent(e.target.value)}
              />
            </div>
            <div className="flex space-x-2 justify-end">
              <button 
                className="bg-white text-gray-800 p-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition flex items-center justify-center"
                onClick={handleRegenerate} // Open ContentModal on click
              >
                Regenerate
              </button>
              <button 
                className="bg-indigo-600 text-white p-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition flex items-center justify-center"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ContentModal */}
      {isContentModalOpen && (
        <ContentModal
          isOpen={isContentModalOpen}
          onClose={() => setIsContentModalOpen(false)} // Close ContentModal
          onSave={(settings, content) => {
            setEditedContent(content); // Update content in EditModal
            setIsContentModalOpen(false); // Close ContentModal after saving
          }}
          initialContent={editedContent} // Pass the current content to ContentModal
          scheduledAt="" // Add this if needed
          modalType="regenerate" // Set modalType to "regenerate"
        />
      )}
    </>
  );
};

export default EditModal;