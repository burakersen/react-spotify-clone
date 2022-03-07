import React from 'react'
import { NextIcon, PrevIcon } from 'Icons'
import { useNavigate } from 'react-router-dom'

const Navigation = () => {
    const navigate = useNavigate();

    return (
        <nav className="flex items-center">
            <button onClick={() => navigate(-1)} className="flex justify-center items-center w-8 h-8 mr-4 rounded-full bg-black bg-opacity-70">
                <PrevIcon className="text-link w-6 h-6" />
            </button>
            <button onClick={() => navigate(1)} className="flex justify-center items-center w-8 h-8 rounded-full bg-black bg-opacity-70">
                <NextIcon className="text-link w-6 h-6" />
            </button>
        </nav>
    )
}

export default Navigation