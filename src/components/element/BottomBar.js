'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { IoChatbubbleSharp, IoHomeSharp, IoPartlySunnySharp, IoPersonSharp } from 'react-icons/io5'

export function BottomBar() {
  const pathname = usePathname()

  return (
    <div className="fixed bottom-0 flex w-full flex-row justify-center gap-8 bg-white px-6 py-3 text-sm font-medium text-cream-dark-300">
      <Link
        href="/home"
        className={`flex w-1/4 flex-col items-center gap-1 ${
          pathname.includes('/home') && 'text-green-400'
        }`}
      >
        <IoHomeSharp className="h-6 w-6" />
        Home
      </Link>
      <Link
        href="/relaksasi"
        className={`flex w-1/4 flex-col items-center gap-1 ${
          pathname.includes('/relaksasi') && 'text-green-400'
        }`}
      >
        <IoPartlySunnySharp className="h-6 w-6" />
        Relaksasi
      </Link>
      <Link
        href="/curhat"
        className={`flex w-1/4 flex-col items-center gap-1 ${
          pathname.includes('/curhat') && 'text-green-400'
        }`}
      >
        <IoChatbubbleSharp className="h-6 w-6" />
        Curhat
      </Link>
      <Link
        href="/profile"
        className={`flex w-1/4 flex-col items-center gap-1 ${
          pathname.includes('/profile') && 'text-green-400'
        }`}
      >
        <IoPersonSharp className="h-6 w-6" />
        Profile
      </Link>
    </div>
  )
}

export default BottomBar
