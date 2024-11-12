'use client';
import React from 'react'
import { FloatingDock } from './ui/floating-dock'
import {
    IconBrandGithub,
    IconBrandGmail,
    IconBrandLinkedin,
    IconBrandX,
    IconExchange,
    IconFile,
    IconHome,
    IconNewSection,
    IconTerminal2,
  } from "@tabler/icons-react";
  import Image from "next/image";

function Contactme() {

    const links = [
        {
          title: "Home",
          icon: (
            <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "",
        },
     
        {
          title: "Projects",
          icon: (
            <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "#",
        },
        {
          title: "Resume",
          icon: (
            <IconFile className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "#",
        },
        {
          title: "Umang",
          icon: (
            <Image
              src="/images/umang.jpg"
              width={50}
              height={50}
              alt="Umang"
            />
          ),
          href: "",
        },
        {
          title: "G-Mail",
          icon: (
            <IconBrandGmail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "#",
        },
     
        {
          title: "LinkedIn",
          icon: (
            <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "#",
        },
        {
          title: "GitHub",
          icon: (
            <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "#",
        },
      ];

  return (
    <div className="flex py-16 justify-center w-full bg-gradient-to-b from-blue-100 to-purple-50 dark:from-neutral-950 dark:to-neutral-800">
      <FloatingDock
        items={links}
      />
    </div>
  )
}

export default Contactme
