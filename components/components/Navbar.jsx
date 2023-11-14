import React, { useState } from "react";
import { styles } from "@/utils/styles";
import { navLinks } from "@/constants";
import logo from "@/public/assets/assets/logo.svg";
import menu from "@/public/assets/assets/menu.svg";
import close from "@/public/assets/assets/close.svg";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          href={`/`}
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <Image src={logo} alt="logo " className="w-9 h-9 object-contain" />
          <p className="text-white  text-lg font-bold cursor-pointer lg:flex hidden">
            Prakash &nbsp;
            <span>| Full Stack Developer</span>
          </p>
        </Link>
        <ul className="list-none hidden lg:flex gap-10">
          {navLinks?.map((item, index) => {
            return (
              <li
                onClick={() => setActive(item?.title)}
                key={index}
                className={`${
                  active === item?.title ? "text-white" : "text-secondary"
                } hover:text-white font-poppins text-lg font-medium cursor-pointer `}
              >
                <Link href={item?.id}>{item?.title}</Link>
              </li>
            );
          })}
        </ul>
        <div className="lg:hidden flex flex-1 justify-end items-center">
          <Image
            src={toggle ? close : menu}
            alt="menu"
            className="w-7 h-7 object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              toggle ? "hidden" : "flex"
            } p-6 bg-gradient-to-l from-black-200 to-black-100 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col lg:hidden gap-4">
              {navLinks?.map((item, index) => {
                return (
                  <li
                    onClick={() => {
                      setActive(item?.title);
                      setToggle(!toggle);
                    }}
                    key={index}
                    className={`${
                      active === item?.title ? "text-white" : "text-secondary"
                    } font-poppins font-meadium cursor-pointer text-base`}
                  >
                    <Link href={item?.id}>{item?.title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
