'use client';
import React from 'react'
import { HoverEffect } from './ui/card-hover-effect'
import { motion } from 'framer-motion';
import { LampContainer } from './ui/lamp';
import { Highlight , HeroHighlight } from './ui/hero-highlight';



export const projects = [
    {
      title: "JavaScript",
      description:
        "",
      link: "https://stripe.com",
    },
    {
      title: "TypeScript",
      description:
        "",
      link: "https://netflix.com",
    },
    {
      title: "C++",
      description:
        "",
      link: "https://google.com",
    },
    {
      title: "HTML/HTML5",
      description:
        "",
      link: "https://meta.com",
    },
    {
      title: "CSS",
      description:
        "",
      link: "https://amazon.com",
    },
    {
      title: "Tailwind CSS",
      description:
        "",
      link: "https://microsoft.com",
    },
    {
      title: "React.Js",
      description:
        "",
      link: "https://microsoft.com",
    },
    {
      title: "NextJs",
      description:
        "",
      link: "https://microsoft.com",
    },
    {
      title: "Git/GitHub",
      description:
        "",
      link: "https://microsoft.com",
    },
    {
      title: "Docker",
      description:
        "",
      link: "https://microsoft.com",
    },
    {
      title: "Postman",
      description:
        "",
      link: "https://microsoft.com",
    },
    {
      title: "PlayWright",
      description:
        "",
      link: "https://microsoft.com",
    },
    {
      title: "NodeJs",
      description:
        "",
      link: "https://microsoft.com",
    },
  ];

function Skills() {
  return (
    <HeroHighlight>
    <div className='w-screen'>
      <h2 className="text-center text-4xl text-black dark:text-white mt-24 mb-10">
          <Highlight>Technologies I know</Highlight>
        </h2>
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
    </div>
    </HeroHighlight>
  )
}

export default Skills
