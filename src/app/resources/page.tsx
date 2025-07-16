"use client";
import React from "react";

const resources = [
  {
  title: "Striver's A2Z DSA Sheet",
  description:
    "An all-in-one guided roadmap covering Data Structures and Algorithms from basic to advanced, curated by Striver (Take U Forward).",
  link: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/",
},
  {
    title: "Company wise DSA Sheet",
    description:
      "A well-structured DSA sheet organized by companies, helping you prepare for interviews with real questions previously asked by top tech firms like Google, Amazon, and Microsoft.",
    link: "https://docs.google.com/spreadsheets/d/1mvlc8EYc3OVVU3X7NKoC0iZJr_45BL_pVxiJec0r94c/edit?gid=0#gid=0",
  },
  {
    title: "DSA Patternwise Questions List",
    description:
      "Master DSA by solving problems grouped by patterns such as sliding window, two pointers, binary search, and more — an effective way to recognize problem-solving techniques.",
    link: "https://docs.google.com/spreadsheets/d/1GBC4Lhnqk5sz38K2C3IT4NeFAdBW2tl1I4dv_BxhIQQ/edit?gid=0#gid=0",
  },
  {
    title: "DSA Patterns Roadmap",
    description:
      "An open-source GitHub roadmap that breaks down DSA learning into patterns, providing structured guidance and curated resources for beginners to advanced learners.",
    link: "https://github.com/KushalVijay/DSA-Patterns-Roadmap",
  },
  {
    title: "Patternwise DSA with Questions LeetCode",
    description:
      "An insightful LeetCode discussion post listing essential DSA patterns with curated problem links, ideal for strengthening your grasp of pattern-based problem solving.",
    link: "https://leetcode.com/discuss/post/5886397/dsa-patterns-you-need-to-know-by-anubhav-x7og/",
  },
  {
    title: "Companywise DSA Questions",
    description:
      "Explore this GitHub repository for a comprehensive collection of company-specific DSA questions, perfect for targeted preparation before your next tech interview.",
    link: "https://github.com/nishant-Tiwari24/company-wise-dsa",
  },
  {
    title: "Practice Companywise DSA Questions",
    description:
      "WorkAtTech provides a clean interface to practice real-world interview questions, sorted by top tech companies — ideal for focused revision and timed practice.",
    link: "https://workat.tech/problem-solving/lists/top-interview-questions/practice",
  },
];

const ResourcesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-8">
      <div className="max-w-4xl w-full bg-gray-800 p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-extrabold text-center text-white tracking-tight">
          SPARK Community <span className="text-yellow-500">Resources</span>
        </h2>
        <p className="mt-3 text-center text-gray-300 text-lg">
          Explore the following resources to enhance your knowledge and skills.
        </p>
        <div className="mt-6 space-y-4">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="p-4 bg-gray-700 rounded-lg shadow-md hover:bg-gray-600 transition duration-300"
            >
              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-semibold text-yellow-400 hover:underline"
              >
                {resource.title}
              </a>
              <p className="mt-2 text-gray-300">{resource.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
