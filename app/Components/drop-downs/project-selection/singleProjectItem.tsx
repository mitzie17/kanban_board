import { CommandItem } from "@/components/ui/command";
import { Project, projects } from "./projectSelection";
import { IoMdCheckmark } from "react-icons/io";

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
  return (
    <CommandItem
      value={projectName}
      // when user selected the project
      onSelect={(value: string) => {
        // find the project using the find method
        const findProject = projects.find((proj) => proj.name === value);
        // if it is not undefined, use the onSelectedItem function to update the parent component
        // function which is onSelectedProject
        if (findProject) {
          onSelectedItem(findProject);
        }
      }}
      className="cursor-pointer hover:bg-gray-100 rounded-lg p-2"
    >
      <div className="flex items-center justify-between w-full">
        {/* container for project icon and name */}
        <div className="flex items-center gap-3">
          {/* project icon */}
          <div className="size-8 bg-primary flex items-center justify-center rounded-md">
            <ProjectIcon className="text-white" />
          </div>
          {/* container for project name and tasks number */}
          <div className="flex flex-col">
            <span className="font-medium">{projectName}</span>
            <span className="text-[12px] text-gray-500">
              {tasks.length} Tasks
            </span>
          </div>
        </div>
        {/* checkmark for selected project */}
        {isSelected && (
          <div className="text-primary">
            <IoMdCheckmark size={12} />
          </div>
        )}
      </div>
    </CommandItem>
  );
}
