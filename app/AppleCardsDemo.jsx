"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/AppleCard"; // Adjusted import path

import img1 from '../public/images/servicesimg1.jpg';
import img2 from '../public/images/servicesimg2.jpg';
import img3 from '../public/images/servicesimg3.jpg';
import img4 from '../public/images/servicesimg4.jpg';
import img5 from '../public/images/servicesimg5.jpg';
import img6 from '../public/images/servicesimg6.jpg';


export default function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      {/* <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-white dark:text-neutral-200 font-sans">
        Get to know your iSad.
      </h2> */}
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => (
        <div
          key={"dummy-content-" + index}
          className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
        >
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
              The first rule of Apple club is that you boast about Apple club.
            </span>{" "}
            Keep a journal, quickly jot down a grocery list, and take amazing
            class notes. Want to convert those notes to text? No problem.
            Langotiya jeetu ka mara hua yaar is ready to capture every
            thought.
          </p>
          <Image
            src="https://assets.aceternity.com/macbook.png"
            alt="Macbook mockup from Aceternity UI"
            height={500}
            width={500}
            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
          />
        </div>
      ))}
    </>
  );
};

const data = [
  {
    category: "AI In Health",
    title: "Revolutionizing Health with AI",
    src: img1,
    content: <DummyContent />,
  },
  {
    category: "Fintech",
    title: "Innovating Finance with Technology",
    src: img2,
    content: <DummyContent />,
  },
  {
    category: "Digital Marketing",
    title: "Transforming Brand Through Targeted Marketing",
    src: img3,
    content: <DummyContent />,
  },
  {
    category: "AI & MLOps",
    title: "Optimizing Operations with AI",
    src: img4,
    content: <DummyContent />,
  },
  {
    category: "Data Science",
    title: "Transforming Data into Insights",
    src: img5,
    content: <DummyContent />,
  },
  {
    category: "Frontend Development",
    title: "Crafting Engaging User Experiences",
    src: img6,
    content: <DummyContent />,
  },
  // {
  //   category: "iOS",
  //   title: "Photography just got better.",
  //   src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   content: <DummyContent />,
  // },
  // {
  //   category: "Hiring",
  //   title: "Hiring for a Staff Software Engineer",
  //   src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   content: <DummyContent />,
  // },
];
