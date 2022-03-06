import { DownloadIcon } from 'Icons'
import React from 'react'

const DownloadApp = () => {
  return (
    <a href="#" className="flex flex-shrink-0 items-center gap-x-4 h-10 px-6 text-sm font-semibold text-link hover:text-white">
        <DownloadIcon className="w-5 h-5" />
        <span>Uygulamayı Yükle</span>
    </a>
  )
}

export default DownloadApp