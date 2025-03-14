import React, { useEffect, useState } from "react";
import CalendarCard from "./../../components/CalendarCard";
import Navbar from "../../components/navbar";
import { getPosts } from "../../api/posts";

const ContentCalendar = () => {
  interface Post {
    id: string;
    title: string;
    content: string;
    status:string;
    scheduledAt: string;
  }
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await getPosts(); // Pass token if needed
        setPosts(response);
      } catch (error: any) {
        console.error("Failed to fetch posts:", error);
        if (error.response?.status === 401) {
          console.error("Token expired or invalid. Redirecting to login...");
          // Handle token expiration (e.g., clear token and redirect)
          localStorage.removeItem("token");
          window.location.href = "/login";
        }
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-10">
        {posts.map((post) => (
          <CalendarCard
            key={post.id}
            postId={post.id}
            title={post.title}
            content={post.content}
            status={post.status}
            scheduledAt={post.scheduledAt}
          />
        ))}
      </div>
    </div>
  );
};

export default ContentCalendar;
