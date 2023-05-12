import React from "react";
import { BsCaretLeft, BsCircle, BsSquare } from "react-icons/bs";

const Nav = () => {
  return (
    <nav className="items-center justify-around hidden p-2 bg-white md:flex rounded-b-3xl drop-shadow-up">
      <BsCaretLeft className="w-8 h-8" />
      <BsCircle className="w-6 h-6" />
      <BsSquare className="w-6 h-6" />
    </nav>
  );
};

export default Nav;
