import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/element'

export default function Screen() {
  return (
    <div className="flex h-[100vh] w-full flex-col items-center justify-center bg-white">
      <div className="flex h-full w-full flex-col items-center justify-center">
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
      <div className="mt-auto place-self-end self-end">
        <div className=" relative flex aspect-[420/90] w-screen self-end ">
          <Image src="/assets/images/pembatas-login.svg" fill alt="pembatas" />
        </div>
        <div className="-mt-3 flex h-24 w-full bg-cream-200" />
      </div>
    </div>
  )
}
