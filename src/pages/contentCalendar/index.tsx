import React from "react";
import CalendarCard from "./../../components/CalendarCard";
import Navbar from "../../components/navbar";

const posts = [
  {
    day: "Day 1",
    content: "Just shipped a major update at Indian government, central government! 🚀\n\nWe solved... #Tech #Innovation #PublicPolicy",
  },
  {
    day: "Day 2",
    content: "Another exciting launch... #Tech #Innovation",
  },
  {
    day: "Day 3",
    content: "Expanding awareness about policies... #GovTech #PublicPolicy",
  },
  {
    day: "Day 4",
    content: "User adoption insights... #Growth #Product",
  },
  {
    day: "Day 5",
    content: "New feature rollout! #Innovation #AI",
  },
  {
    day: "Day 6",
    content: "Reflections on progress... #Leadership #Tech",
  }
];

const ContentCalendar = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar/>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-10">
        {posts.map((post, index) => (
          <CalendarCard key={index} day={post.day} content={post.content} />
        ))}
      </div>
    </div>
  );
};

export default ContentCalendar;
