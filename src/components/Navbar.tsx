"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/libs/util";
import { Moon, MoonIcon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"




function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);

    
    const { setTheme } = useTheme()
    
  

    return (
        <div className={cn("fixed top-5 inset-x-0 max-w-3xl mx-auto z-50", className)}>
            <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="UMANG">       
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="JOURNEY">
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="PROJECTS">
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="SKILLS">
        </MenuItem>

        <div className="py-0">
        <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          <Sun className="h-[1rem] w-[1rem] text-black rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1rem] w-[1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white border-black/[0.2] dark:bg-black dark:border-white/[0.2] mt-1" align="end">
        <DropdownMenuItem className="cursor-pointer text-black dark:text-white" onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer text-black dark:text-white" onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer text-black dark:text-white" onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
        </div>
      </Menu>
        </div>
    )
}

export default Navbar
