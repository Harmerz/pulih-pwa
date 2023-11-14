import Image from 'next/image'
import Link from 'next/link'
import { IoChevronBackOutline } from 'react-icons/io5'

export default function BendaSekitar() {
  return (
    <div className="flex h-screen w-full flex-col bg-white pt-3">
      <div className="px-5">
        <div className="flex w-full flex-row items-center justify-between bg-white px-5 pb-8 pt-3">
          <Link href="/home">
            <IoChevronBackOutline className="h-6 w-6 self-start justify-self-start text-green-500" />
          </Link>
          <p className="place-self-center self-center justify-self-center text-center text-xl font-semibold text-green-700">
            Harapan Origami
          </p>
          <div />
        </div>
        <div className="font-moreSugar px-5 py-6">
          <p className="text-center text-xl text-black">
            Tulis harapanmu pada kertas origami dan lipatlah hingga menjadi bentuk seperti ini
          </p>
          <div className="relative mx-auto my-[20%] aspect-square w-3/5">
            <Image src="/assets/images/game/origami.svg" alt="origami" fill />
          </div>
          <p className="mt-auto text-center text-xl text-black">
            Konon, origami burung (orizuru) melambangkan harapan seseorang.
          </p>
        </div>
      </div>
    </div>
  )
}
