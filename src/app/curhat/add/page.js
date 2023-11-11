'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { IoChevronBackOutline } from 'react-icons/io5'

import { Button } from '@/components/element'

export default function TulisCurhat() {
  const [mood, setMood] = useState(0)
  return (
    <div className="flex h-full min-h-screen w-full flex-col">
      <div className="relative z-10 w-full">
        <div className="flex w-full flex-row items-center justify-between bg-white px-5 pb-8 pt-3">
          <Link href="/curhat">
            <IoChevronBackOutline className="h-6 w-6 self-start justify-self-start text-green-500" />
          </Link>
          <p className="place-self-center self-center justify-self-center text-center text-xl font-semibold text-green-700">
            Tulis Curhat
          </p>
          <div />
        </div>
        <div className="relative z-20 -mt-5 h-[72px] w-full">
          <Image src="/assets/images/home/pembatas.svg" fill alt="pembatas" />
        </div>
      </div>
      <div className="-mt-[124px] flex h-full min-h-screen w-full flex-col gap-5 bg-cream-light-50 px-5 pt-44">
        <div className="relative">
          <div className="absolute -top-2 left-4 bg-cream-light-50 px-1 text-xs text-green-600">
            Tanggal
          </div>
          <input
            required
            type="date"
            placeholder="input"
            className="w-full rounded-lg border border-neutral-500 bg-cream-light-50 px-4 py-2 text-black"
          />
        </div>
        <div className="relative">
          <div className="absolute -top-2 left-4 bg-cream-light-50 px-1 text-xs text-green-600">
            Judul
          </div>
          <input
            required
            type="text"
            placeholder="input"
            className="w-full rounded-lg border border-neutral-500 bg-cream-light-50 px-4 py-2 text-black"
          />
        </div>
        <div className="relative">
          <div className="absolute -top-2 left-4 bg-cream-light-50 px-1 text-xs text-green-600">
            Isi Curhat
          </div>
          <textarea
            required
            type="text"
            placeholder="input"
            className="h-40 w-full rounded-lg border border-neutral-500 bg-cream-light-50 px-4 py-2 text-black"
          />
        </div>
        <div className="relative">
          <div className="absolute -top-2 left-4 bg-cream-light-50 px-1 text-xs text-green-600">
            Untuk Siapa (Optional)
          </div>
          <input
            type="text"
            placeholder="input"
            className=" w-full rounded-lg border border-neutral-500 bg-cream-light-50 px-4 py-2 text-black"
          />
        </div>
        <div className="mt-5 text-xs font-medium text-neutral-500">Pilih mood Anda</div>
        <div className="flex w-full flex-row">
          <button
            type="button"
            onClick={() => setMood(1)}
            className={` ${
              mood === 1 && 'border border-cream-light-600'
            } flex h-[74px] w-16 flex-row items-center justify-center gap-1 rounded-lg px-1 py-2`}
          >
            a
          </button>
        </div>
        <div className="flex w-full flex-row justify-between gap-16">
          <Button type="secondary">Bersihkan</Button>
          <Button type="primary">Unggah</Button>
        </div>
      </div>
    </div>
  )
}
