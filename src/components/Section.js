import { PlayIcon } from 'Icons'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Section = ({ title, more = false, items }) => {
    const imageStyle = type => {
        switch(type) {
            case "artist":
                return "rounded-full";
            case "podcast":
                return "rounded-xl";
            default:
                return "rounded"
        }
    }
    return (
        <section>
            <header className="flex items-center justify-between mb-4">
                <h3 className="text-2xl text-white font-semibold tracking-tight hover:underline"><NavLink to={more ?? "#"}>{title}</NavLink></h3>
                {more && (
                    <NavLink to={more ?? "#"} className="text-xs font-bold uppercase text-link hover:underline tracking-wider">HEPSİNİ GÖR</NavLink>
                )}
            </header>
            <div className="grid grid-cols-8 gap-x-6">
                {items.map(item => (
                    <NavLink 
                        key={item.id} 
                        to={"/"}
                        className="bg-footer p-4 rounded hover:bg-active group" 
                    >
                        <div className="pt-[100%] relative mb-4">
                            <img src={item.image} alt="" className={`absolute inset-0 object-cover w-full h-full ${imageStyle(item.type)}`} />
                            <button className="items-center justify-center w-12 h-12 rounded-full bg-primary absolute bottom-2 right-2 flex opacity-0 translate-y-1 group-hover:opacity-100 group-hover:-translate-y-1 group-focus:flex transform transition-all duration-300"><PlayIcon className="w-6 h-6 text-black" /></button>
                        </div>
                        <h6 className="line-clamp-1 text-base font-semibold">{item.title}</h6>
                        <p className="line-clamp-2 text-link text-sm mt-1">{item.description}</p>
                    </NavLink>
                ))}
            </div>
        </section>
    )
}

export default Section