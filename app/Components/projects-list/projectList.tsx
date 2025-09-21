import { Card } from "@/components/ui/card";
import ProjectsListBoards from "./projects-list-boards/projectsListBoards";
import ProjectsListHeader from "./projects-list-header/projectsListHeader";

export default function ProjectList() {
  return (
    <div>
      <Card>
        <ProjectsListHeader />
        <ProjectsListBoards />
      </Card>
    </div>
  );
}
