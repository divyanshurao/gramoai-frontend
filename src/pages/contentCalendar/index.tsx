import React, { useEffect, useState } from "react";
import CalendarCard from "./../../components/CalendarCard";
import Navbar from "../../components/navbar";
import { getPosts } from "../../api/posts";

const ContentCalendar = () => {
  interface Post {
    title: string;
    content: string;
    scheduledAt: string;
  }
  
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await getPosts();
        setPosts(response);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-10">
        {posts.map((post, index) => (
          <CalendarCard key={index} title={post.title} content={post.content} scheduledAt={post.scheduledAt}/>
        ))}
      </div>
    </div>
  );
};

export default ContentCalendar;