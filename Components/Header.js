import React from 'react'
import { ViewGridIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'
import { useSession, signIn, signOut } from 'next-auth/react'
function Header() {
  const { data: session } = useSession()
  return (
    <div>
      {session ? (
        <div className="flex items-center justify-between bg-[#0078D7] px-3">
          <div className="flex items-center gap-x-3 p-2 px-5">
            <ViewGridIcon className="h-10 w-5 text-white" />
            <h1 className="text-lg font-semibold text-white">To-do</h1>
          </div>
          <div className="flex items-center gap-x-2">
            <img
              src={session?.user?.image}
              alt=""
              className="h-8 cursor-pointer rounded-full"
              onClick={signOut}
            />
            <p className="text-sm text-white">{session?.user?.name}</p>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between bg-[#0078D7] px-3">
          <div className="flex items-center gap-x-3 p-2 px-5">
            <ViewGridIcon className="h-10 w-5 text-white" />
            <h1 className="text-lg font-semibold text-white">To-do</h1>
          </div>
          <div className="flex items-center gap-x-2">
            <div className="flex items-center justify-between bg-[#0078D7] px-3">
              <p
                className="cursor-pointer text-sm text-white underline"
                onClick={signIn}
              >
                Sign In
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Header
