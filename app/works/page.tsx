/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { motion } from "framer-motion";
import { works } from "@/components/db";
import Link from "next/link";
import Footer from "@/components/footer";

function page() {
  return (
    <main className=" mt-10 px-8 lg:px-14  pb-10 lg:mb-0 ">
      <section className="mt-24 border-2 px-8 border-gray-500">
        <div className="my-3">
          <h1 className="text-3xl lg:text-5xl  bg-gradient-to-r from-gray-500 to-gray-100 bg-clip-text text-transparent">
            "Experience Creativity"
          </h1>
          <p className="text-gray-400 text-lg my-4 w-auto lg:w-96">
            I've come a long way from the begining.I'm not there yet , but I'm
            on my way
          </p>
        </div>

        {/* List title */}
        <div className="flex justify-end ">
          <div>
            <span></span>
          </div>
          <div>
            <ul className="text-lg text-left lg:text-right text-gray-400 mt-5 list-square ">
              <li>Projects(Design & Develop)</li>
            </ul>
          </div>
        </div>
        <section className="flex  justify-end my-2">
          <div>
            <span></span>
          </div>
          <div className="">
            {/* List of projects go here */}
            <div className="mb-10 mt-4">
              {works.map((worksfunc) => {
                const { id, name, link, description } = worksfunc;
                return (
                  <motion.div key={id} whileHover={{ scale: 1.1 }}>
                    <Link href={link}>
                      <ul className="py-5 ">
                        <li className="text-4xl lg:text-6xl  text-right text-gray-600 hover:text-gray-400 justify-center rounded-full">
                          <span className="text-sm font-thin text-gray-400">
                            {description}
                          </span>
                          {name}
                        </li>
                      </ul>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
        <Footer />
      </section>
    </main>
  );
}

export default page;
