import { useTheme } from "next-themes";
import SingleTask from "./singleTask";

export type Board = {
  name: string;
  createdAt: Date;
  tasks: string[];
};

export default function SingleBoard({ board }: { board: Board }) {
  // deconstructuring the board prop
  const { name: boardName, tasks } = board;
  // use theme hook
  const { theme } = useTheme();
  // storing the task's number
  const numberTasks = tasks.length;

  const backgroundColor = theme === "dark" ? "bg-dark" : "bg-gray-100";
  return (
    // parent container
    <div className="w-full h-full border p-4 rounded-2xl">
      {/* board header */}
      <div
        className={`flex justify-between ${backgroundColor} p-4 rounded-lg items-center`}
      >
        {/* header header */}
        <span className="font-medium text-md">{boardName}</span>
        {/* container for tasks number */}
        <div className="size-6 rounded-full bg-primary text-white flex items-center justify-center">
          <span className="text-sm mt-[2px]">{numberTasks}</span>
        </div>
      </div>
      {/* Tasks container */}
      <div className="mt-7">
        {[1, 2].map((index) => (
          <SingleTask key={index} />
        ))}
      </div>
    </div>
  );
}
