import { CommandItem } from "@/components/ui/command";
import { Project, projects } from "./projectSelection";

export default function SingleProjectItem({
  project,
  isSelected,
  onSelectedItem,
}: {
  project: Project;
  isSelected: boolean;
  onSelectedItem: (project: Project) => void;
}) {
  // Destructure the project object
  const { name: projectName, tasks, icon: ProjectIcon } = project;
  return <CommandItem>hello</CommandItem>;
}
