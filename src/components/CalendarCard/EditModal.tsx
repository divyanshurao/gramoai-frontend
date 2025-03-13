import React, { useState, useEffect, useRef } from "react";
import ContentModal from "./RegenerateModal";
import Cookies from "js-cookie";
import { updatePost } from "../../api/posts";
import toast, { Toaster } from "react-hot-toast";
import { Smartphone, Tablet, Monitor, Globe } from "lucide-react";

// Import SVG assets
import LikeIcon from "../../assets/linkedin/like.svg";
import CelebrateIcon from "../../assets/linkedin/celebrate.svg";
import SupportIcon from "../../assets/linkedin/support.svg";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (settings: ContentSettings, editedContent: string) => void;
  initialContent: string;
  postId: string;
}

interface UserData {
  name: string;
  // Add other properties as needed
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
  postId,
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
  const [isContentModalOpen, setIsContentModalOpen] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [activeDevice, setActiveDevice] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
const [userData, setUserData] = useState<UserData | null>(null);

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

      const token = Cookies.get("auth_token");
      if (token) {
        try {
          const decoded = JSON.parse(atob(token.split(".")[1])); // Decode JWT
          setUserData(decoded.user);
        } catch (error) {
          console.error("Failed to decode auth token", error);
        }
      }
    }
  }, [isOpen, initialContent]);

  const handleSave = async (postId: string) => {
    localStorage.setItem("contentSettings", JSON.stringify(settings));
    onSave(settings, editedContent);

    try {
      const res = await updatePost(postId, editedContent);
      toast.success("Post updated");
      onClose();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to generate content calendar. Please try again.");
    }
  };

  const handleChange = (field: keyof ContentSettings, value: string) => {
    setSettings((prev) => ({ ...prev, [field]: value }));
  };

  const handleRegenerate = () => {
    setIsContentModalOpen(true);
  };

  // Enhanced function to format content with highlights for hashtags, mentions, and links
  const formatContentWithLineBreaks = (content: string) => {
    const lines = content.split('\n');
    
    return lines.map((line, lineIndex) => {
      // Regex patterns for hashtags, mentions, and URLs
      const hashtagPattern = /(#\w+)/g;
      const mentionPattern = /(@\w+)/g;
      const urlPattern = /(https?:\/\/[^\s]+)/g;
      
      // Split the line into parts based on matches
      let parts: React.ReactNode[] = [];
      let lastIndex = 0;
      
      // Process the line to find and highlight patterns
      let combinedPattern = new RegExp(`${hashtagPattern.source}|${mentionPattern.source}|${urlPattern.source}`, 'g');
      let match;
      
      while ((match = combinedPattern.exec(line)) !== null) {
        // Add text before the match
        if (match.index > lastIndex) {
          parts.push(line.substring(lastIndex, match.index));
        }
        
        const matchedText = match[0];
        
        // Check which pattern matched and style accordingly
        if (matchedText.startsWith('#')) {
          // Hashtag
          parts.push(<span key={`${lineIndex}-${match.index}`} className="text-blue-600 font-bold">{matchedText}</span>);
        } else if (matchedText.startsWith('@')) {
          // Mention
          parts.push(<span key={`${lineIndex}-${match.index}`} className="text-blue-600 font-bold">{matchedText}</span>);
        } else if (matchedText.startsWith('http')) {
          // URL - transform to lnkd.in format
          const shortenedUrl = `https://lnkd.com/${Math.random().toString(36).substring(2, 10)}`;
          parts.push(
            <a 
              key={`${lineIndex}-${match.index}`} 
              href="#" 
              className="text-blue-600"
              onClick={(e) => e.preventDefault()}
            >
              {shortenedUrl}
            </a>
          );
        }
        
        lastIndex = match.index + matchedText.length;
      }
      
      // Add any remaining text after the last match
      if (lastIndex < line.length) {
        parts.push(line.substring(lastIndex));
      }
      
      // If there were no matches, just return the line
      if (parts.length === 0) {
        parts.push(line);
      }
      
      return (
        <React.Fragment key={lineIndex}>
          {parts}
          {lineIndex < lines.length - 1 && <br />}
        </React.Fragment>
      );
    });
  };

  if (!isOpen) return null;

  return (
    <>
      <Toaster position="bottom-right" />
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl p-0 w-full max-w-4xl h-[600px] flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <h2 className="text-lg font-bold font-primary">Edit Post</h2>
            <div className="flex items-center space-x-6">
              {/* Device preview buttons using Lucide icons */}
              <div className="flex space-x-2 ">
                <button 
                  onClick={() => setActiveDevice('mobile')}
                  className={`p-1 bg-gray-100 ${activeDevice === 'mobile' ? 'text-blue-600' : 'text-gray-500'}`}
                >
                  <Smartphone size={20} />
                </button>
                <button 
                  onClick={() => setActiveDevice('tablet')}
                  className={`p-1 bg-gray-100 ${activeDevice === 'tablet' ? 'text-blue-600' : 'text-gray-500'}`}
                >
                  <Tablet size={20} />
                </button>
                <button 
                  onClick={() => setActiveDevice('desktop')}
                  className={`p-1 bg-gray-100 ${activeDevice === 'desktop' ? 'text-blue-600' : 'text-gray-500'}`}
                >
                  <Monitor size={20} />
                </button>
              </div>
              <button 
                onClick={onClose}
                className="text-gray-800 hover:text-gray-800 text-xl bg-gray-100 rounded-full px-4 py-2"
              >
                ×
              </button>
            </div>
          </div>
          
          {/* Main content - Fixed height container */}
          <div className="flex flex-1 h-[calc(100px-120px)] overflow-hidden">
            {/* Editor section - Left Side */}
            <div className="w-1/2 p-3 flex flex-col border-r border-gray-200">
              
              {/* Text area with fixed height and scroll */}
              <textarea
                ref={textareaRef}
                className="w-full p-2 flex-grow border-r boder-gray-200 resize-none overflow-y-auto"
                style={{ height: "calc(100% - 120px)" }}
                value={editedContent}
                onChange={(e) => setEditedContent(e.target.value)}
                placeholder="What do you want to talk about?"
              />
            </div>
            
            {/* Preview section - Right Side */}
            <div className="w-1/2 bg-gray-100 p-6 flex flex-col overflow-auto" style={{ maxHeight: "calc(600 - 120px)" }}>
              <div className={`bg-white rounded-lg shadow mx-auto ${activeDevice === 'mobile' ? 'w-72' : activeDevice === 'tablet' ? 'w-80' : 'w-full'}`}>
              <div className="p-4">
                {/* Profile header */}
                <div className="flex items-center mb-3">
                <div className="w-12 h-12 bg-indigo-200 rounded-full mr-3"></div>
                <div>
                  <div className="h-5 w-32 rounded font-bold">{userData?.name || "Gramo AI"}</div>
                  <div className="flex items-center text-xs text-gray-500 mt-1">
                  <span>1m</span>
                  <span className="mx-1">•</span>
                  <Globe size={12} />
                  </div>
                </div>
                </div>
                
                {/* Post content with proper line breaks and highlighted elements */}
                <div className="text-sm my-4 leading-relaxed overflow-y-auto" style={{ maxHeight: "200px" }}>
                {editedContent ? 
                  formatContentWithLineBreaks(editedContent) : 
                  "What do you want to talk about?"}
                </div>
                
                {/* Engagement metrics with LinkedIn SVG reactions */}
                <div className="flex justify-between items-center text-xs text-gray-500 mt-6 pt-3">
                <div className="flex items-center">
                    <div className="flex -space-x-2">
                    <img src={LikeIcon} alt="Like" className="w-5 h-5" />
                    <img src={CelebrateIcon} alt="Celebrate" className="w-5 h-5" />
                    <img src={SupportIcon} alt="Support" className="w-5 h-5" />
                    </div>
                  <span className="ml-1">1,423</span>
                </div>
                <div>
                  <span>215 comments</span>
                  <span> • </span>
                  <span>19 reposts</span>
                </div>
                </div>
              </div>
              </div>
              
              {/* Action buttons - Fixed at bottom */}
              <div className="mt-auto pt-4 flex justify-end space-x-3">
              <button 
                className="px-4 py-2 text-gray-700 bg-transparent border border-gray-300 rounded-full"
                onClick={handleRegenerate}
              >
                Regenerate
              </button>
              <button 
                className="px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700"
                onClick={() => handleSave(postId)}
              >
                Save
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ContentModal */}
      {isContentModalOpen && (
        <ContentModal
          postId={postId}
          isOpen={isContentModalOpen}
          onClose={() => setIsContentModalOpen(false)}
          onSave={(settings, content) => {
            setEditedContent(content);
            setIsContentModalOpen(false);
          }}
          initialContent={editedContent}
          scheduledAt=""
          modalType="regenerate"
        />
      )}
    </>
  );
};

export default EditModal;