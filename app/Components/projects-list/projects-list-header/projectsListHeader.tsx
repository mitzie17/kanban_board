import { MdOutlineSortByAlpha } from "react-icons/md";

export default function ProjectsListHeader() {
  return (
    <div className="flex justify-between items-center">
      {/* Div contains title */}
      <div className="flex gap-3 items-center">
        <span className="text-2xl font-bold">Projects</span>
      </div>
      {/* Div contains label, icon, dropdown */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          <MdOutlineSortByAlpha className="text-xl text-gray-500" />
          <span className="text-gray-500 text-sm">Sort</span>
        </div>
      </div>
    </div>
  );
}
