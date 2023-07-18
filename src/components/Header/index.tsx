import { GoSearch } from 'react-icons/go'
import { IoBatteryFull, IoCamera, IoCellular, IoWifi } from 'react-icons/io5'
import { MdOutlineMoreVert } from 'react-icons/md'

import Nav from './components/Nav'

const Header = () => {
  return (
    <header className="flex w-full flex-col gap-8 bg-emerald-600 py-2 pb-0 text-white md:rounded-t-3xl">
      <section className="hidden w-full flex-1 justify-between px-6 md:flex">
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
        <div className="mr-2 flex text-lg">
          <GoSearch />
          <MdOutlineMoreVert />
        </div>
      </section>
      <section className="flex items-center justify-center gap-6 pl-2 font-semibold">
        <IoCamera className="h-6 w-6 opacity-70" />
        <Nav />
      </section>
    </header>
  )
}

export default Header
