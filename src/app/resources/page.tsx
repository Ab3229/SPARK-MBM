"use client";
import React from "react";

const resources = [
  {
    title: "DSA Patterns Roadmap",
    description:
      "Embark on a structured journey through Data Structures and Algorithms with this comprehensive, self-paced course. From foundational principles to advanced techniques, each module is designed to build your proficiency through hands-on coding challenges, ensuring a deep and practical understanding of DSA concepts.",
    link: "https://github.com/KushalVijay/DSA-Patterns-Roadmap",
  },
  {
    title: "Patternwise DSA with Questions LeetCode",
    description:
      "Dive into algorithm design and analysis with this in-depth course tailored for those seeking a rigorous academic approach. Organized by patterns, it offers a curated set of problems from LeetCode, enabling learners to recognize and apply common strategies across various challenges, thereby enhancing problem-solving skills.",
    link: "https://leetcode.com/discuss/post/5886397/dsa-patterns-you-need-to-know-by-anubhav-x7og/",
  },
  {
    title: "Companywise DSA Questions",
    description:
      "Prepare for technical interviews with this extensive compilation of Data Structures and Algorithms questions categorized by companies. By focusing on problems previously posed by top tech firms, this resource aids in targeted practice, helping you align your problem-solving abilities with the expectations of potential employers.",
    link: "https://github.com/nishant-Tiwari24/company-wise-dsa",
  },
  {
    title: "Practice Companywise DSA Questions",
    description:
      "Enhance your coding proficiency with this platform offering a curated list of top interview questions, organized by company. Through consistent practice of these problems, you can develop the skills and confidence necessary to excel in technical interviews and secure positions at leading organizations.",
    link: "https://workat.tech/problem-solving/lists/top-interview-questions/practice",
  },
  // Add more resources as needed
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
