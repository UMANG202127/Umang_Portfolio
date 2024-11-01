'use client';
import React from 'react'
import { HoverEffect } from './ui/card-hover-effect'
import { motion } from 'framer-motion';
import { LampContainer } from './ui/lamp';


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
    // {
    //   title: "C++",
    //   description:
    //     "A multinational technology company that specializes in Internet-related services and products.",
    //   link: "https://google.com",
    // },
    // {
    //   title: "HTML/HTML5",
    //   description:
    //     "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    //   link: "https://meta.com",
    // },
    // {
    //   title: "CSS",
    //   description:
    //     "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    //   link: "https://amazon.com",
    // },
    // {
    //   title: "Tailwind CSS",
    //   description:
    //     "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    //   link: "https://microsoft.com",
    // },
    // {
    //   title: "React.Js",
    //   description:
    //     "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    //   link: "https://microsoft.com",
    // },
    // {
    //   title: "NextJs",
    //   description:
    //     "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    //   link: "https://microsoft.com",
    // },
    // {
    //   title: "Git/GitHub",
    //   description:
    //     "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    //   link: "https://microsoft.com",
    // },
    // {
    //   title: "Docker",
    //   description:
    //     "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    //   link: "https://microsoft.com",
    // },
    // {
    //   title: "Postman",
    //   description:
    //     "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    //   link: "https://microsoft.com",
    // },
    // {
    //   title: "PlayWright",
    //   description:
    //     "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    //   link: "https://microsoft.com",
    // },
    // {
    //   title: "NodeJs",
    //   description:
    //     "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    //   link: "https://microsoft.com",
    // },
  ];

function Skills() {
  return (
    <div>
      
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
    </div>
  )
}

export default Skills
