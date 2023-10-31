"use client";

import Image from "next/image";
import React, { useState } from "react";
import logo from "../../public/images/logo.svg";
import wishlistIcon from "../../public/images/wishlist.svg";
import profileIcon from "../../public/images/profile.svg";
import bagIcon from "../../public/images/bag.svg";
import Link from "next/link";
import "./style.css";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full bg-[#fffffe] py-5 px-5 flex flex-col md:flex-row md:justify-between">
      {/* LEFT SIDE */}
      <div className="md:flex items-center">
        <div className="max-md:flex max-md:justify-between max-md:items-center">
          <Link href={"/"}>
            <Image alt="logo" src={logo} />
          </Link>
          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden flex items-center justify-end">
            <button onClick={toggleMenu} className="p-2 focus:outline-none">
              <svg
                className={`h-6 w-6 ${isMenuOpen ? "hidden" : "block"}`}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`h-6 w-6 ${isMenuOpen ? "block" : "hidden"}`}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* DESKTOP VERSION */}
        <div className="max-md:hidden mt-4 md:mt-0 md:ml-8 flex flex-col md:flex-row">
          <Link href={"/handbags"} className="mb-2 md:mb-0 md:mr-4">
            Handbags
          </Link>
          <Link href={"/watches"} className="mb-2 md:mb-0 md:mr-4">
            Watches
          </Link>
          <Link href={"/skincare"} className="mb-2 md:mb-0 md:mr-4">
            Skincare
          </Link>
          <Link href={"/apparels"} className="mb-2 md:mb-0">
            Apparels
          </Link>
        </div>

        {/* MOBILE VERSION */}
        {isMenuOpen && <div className="md:hidden mt-4 md:mt-0 md:ml-8 flex flex-col md:flex-row">
          <Link href={"/handbags"} className="mb-2 md:mb-0 md:mr-4">
            Handbags
          </Link>
          <Link href={"/watches"} className="mb-2 md:mb-0 md:mr-4">
            Watches
          </Link>
          <Link href={"/skincare"} className="mb-2 md:mb-0 md:mr-4">
            Skincare
          </Link>
          <Link href={"/apparels"} className="mb-2 md:mb-0">
            Apparels
          </Link>
        </div>}

      </div>
      {/* RIGHT SIDE - DESKTOP VERSION*/}
      <div className="max-md:hidden mt-4 md:mt-0 flex items-center">
        <div>
          <Input
            size="large"
            placeholder="Search for products or brands....."
            prefix={<SearchOutlined />}
            className="searchInput"
          />
        </div>
        <div className="mt-4 md:mt-0 md:ml-4 flex">
          <Link href={"/handbags"} className="mr-4">
            <Image alt="wishlistIcon" src={wishlistIcon} />
          </Link>
          <Link href={"/handbags"} className="mr-4">
            <Image alt="profileIcon" src={profileIcon} />
          </Link>
          <Link href={"/basket"}>
            <Image alt="bagIcon" src={bagIcon} />
          </Link>
        </div>
      </div>

      {/* RIGHT SIDE -MOBILE-VERSION*/}
      {isMenuOpen && <div className="md:hidden mt-4 md:mt-0 items-center">
        <div>
          <Input
            size="large"
            placeholder="Search for products or brands....."
            prefix={<SearchOutlined />}
            className="searchInput"
          />
        </div>
        <div className="mt-4 md:mt-0 md:ml-4 flex">
          <Link href={"/handbags"} className="mr-4">
            <Image alt="wishlistIcon" src={wishlistIcon} />
          </Link>
          <Link href={"/handbags"} className="mr-4">
            <Image alt="profileIcon" src={profileIcon} />
          </Link>
          <Link href={"/basket"}>
            <Image alt="bagIcon" src={bagIcon} />
          </Link>
        </div>
      </div>}
    </div>
  );
}

export default Navbar;
