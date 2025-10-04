import { Dispatch, SetStateAction } from "react";
import { Project, projects } from "./projectSelection";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandList,
} from "@/components/ui/command";
import SingleProjectItem from "./singleProjectItem";

export default function ProjectCommandItems({
  selectedProject,
  setSelectedProject,
}: {
  selectedProject: Project;
  setSelectedProject: Dispatch<SetStateAction<Project>>;
}) {
  function handleProjectSelect(project: Project) {
    setSelectedProject(project);
  }
  return (
    <Command>
      <CommandInput placeholder="Search a project..." />
      <CommandList className="my-3">
        <CommandEmpty>No results found.</CommandEmpty>
      </CommandList>
      <div>
        {/* map through each projects array and call it the singleProject command item and pass the props */}
        {projects.map((project, index) => (
          <SingleProjectItem
            // project item
            project={project}
            key={index}
            // callback function
            onSelectedItem={handleProjectSelect}
            // the isSelected based on the condition of selected project name is equal of the project name in the array
            isSelected={selectedProject.name === project.name}
          />
        ))}
      </div>
    </Command>
  );
}
