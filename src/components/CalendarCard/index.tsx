import React, { useState } from "react";
import ContentModal, { ContentSettings } from "./RegenerateModal";
import ScheduleModal from "./ScheduleModal";
import EditModal from "./EditModal";
import toast, { Toaster } from "react-hot-toast";
import { publishPost } from "../../api/posts";

interface CalendarCardProps {
  postId: string;
  title: string;
  status: string;
  content: string;
  scheduledAt: string,
  onContentUpdate?: (newContent: string) => void;
}

const CalendarCard = ({ postId, title, content, status, scheduledAt, onContentUpdate }: CalendarCardProps) => {

  const [isContentModalOpen, setIsContentModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"edit" | "regenerate">("edit");
  const [currentContent, setCurrentContent] = useState(content);

  const openContentModal = (type: "edit" | "regenerate") => {
    setModalType(type);
    setIsContentModalOpen(true);
  };

  const openEditModal = (type: "edit" | "regenerate") => {
    setModalType(type);
    setIsEditModalOpen(true);
  };


  const openScheduleModal = () => {
    setIsScheduleModalOpen(true);
  };

  const handleSaveSettings = (settings: ContentSettings, editedContent: string) => {
    console.log("Settings saved:", settings);
    
    // Update the content locally
    setCurrentContent(editedContent);
    
    // If parent component provided an update handler, call it
    if (onContentUpdate) {
      onContentUpdate(editedContent);
    }
  };

  const handleScheduleSave = (date: string, time: string) => {
    console.log(`Content scheduled for ${date} at ${time}`);
    // Implement scheduling logic here
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(currentContent);
    // Optional: Show a toast or notification that content was copied
    alert("Content copied to clipboard!");
  };

  const handlePublish = async (postId: string) => {
    try {

      console.log("PUBLISHING POST")
            
      const res = await publishPost(postId)

      toast.success("Published Post")

  } catch (error) {
      console.error("Error submitting form:", error);
      
      // Show error message
      toast.error( "Failed to publish post. Please try again.");
  }
  }

  return (
    <div className="bg-white border rounded-xl shadow-md p-6 w-100">
      <h2 className="text-lg font-semibold font-primary mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{currentContent}</p>
      
      <div className="flex justify-between mt-4 font-primary">
        <button 
          className="bg-white text-gray-800 py-2 px-6 rounded-lg border border-gray-300 hover:bg-gray-50 transition font-medium"
          onClick={() => openEditModal("edit")}
        >
          Edit
        </button>
        
        <div className="flex space-x-2">
        {
            scheduledAt && !isNaN(new Date(scheduledAt).getTime()) ? (
                <span className="bg-white text-gray-800 transition">
                    ⏰ { " "}
                    {new Date(scheduledAt).toLocaleString("en-US", {
                        day: "numeric",
                        month: "short",
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: false,
                    })}
                </span>
            ) : (
                <></>
            )
        }
          <button 
            className="bg-white text-gray-800 py-2 px-6 rounded-lg border border-gray-300 hover:bg-gray-50 transition font-medium"
            onClick={() => openContentModal("regenerate")}
          >
            Regenerate
          </button>
          
          <button 
            className="bg-white text-gray-800 p-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition flex items-center justify-center w-12 h-12"
            onClick={handleCopy}
            title="Copy content"
          >
            📄
            {/* <Copy className="h-5 w-5" /> */}
          </button>
          
          <button 
            className="bg-white text-gray-800 p-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition flex items-center justify-center w-12 h-12"
            onClick={openScheduleModal}
            title="Schedule post"
          >
            ⏰
            {/* <Clock className="h-5 w-5" /> */}

          </button>
          
          {
            status === "published" ? 
            <button 
            className="bg-zinc-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition font-medium"
           disabled={true}
          >
            Published
          </button>
            :
          
          <button 
            className="bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition font-medium"
            onClick={async() => await handlePublish(postId)}
          >
            Post
          </button>
}
        </div>
      </div>

      {/* Content Modal */}
      <ContentModal 
        postId={postId}
        scheduledAt={scheduledAt}
        isOpen={isContentModalOpen}
        onClose={() => setIsContentModalOpen(false)}
        onSave={handleSaveSettings}
        initialContent={currentContent}
        modalType={modalType}
      />

       {/* Content Modal */}
       <EditModal 
        // scheduledAt={scheduledAt}
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSave={handleSaveSettings}
        initialContent={currentContent}
        postId={postId}
        // modalType={modalType}
      />

      {/* Schedule Modal */}
      <ScheduleModal
        scheduledAt={scheduledAt}
        isOpen={isScheduleModalOpen}
        onClose={() => setIsScheduleModalOpen(false)}
        onSave={handleScheduleSave}
      />
    <Toaster position={"bottom-right"}/>
    </div>
  );
};

export default CalendarCard;