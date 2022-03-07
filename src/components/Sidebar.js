import React from 'react'
import logo from 'images/logo.svg'
import Menu from './Sidebar/Menu'
import { HeartIcon, PlusIcon } from 'Icons'
import { NavLink } from 'react-router-dom'
import Playlists from './Sidebar/Playlists'
import DownloadApp from './Sidebar/DownloadApp'

const SideBar = () => {
  return (
    <aside className="w-60 pt-6 flex flex-shrink-0 flex-col  bg-black">

      <a href="#" className="mb-7 px-6">
        <img src={logo} alt="logo" className="h-10" />
      </a>

      <Menu />

      <nav className="mt-6">
        <ul>
          <li>
            <NavLink to={"/playlist"} className="h-10 flex items-center gap-x-4 text-sm font-semibold text-link hover:text-white px-6 roundes-sm group">
              <span className="flex items-center justify-center w-6 h-6 bg-link group-hover:bg-white">
                <PlusIcon className="w-3 h-3 text-black flex items-center justify-center" />
              </span>
              <span>Çalma Listesi Oluştur</span>
            </NavLink>
            <NavLink to={"/heart"} className="h-10 flex items-center gap-x-4 text-sm font-semibold text-link hover:text-white px-6 roundes-sm group">
              <span className="flex items-center justify-center w-6 h-6 bg-heart opacity-70 group-hover:opacity-100">
                <HeartIcon className="w-3 h-3 text-white flex items-center justify-center group-hover:text-white" />
              </span>
              <span>Beğenilen Şarkılar</span>
            </NavLink>
          </li>
        </ul>
      </nav>

      <Playlists />

      <DownloadApp />

    </aside>
  )
}

export default SideBar