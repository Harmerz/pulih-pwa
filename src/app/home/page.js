'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useSession } from 'next-auth/react'

import { BottomBar, CardBook } from '@/components/element'
import { useGetCurhat } from '@/hooks/curhat'
import Emoticon from '@/lib/emot'

export default function HomePage() {
  const { data: session } = useSession()
  const today = new Date()
  let salam = 'Afternoon'
  if (today.getHours() >= 0 && today.getHours() < 5) {
    salam = 'Night'
  } else if (today.getHours() >= 5 && today.getHours() < 12) {
    salam = 'Morning'
  } else if (today.getHours() >= 12 && today.getHours() < 18) {
    salam = 'Afternoon'
  } else if (today.getHours() >= 18 && today.getHours() < 22) {
    salam = 'Evening'
  } else {
    salam = 'Night'
  }
  const { data } = useGetCurhat()
  const tzoffset = new Date().getTimezoneOffset() * 60000
  const localISOTime = new Date(Date.now() - tzoffset).toISOString()
  const moody = data?.[0]?.curhat?.find((e) => e.tanggal === localISOTime.split('T')[0])
  let emot = 'text-neutral-700'
  let textEmot = 'None'
  if (moody?.mood === 1) {
    emot = 'text-emoticon-500'
    textEmot = 'Awful'
  }
  if (moody?.mood === 2) {
    emot = 'text-emoticon-400'
    textEmot = 'Bad'
  }
  if (moody?.mood === 3) {
    emot = 'text-emoticon-300'
    textEmot = 'Meh'
  }
  if (moody?.mood === 4) {
    emot = 'text-emoticon-200'
    textEmot = 'Good'
  }
  if (moody?.mood === 5) {
    emot = 'text-emoticon-100'
    textEmot = 'Rad'
  }
  const dataBook = [
    {
      link: '/sukai',
      judul: 'Lingkari yang kamu sukai',
      isi: 'Disini kamu diminta untuk melingkari apa saja yang kamu sukai selama ini.',
      bagian: 'Distraksi',
    },
    {
      link: '/benda-sekitar',
      judul: 'Benda Sekitar Kamu',
      isi: 'Ketika kamu merasa sendiri, ketahuilah selalu ada benda-benda di sekitarmu yang menemanimu. Mereka ada dalam beragam rupa dan warna. Sekarang, sentuhlah benda-benda tersebut, lalu kelompokkan benda-benda ini menurut jenisnya di bawah ini!',
      bagian: 'Nyaman',
    },
    {
      link: '/syukur',
      judul: 'Tulis apa yang kamu syukuri',
      isi: 'Apa yang kamu syukuri dari hidupmu?',
      bagian: 'Ekspresi',
    },
    {
      link: '/origami',
      judul: 'Tulis harapan pada origami',
      isi: 'Tulis harapanmu pada kertas origami dan lipatlah hingga menjadi bentuk seperti ini',
      bagian: 'Aktif',
    },
  ]
  return (
    <div className="h-full min-h-screen w-full overflow-y-auto">
      <div className="relative z-10 w-full">
        <div className="flex w-full flex-row justify-between bg-white px-4 py-5">
          <div className="z-10 flex flex-col bg-white pb-4">
            <p className="text-sm text-cream-dark-600">Good {salam},</p>
            <p className="text-xl font-semibold text-green-700">{session?.user?.name}</p>
          </div>
          <Link href="/calendar">
            <div className="flex flex-row gap-3">
              <div className="text-end">
                <p className="text-sm text-cream-dark-600 ">Today&apos;s Mood</p>
                <p className={`font-bold ${emot}`}>{textEmot}</p>
              </div>
              {moody ? (
                <Emoticon className={`h-8 w-8 ${emot}`} number={moody?.mood} />
              ) : (
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-dashed border-neutral-500 bg-white">
                  <div className=" h-8 w-8 rounded-full bg-neutral-500" />
                </div>
              )}
            </div>
          </Link>
        </div>
        <div className="relative z-20 -mt-5 h-[72px] w-full">
          <Image src="/assets/images/home/pembatas.svg" fill alt="pembatas" />
        </div>
      </div>
      <div className="-mt-40 flex h-full min-h-screen w-full flex-col gap-3 bg-cream-200 px-5 pt-40">
        {dataBook.map((item) => (
          <CardBook data={item} key={item} />
        ))}
      </div>
      <BottomBar />
    </div>
  )
}
