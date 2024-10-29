"use client"

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { BackgroundBeamsWithCollision } from "./ui/background-beams";


const words = "Recent graduate with a degree in Computer Science and a passion for building seamless and functional user interfaces. With over 1 year of industrial experience in Front-End Development, I specialize in building high performance web application using NextJs and ReactJs. Proficient with CSS and JS Frameworks, withextensive knowledge of UX and User psychology.";


function Landing() {
  return (
    <BackgroundBeamsWithCollision className="mt-20 md:mt-28">
        <div className="flex flex-col lg:flex-row items-center justify-center space-x-10">
            <div>
            <div className="max-w-7xl relative mx-auto pt-20 md:pt-30 px-4 w-full  left-0 top-0">
      <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold dark:text-white">
        The Ultimate <br />Front-end Developer 
      </h1>

      <TextGenerateEffect
      className="max-w-2xl text-base lg:text-xl mt-8 dark:text-neutral-200"
      words={words} />
      {/* <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
      Recent graduate with a degree in Computer Science and a passion for building seamless and functional
user interfaces. With over 1 year of industrial experience in <Highlight> Front-End Development, </Highlight>I specialize in building high performance web application using <Highlight> NextJs and ReactJs.</Highlight> Proficient with CSS and JS Frameworks, with extensive knowledge of UX and User psychology.
      </p> */}
    </div>
            </div>
            <div className="">
                <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          UMANG
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Front-end Developer <br /> Gugugram, Haryana
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/images/umang.jpg"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Contact Me
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Download CV
          </CardItem>
        </div>
      </CardBody>
                </CardContainer>
            </div>
        </div>
    </BackgroundBeamsWithCollision>
  )
}

export default Landing
