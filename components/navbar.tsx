"use client";
import Image from "next/image";
import { Logo } from "./img";
import { Navlinks } from "./db";
import Link from "next/link";
import { BtnPrimary } from "./btns";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false); // State to manage the full screen Menu.If false it is closed and if true it is opened
  const [menuBtnState, setMenuBtnState] = useState(false); // State to manage the hamburger Menu.If false it is closed and if true it is opened
  const [openBtn, setBtnOpen] = useState(false);
  const [navColor, setNavColor] = useState(false);

  //navbar scroll changeBackground function
  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });

  const handleHanburgerManu = () => {
    if (!menuBtnState) {
      //open
      setMenuBtnState(true);
      setOpen(true);
      setBtnOpen(true);
    } else {
      //close
      setMenuBtnState(false);
      setOpen(false);
      setBtnOpen(false);
    }
  };
  const hideMenu = () => {
    if (open) {
      setOpen(false);
      setMenuBtnState(false);
      setBtnOpen(false);
    }
  };
  return (
    <nav
      className={` ${
        pathname === "/studio" && "hidden"
      }flex relative z-[450] flex-col items-center `}
    >
      {/* nav-container */}
      <div className="flex relative w-full flex-col items-center px-10 py-4  ">
        {/* <div className="gridbg inset-0 absolute z-10" /> */}
        {/* desktop */}
        <div className="hidden relative z-10  items-center justify-around md:flex bg-transparent">
          {/* Kelvin text  */}

          {/* navlinks */}
          <div className="flex  w-auto items-center justify-center">
            <div
              className={`fixed top-4  rounded-full lg:px-28 flex w-3/4 items-center justify-around px-2 py-2 ${
                !navColor
                  ? "bg-primary-background "
                  : "bg-opacity-30 backdrop-blur-lg backdrop-filter border-2 border-gray-400"
              }`}
            >
              <div className="flex">
                <div className=" p-0.5">
                  <BtnPrimary link="/" text="kelvin" />
                </div>
              </div>
              {/* logo */}
              {/* <Link href="/">
                <div className="mr-16 w-12">
                  <Image src={Logo} alt="Logo" className="" />
                </div>
              </Link> */}
              <div className="flex text-3xl text-gray-300">
                {Navlinks.map((data) => {
                  const { id, link, name } = data;
                  return (
                    <div key={id} className="relative px-3 py-1">
                      {pathname === link && (
                        <motion.div
                          layoutId="nav-desktop"
                          transition={{
                            type: "spring",
                          }}
                          style={{ borderRadius: 9999 }}
                          className="absolute inset-0 bg-primary-border/50 "
                        ></motion.div>
                      )}
                      <Link
                        href={link}
                        className="relative hover:opacity-60 hover:transition-opacity hover:duration-500 font-semibold"
                      >
                        {name}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* talk to us */}
        </div>
        {/* mobile */}
        <div className="flex w-full items-center md:hidden">
          <AnimatePresence mode="sync">
            {open && (
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                className="fixed inset-0 grains"
              >
                <div className="flex h-full w-full flex-col pt-28">
                  {/* border top and grid bg */}
                  <div className="absolute inset-0 z-10 bg-opacity-20" />
                  <div className="absolute inset-0 z-10  bg-opacity-20 bg-gradient-to-t from-primary-border/50 via-transparent to-primary-border/50" />
                  <div className="relative z-20 flex w-full justify-between ">
                    <div className="w-10 "></div>
                    <div className="flex flex-1 flex-col items-center text-gray-300 ">
                      {Navlinks.map((data, i) => {
                        const { id, link, name } = data;
                        return (
                          <motion.div
                            key={id}
                            initial={{ opacity: 0, translateY: -50 }}
                            animate={{ opacity: 1, translateY: 0 }}
                            transition={{
                              duration: 0.08,
                              delay: i * 0.01,
                              ease: "easeInOut",
                            }}
                            className="w-full py-5 text-center text-3xl hover:opacity-60"
                          >
                            <Link href={link} onClick={hideMenu}>
                              {name}
                            </Link>
                          </motion.div>
                        );
                      })}
                    </div>
                    <div className="w-10"></div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="fixed inset-x-4 top-4 flex items-center justify-between rounded-full border border-primary-border bg-opacity-30 px-2 py-2 backdrop-blur-lg backdrop-filter">
            <div>
              {/* logo */}
              {/* <Link href="/">
                <div className="p-2">
                  <Image src={Logo} className="w-12" alt="Logo" />
                </div>
              </Link> */}

              {/* Kelvin text */}
              <div className="">
                <BtnPrimary link="/" text="kelvin" hideNav={hideMenu} />
              </div>
            </div>
            <div className="flex items-center space-x-6 px-4">
              {/* Kelvin text
              <div className="">
                <BtnPrimary link="/" text="kelvin" hideNav={hideMenu} />
              </div> */}
              {/* hamburger menu */}
              <div className="flex w-6 items-center justify-end">
                <div
                  className="group flex h-6 w-6 cursor-pointer flex-col items-center justify-between"
                  onClick={handleHanburgerManu}
                >
                  {/* the btn */}
                  <span
                    className={`h-[2px] w-full transform cursor-pointer rounded-lg bg-white mix-blend-difference transition duration-300 ease-in-out 
                  ${openBtn ? "translate-y-2.5 rotate-45 bg-blue-800" : ""}
                  `}
                  />
                  <span
                    className={`h-[2px] w-[70%] transform cursor-pointer rounded-lg bg-white mix-blend-difference transition duration-300  ease-in-out
                  ${openBtn ? "hidden w-0" : "w-full"}
                  `}
                  />
                  <span
                    className={`h-[2px] w-full transform  cursor-pointer rounded-lg bg-white mix-blend-difference transition duration-300 ease-in-out
                  ${openBtn ? "-translate-y-3 -rotate-45 bg-blue-800" : ""}
                  `}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
