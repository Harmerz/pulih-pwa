'use client'

import Link from 'next/link'
import { IoPencil, IoSearch } from 'react-icons/io5'

import { BottomBar } from '@/components/element'
import { BoxCurhat } from '@/components/page/curhat'
import { useGetCurhat } from '@/hooks/curhat'

export default function Curhat() {
  const { data } = useGetCurhat()
  console.log(data)
  return (
    <div className="relative h-full w-full">
      <div className="fixed w-full bg-white px-5 py-4">
        <p className="text-sm text-cream-dark-600">Anda butuh... ?</p>
        <p className="text-2xl font-semibold text-green-700">Ceritakan hari kamu...</p>
        <div className="relative mt-4 w-full">
          <input
            type="text"
            className="w-full rounded-xl border border-cream-dark-300 px-3 py-2"
            placeholder="Cari.."
          />
          <IoSearch className="absolute right-2 top-1/2 h-5 w-5 -translate-y-1/2 text-green-500" />
        </div>
      </div>
      <div className="h-screen bg-cream-200 px-5 py-[166px]">
        {data?.[0]?.curhat?.map((item) => (
          <BoxCurhat key={item} curhat={item} />
        ))}
      </div>
      <Link href="/curhat/add">
        <div className="fixed bottom-24 right-5 h-14 w-14 rounded-2xl bg-green-500 p-4">
          <IoPencil className="h-6 w-6 text-neutral-0" />
        </div>
      </Link>
      <BottomBar />
    </div>
  )
}
