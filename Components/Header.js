import React from 'react'
import { ViewGridIcon } from '@heroicons/react/solid'
function Header() {
  return (
    <div className="flex items-center justify-between bg-[#0078D7] px-3">
      <div className="flex items-center gap-x-3 p-2 px-5">
        <ViewGridIcon className="h-10 w-5 text-white" />
        <h1 className="text-lg font-semibold text-white">To-do</h1>
      </div>
      <div>
        <p className="text-sm text-white">UserName</p>
      </div>
    </div>
  )
}

export default Header
