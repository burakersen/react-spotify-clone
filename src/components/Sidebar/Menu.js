import React from 'react'
import { CollectionIcon, HomeIcon, SearchIcon } from 'Icons'
import { NavLink } from 'react-router-dom'


const Menu = () => {
    return (
        <nav className="px-2">
            <ul className="flex flex-col">
                <li>
                    <NavLink to={"/"} exact="true" className={({ isActive }) => "h-10 flex items-center gap-x-4 text-sm font-semibold hover:text-white px-4 " + (isActive ? " text-white" : "text-link")}>
                        <HomeIcon className="w-6 h-6 " /> 
                        <span>Ana sayfa</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/search"} className={({ isActive }) => "h-10 flex items-center gap-x-4 text-sm font-semibold hover:text-white px-4 " + (isActive ? " text-white" : "text-link")}>
                        <SearchIcon className="w-6 h-6 " /> 
                        <span>Ara</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/collection"} className={({ isActive }) => "h-10 flex items-center gap-x-4 text-sm font-semibold hover:text-white px-4 " + (isActive ? " text-white" : "text-link")}>
                        <CollectionIcon className="w-6 h-6 " />
                        <span>Kitaplığın</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Menu