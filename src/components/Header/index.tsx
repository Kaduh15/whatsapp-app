import React from "react";
import { GoSearch } from "react-icons/go";
import { MdOutlineMoreVert } from "react-icons/md";
import { IoBatteryFull, IoWifi, IoCellular, IoCamera } from "react-icons/io5";

const Header = () => {
  return (
    <header className="flex flex-col w-full gap-4 py-2 text-white md:rounded-t-3xl bg-emerald-600">
      <section className="justify-between flex-1 hidden w-full px-6 md:flex">
        <span>9:41</span>
        <div className="flex gap-1">
          <IoCellular />
          <IoCellular />
          <IoWifi />
          <IoBatteryFull />
        </div>
      </section>
      <section className="flex justify-between">
        <h1 className="ml-4 text-lg font-bold">WhatsApp</h1>
        <div className="flex mr-2 text-lg">
          <GoSearch />
          <MdOutlineMoreVert />
        </div>
      </section>
      <section className="flex items-center justify-center gap-6 pl-2 font-semibold">
        <IoCamera className="w-6 h-6 opacity-70"/>
        <div className="flex gap-6">
          <p className="border-b-4">CHATS</p>
          <p>STATUS</p>
          <p>CALLS</p>
        </div>
      </section>
    </header>
  );
};

export default Header;
