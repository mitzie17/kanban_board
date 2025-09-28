import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";

import { JSX } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";

type MenuItem = {
  icon: JSX.Element;
  label: string;
  className: string;
  separator?: undefined;
};

export default function TasksDropDown() {
  const menuItems: MenuItem[] = [
    { icon: <FaRegEdit />, label: "Edit Task", className: "" },
    {
      icon: <MdOutlineDelete className="text-lg" />,
      label: "Delete Task",
      className: "text-red-600",
    },
  ];
  return (
    <div>
      <DropdownMenu>
        {/* trigger dropdown */}
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            {/* this displays the three dots */}
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="michroma">
          {menuItems.map((item, index) =>
            item.separator ? (
              <DropdownMenuSeparator key={index} />
            ) : (
              <DropdownMenuItem
                key={index}
                className={`flex items-center gap-1 p-[10px] ${item.className}`}
              >
                {item.icon} <span>{item.label}</span>
              </DropdownMenuItem>
            )
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
