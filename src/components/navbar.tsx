import React, { useEffect, useState } from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
  Typography,
  Button,
} from "@material-tailwind/react";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
  handleClose?: () => void;
}

function NavItem({ children, href,handleClose }: NavItemProps) {
  const isExternal = href?.startsWith("http");
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        target={isExternal ? "_blank" : "_self"}
        variant="small"
        className="font-bold "
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
        onClick={() => handleClose && handleClose()}
      >
        {children}
      </Typography>
    </li>
  );
}


export function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  function handleClose() {
    setOpen(false);
  }

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MTNavbar
      fullWidth
      shadow={false}
      blurred={false}
      color={isScrolling ? "white" : "transparent"}
      className="fixed top-0 z-50 border-0"
      placeholder=""
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Typography
          as="a"
          href="/"
          target="_blank"
          variant="h6"
          color={isScrolling ? "gray" : "white"}
          className="flex items-center gap-1"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          <Image
            width={130}
            height={100}
            src="/logos/logo.png"
            alt="logo"
            className="rounded-md"
          />
        </Typography>
        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${
            isScrolling ? "text-gray-900" : "text-white"
          }`}
        >
          <NavItem href="/">Home</NavItem>
          <NavItem href="#aboutus">About Us</NavItem>
          <NavItem href="#contact">Contact Us</NavItem>
          <NavItem href="/projects">Projects</NavItem>
        </ul>
        <div className="hidden gap-2 lg:flex lg:items-center">
          <IconButton
            variant="text"
            color={isScrolling ? "gray" : "white"}
            size="sm"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            <i className="fa-brands fa-twitter text-base" />
          </IconButton>
          <IconButton
            variant="text"
            color={isScrolling ? "gray" : "white"}
            size="sm"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            <i className="fa-brands fa-facebook text-base" />
          </IconButton>
          <IconButton
            variant="text"
            color={isScrolling ? "gray" : "white"}
            size="sm"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            <i className="fa-brands fa-instagram text-base" />
          </IconButton>
          <a href="#contact">
            <Button placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}} color={isScrolling ? "gray" : "white"} size="sm">
              Join Us
            </Button>
          </a>
        </div>
        <IconButton
          variant="text"
          color={isScrolling ? "gray" : "white"}
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg border-t border-blue-gray-50 bg-white px-6 py-5">
          <ul className="flex flex-col gap-4 text-blue-gray-900">
          <NavItem handleClose={handleClose} href="/">Home</NavItem>
          <NavItem handleClose={handleClose}  href="#aboutus">About Us</NavItem>
          <NavItem handleClose={handleClose}  href="#contact">Contact Us</NavItem>
          <NavItem handleClose={handleClose}  href="/projects">Projects</NavItem>
          </ul>
          <div className="mt-4 flex items-center gap-2">
            <IconButton
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              variant="text"
              color="gray"
              size="sm"
            >
              <i className="fa-brands fa-twitter text-base" />
            </IconButton>
            <IconButton
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              variant="text"
              color="gray"
              size="sm"
            >
              <i className="fa-brands fa-facebook text-base" />
            </IconButton>
            <IconButton
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              variant="text"
              color="gray"
              size="sm"
            >
              <i className="fa-brands fa-instagram text-base" />
            </IconButton>
            <a href="" target="_blank">
              <Button
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                color="gray"
                size="sm"
                className="ml-auto"
              >
                Join Us
              </Button>
            </a>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
