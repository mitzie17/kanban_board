import { ModeToggle } from "@/app/mode-toggle";
import AppName from "./appname";
import Logo from "./logo";
import SearchBar from "./searchbar";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <div className="p-6 flex justify-between items-center">
      {/* Div contains logo and app name*/}
      <div className="flex items-center gap-16">
        <div className="flex items-center gap-2">
          <Logo />
          <AppName />
        </div>
        <SearchBar />
      </div>
      {/* Div contains dropdown and button*/}
      <div className="flex items-center gap-5">
        <ModeToggle />
        <Separator className="h-5 w-[2px] bg-gray-500" />
        <Button className="rounded-3xl h-10 shadow-none">Create Project</Button>
      </div>
    </div>
  );
}
