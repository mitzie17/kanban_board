"use client";

import { useTheme } from "next-themes";
import Navbar from "./Components/navbar/navbar";
import ProjectList from "./Components/projects-list/projectList";

export default function Home() {
  const { theme } = useTheme();
  const backgroundColor = theme === "dark" ? "bg-black" : "bg-gray-200";
  return (
    <div className={`${backgroundColor} border min-h-screen w-full`}>
      <Navbar />
      <div className="grid grid-cols-[3fr_1fr] px-6 mt-8 gap-4 michroma">
        <ProjectList />
      </div>
    </div>
  );
}
