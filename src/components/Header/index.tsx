import { GoSearch } from 'react-icons/go'
import { IoBatteryFull, IoCamera, IoCellular, IoWifi } from 'react-icons/io5'
import { MdOutlineMoreVert } from 'react-icons/md'

const Header = () => {
  return (
    <header className="flex w-full flex-col gap-4 bg-emerald-600 py-2 text-white md:rounded-t-3xl">
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
        <div className="flex gap-6">
          <p className="border-b-4">CHATS</p>
          <p>STATUS</p>
          <p>CALLS</p>
        </div>
      </section>
    </header>
  )
}

export default Header
