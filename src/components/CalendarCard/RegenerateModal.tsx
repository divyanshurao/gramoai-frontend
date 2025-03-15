import React, { useState, useEffect, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { regeneratePost, updatePost } from "../../api/posts";

interface ModalProps {
  postId: string;
  isOpen: boolean;
  onClose: () => void;
  onSave: (settings: ContentSettings, editedContent: string) => void;
  initialContent: string;
  scheduledAt: string;
  modalType: "edit" | "regenerate";
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

const ContentModal: React.FC<ModalProps> = ({ 
  postId,
  isOpen, 
  onClose, 
  onSave, 
  initialContent,
  modalType 
}) => {
  const [settings, setSettings] = useState<ContentSettings>({
    length: "Shorter",
    style: "Professional",
    pointOfView: "First person",
    linkedInUrl: "",
    personalComments: "",
  });
  
  const [editedContent, setEditedContent] = useState(initialContent);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (isOpen) {
      const savedSettings = localStorage.getItem("contentSettings");
      if (savedSettings) {
        setSettings(JSON.parse(savedSettings));
      }
      setEditedContent(initialContent);

      // Focus on the textarea if modalType is "edit"
      if (modalType === "edit" && textareaRef.current) {
        textareaRef.current.focus();
      }
    }
  }, [isOpen, initialContent, modalType]);

  const handleSave = async (postId: string) => {
    localStorage.setItem("contentSettings", JSON.stringify(settings));
    onSave(settings, editedContent);
    
        try {
                
          const res = await regeneratePost(postId, editedContent)          
          console.log(res)

          setEditedContent(res.content)

          try {
            const updateRes = await updatePost(postId, res.content)
            toast.success("Post Regenerated");
            onSave(settings, res.content);
            onClose()

          } catch (error){
            console.error("Error updating regenerration:", error);
          
          // Show error message
          toast.error( "Failed to upadate post. Please try again."); 
          }
    
      } catch (error) {
          console.error("Error submitting form:", error);
          
          // Show error message
          toast.error( "Failed to generate content calendar. Please try again.");
    };
    }

  const handleChange = (field: keyof ContentSettings, value: string) => {
    setSettings((prev) => ({ ...prev, [field]: value }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-6xl max-h-[90vh] flex">
        <Toaster position={"bottom-right"}/>
        <div className="w-2/3 pr-6 flex flex-col">
          <div className="mb-6 flex-grow">
            <label className="block mb-2 font-medium">Content</label>
            <textarea
              ref={textareaRef}
              className="w-full p-3 border border-gray-300 rounded-lg h-[calc(90vh-8rem)]"
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
              autoFocus={modalType === "edit"}
            />
          </div>
        </div>

        {/* Settings - Right Side (60%) */}
        <div className="w-3/5 space-y-6 overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">
              {modalType === "edit" ? "Edit Content" : "Improve your content with the following prompts"}
            </h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
          </div>

          {/* Length Section */}
          <div>
            <label className="block mb-2 font-medium">Length</label>
            <div className="flex gap-2">
              {["Shorter", "Longer"].map((option) => (
                <button
                  key={option}
                  className={`px-4 py-2 rounded-lg ${
                    settings.length === option 
                      ? "bg-gray-900 text-white" 
                      : "bg-white border border-gray-300 text-gray-700"
                  }`}
                  onClick={() => handleChange("length", option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Style Section */}
          <div>
            <label className="block mb-2 font-medium">Style</label>
            <div className="flex flex-wrap gap-2">
              {["Funny", "Professional", "Insightful", "Motivational"].map((option) => (
                <button
                  key={option}
                  className={`px-4 py-2 rounded-lg ${
                    settings.style === option 
                      ? "bg-gray-900 text-white" 
                      : "bg-white border border-gray-300 text-gray-700"
                  }`}
                  onClick={() => handleChange("style", option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Point of view Section */}
          <div>
            <label className="block mb-2 font-medium">Point of view</label>
            <div className="flex flex-wrap gap-2">
              {["First person", "Second person", "Third person"].map((option) => (
                <button
                  key={option}
                  className={`px-4 py-2 rounded-lg ${
                    settings.pointOfView === option 
                      ? "bg-gray-900 text-white" 
                      : "bg-white border border-gray-300 text-gray-700"
                  }`}
                  onClick={() => handleChange("pointOfView", option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* LinkedIn URL */}
          <div>
            <label className="block mb-2 font-medium">Reference LinkedIn post</label>
            <input
              type="text"
              placeholder="Add url"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={settings.linkedInUrl || ""}
              onChange={(e) => handleChange("linkedInUrl", e.target.value)}
            />
          </div>

          {/* Personal Comments */}
          <div>
            <label className="block mb-2 font-medium">Your personal comments</label>
            <textarea
              placeholder="People usually add personal thoughts, statistics, any links they want to add etc. Keep it short."
              className="w-full p-2 border border-gray-300 rounded-lg min-h-24"
              value={settings.personalComments || ""}
              onChange={(e) => handleChange("personalComments", e.target.value)}
            />
          </div>

          <div className="mt-6 flex justify-end">
            <button
              className="bg-gray-900 text-white py-2 px-6 rounded-lg hover:bg-gray-800 transition"
              onClick={async () => await handleSave(postId)}
            >
              {modalType === "edit" ? "Save" : "Re-generate"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentModal;