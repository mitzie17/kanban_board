import SingleBoard, { Board } from "./singleBoard";

export default function ProjectsListBoards() {
  const boards: Board[] = [
    { name: "Yet to start", createdAt: new Date(), tasks: [] },
    { name: "In progress", createdAt: new Date(), tasks: [] },
    { name: "Completed", createdAt: new Date(), tasks: [] },
  ];
  return (
    <div className="h-full rouded-2xl flex items-center mt-4 gap-3">
      {boards.map((board, index) => (
        <SingleBoard key={index} board={board} />
      ))}
    </div>
  );
}
