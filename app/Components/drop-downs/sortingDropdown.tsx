import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoMdArrowDown, IoMdArrowUp } from "react-icons/io";

const options = ["A-Z", "Z-A"];

export default function SortingDropdown() {
  // selection option state
  const [selectedOption, setSelectedOption] = useState("A-Z");
  return (
    <DropdownMenu>
      {/* trigger button */}
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          {/* If selected option is A-Z the down arrow will be displayed if not then the up arrow will be displayed */}
          <span className="font-medium text-sm">{selectedOption}</span>
          {selectedOption === "A-Z" ? (
            <IoMdArrowDown className="text-sm" />
          ) : (
            <IoMdArrowUp className="text-sm" />
          )}
        </Button>
      </DropdownMenuTrigger>
      {/* the options A-Z and Z-A are mapped to be displayed in the dropdown items */}
      <DropdownMenuContent className="w-20 michroma">
        {options.map((option, index) => (
          <DropdownMenuCheckboxItem
            key={index}
            className="h-9"
            /* the check will be based on the condition of the selected options state is equal to the option in the array */
            checked={selectedOption === option}
            /* when an option is selected, the state will be updated */
            onCheckedChange={() => setSelectedOption(option)}
          >
            {option}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
