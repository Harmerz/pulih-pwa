import Image from 'next/image'
import Link from 'next/link'

import { BottomBar, CardBook } from '@/components/element'

export default function HomePage() {
  return (
    <div className="h-screen w-full overflow-y-auto">
      <div className="relative z-10 w-full">
        <div className="z-10 flex flex-col bg-white px-4 py-5 pb-4">
          <p className="text-sm text-cream-dark-600">Good Afternoon,</p>
          <p className="text-xl font-semibold text-green-700">Rafly Zaki</p>
        </div>
        <div className="relative z-20 -mt-5 h-[72px] w-full">
          <Image src="/assets/images/home/pembatas.svg" fill alt="pembatas" />
        </div>
      </div>
      <div className="-mt-40 h-full min-h-screen w-full bg-cream-200 px-5 pt-40">
        <Link href="/home/canvasgame">
          <CardBook />
        </Link>{' '}
      </div>
      <BottomBar />
    </div>
  )
}
