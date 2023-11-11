import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/element'

export default function Screen() {
  axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/ping`).then((e) => console.log(e.data))
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-white">
      <div className="relative aspect-[252/304] w-4/5 max-w-[252px]">
        <Image src="/assets/images/logo.png" fill alt="logo" />
      </div>
      <div className="mt-32 flex w-4/5 max-w-[252px] flex-col gap-8">
        <Link href="/signin">
          <Button type="primary">Sign In</Button>
        </Link>
        <Link href="/signup">
          <Button type="secondary">Register</Button>
        </Link>
      </div>
    </div>
  )
}
