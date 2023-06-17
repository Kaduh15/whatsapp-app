import React from 'react'
import { BsCaretLeft, BsCircle, BsSquare } from 'react-icons/bs'

const Nav = () => {
  return (
    <nav className="hidden items-center justify-around rounded-b-3xl bg-white p-2 drop-shadow-up md:flex">
      <BsCaretLeft className="h-8 w-8" />
      <BsCircle className="h-6 w-6" />
      <BsSquare className="h-6 w-6" />
    </nav>
  )
}

export default Nav
