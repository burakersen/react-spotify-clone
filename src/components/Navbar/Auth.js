import React from 'react'
import { Menu } from '@headlessui/react'
import { AvatarIcon, DownDirIcon, ExternalIcon } from 'Icons'

const Auth = () => {
    const user = {
        name: "Burak Erşen",
        avatar: <AvatarIcon className="w-4 h-4" />
    }
    return (
        <Menu as="nav" className="relative z-10">
            {({ open }) => (
                <>
                    <Menu.Button className={`flex items-center h-8 rounded-3xl ${open ? "bg-active" : "bg-black"} pl-1 pr-2 hover:bg-active`}>
                        <figure className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-500 bg-opacity-80 text-white mr-2">
                            {user.avatar}
                        </figure>
                        <span className="text-sm font-semibold mr-1">{user.name}</span>
                        <span className={open && "rotate-180"}>
                            <DownDirIcon className="w-4 h-4" />
                        </span>
                    </Menu.Button>
                    <Menu.Items className="flex flex-col absolute top-full right-0 w-48 rounded p-1 bg-active translate-y-2">
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    className={`flex items-center justify-between h-10 px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}
                                    href="#"
                                >
                                    Hesap
                                    <ExternalIcon className="w-4 h-4" />
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    className={`flex items-center h-10 px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}
                                    href="#"
                                >
                                    Profil
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    className={`flex items-center h-10 px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}
                                    href="#"
                                >
                                    Oturumu Kapat
                                </a>
                            )}
                        </Menu.Item>
                    </Menu.Items>
                </>
            )}

        </Menu>
    )
}

export default Auth