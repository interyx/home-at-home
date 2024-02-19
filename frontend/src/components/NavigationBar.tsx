import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Input, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react"
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { setMaxListeners } from "events";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar isBordered onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:flex gap-4" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden"
        />
        <NavbarBrand className="hidden lg:block">
          <p className="font-bold text-inherit">Home@Home</p>
        </NavbarBrand>
        <NavLink to="/">
          {({ isActive }) => (
            <NavbarItem isActive={isActive}>Home</NavbarItem>
          )}
        </NavLink>
        <NavLink to="/inventory">
          {({ isActive }) => (
            <NavbarItem isActive={isActive}>Inventory</NavbarItem>
          )}
        </NavLink>
        <NavbarItem>
          <Link color="foreground" href="#">
            Kitchen
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Tasks
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent as="div" className="items-center" justify="end">
        <Input
          classNames={{
            base: "hidden max-w-[18rem] md:block h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20"
          }}
          placeholder="Type to search..."
          size="sm"
          type="search"
        />
      </NavbarContent>
      <NavbarMenu className="bg-slate-800 text-slate-300">
        <NavbarMenuItem className="relative items-center">
          <Input type="search" className=" w-full z-0 pt-2" endContent={<FaMagnifyingGlass />} />
        </NavbarMenuItem>
        <NavbarMenuItem>
          Home
        </NavbarMenuItem>
        <NavbarMenuItem>
          Inventory
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  )
}