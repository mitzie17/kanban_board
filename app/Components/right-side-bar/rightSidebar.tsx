import { Card } from "@/components/ui/card";
import CircularProgress from "./circularProgress";
import TasksStats from "./tasksStats";
import ProjectSelection from "../drop-downs/project-selection/projectSelection";

export default function RightSidebar() {
  return (
    <Card className="shadow-none p-6 rounded-3xl max-h-[640px]">
      <div className="flex flex-col gap-0">
        <ProjectSelection />
        <CircularProgress />
        <TasksStats />
      </div>
    </Card>
  );
}
