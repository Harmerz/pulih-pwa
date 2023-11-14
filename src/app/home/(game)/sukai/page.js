'use client'

import Link from 'next/link'
import { useState } from 'react'
import { IoChevronBackOutline } from 'react-icons/io5'

export default function SukaiPage() {
  const [likes, setLikes] = useState([])
  function handleClick(value) {
    if (likes.findIndex((e) => e === value) === -1) {
      setLikes([...likes, value])
    } else {
      setLikes(likes.filter((e) => e !== value))
    }
  }
  return (
    <div className="flex h-screen w-full flex-col bg-white pt-3">
      <div className="flex w-full flex-row items-center justify-between bg-white px-5 pb-8 pt-3">
        <Link href="/home">
          <IoChevronBackOutline className="h-6 w-6 self-start justify-self-start text-green-500" />
        </Link>
        <p className="place-self-center self-center justify-self-center text-center text-xl font-semibold text-green-700">
          Lingkari yang kamu sukai
        </p>
        <div />
      </div>
      <div className="font-moreSugar relative h-full w-full text-black">
        <button
          type="button"
          onClick={() => handleClick('Musik Klasik')}
          className={`absolute left-[10%] top-[5%]  p-2 ${
            likes.includes('Musik Klasik') && 'rounded-[50%] border border-black'
          }`}
        >
          Musik klasik
        </button>

        <button
          type="button"
          onClick={() => handleClick('Pacar')}
          className={`absolute left-[10%] top-[12%]  p-2 ${
            likes.includes('Pacar') && 'rounded-[50%] border border-black'
          }`}
        >
          Pacar
        </button>
        <button
          type="button"
          onClick={() => handleClick('Beribadah')}
          className={`absolute left-[15%] top-[30%]  p-2 ${
            likes.includes('Beribadah') && 'rounded-[50%] border border-black'
          }`}
        >
          Beribadah
        </button>
        <button
          type="button"
          onClick={() => handleClick('Anime')}
          className={`absolute left-[40%] top-[10%]  p-2 ${
            likes.includes('Anime') && 'rounded-[50%] border border-black'
          }`}
        >
          Anime
        </button>
        <button
          type="button"
          onClick={() => handleClick('Bermain Catur')}
          className={`absolute bottom-[22%] left-[10%]  p-2 ${
            likes.includes('Bermain Catur') && 'rounded-[50%] border border-black'
          }`}
        >
          Bermain Catur
        </button>
        <button
          type="button"
          onClick={() => handleClick('Susu Coklat')}
          className={`absolute left-[20%] top-[38%]  p-2 ${
            likes.includes('Susu Coklat') && 'rounded-[50%] border border-black'
          }`}
        >
          Susu Coklat
        </button>
        <button
          type="button"
          onClick={() => handleClick('Belajar')}
          className={`absolute left-[18%] top-[20%]  p-2 ${
            likes.includes('Belajar') && 'rounded-[50%] border border-black'
          }`}
        >
          Belajar
        </button>
        <button
          type="button"
          onClick={() => handleClick('Kalung')}
          className={`absolute right-[10%] top-[15%]  p-2 ${
            likes.includes('Kalung') && 'rounded-[50%] border border-black'
          }`}
        >
          Kalung
        </button>
        <button
          type="button"
          onClick={() => handleClick('Night Ride')}
          className={`absolute right-[30%] top-[20%]  p-2 ${
            likes.includes('Night Ride') && 'rounded-[50%] border border-black'
          }`}
        >
          Night Ride
        </button>
        <button
          type="button"
          onClick={() => handleClick('Rujak')}
          className={`absolute bottom-[38%] right-[20%]  p-2 ${
            likes.includes('Rujak') && 'rounded-[50%] border border-black'
          }`}
        >
          Rujak
        </button>
        <button
          type="button"
          onClick={() => handleClick('Indomie')}
          className={`absolute right-[20%] top-[8%]  p-2 ${
            likes.includes('Indomie') && 'rounded-[50%] border border-black'
          }`}
        >
          Indomie
        </button>
        <button
          type="button"
          onClick={() => handleClick('Deep Talk')}
          className={`absolute right-[20%] top-[28%]  p-2 ${
            likes.includes('Deep Talk') && 'rounded-[50%] border border-black'
          }`}
        >
          Deep Talk
        </button>
        <button
          type="button"
          onClick={() => handleClick('Berenang')}
          className={`absolute right-[25%] top-[38%]  p-2 ${
            likes.includes('Berenang') && 'rounded-[50%] border border-black'
          }`}
        >
          Berenang
        </button>
        <button
          type="button"
          onClick={() => handleClick('Lele')}
          className={`absolute right-[60%] top-[63%]  p-2 ${
            likes.includes('Lele') && 'rounded-[50%] border border-black'
          }`}
        >
          Lele
        </button>
        <button
          type="button"
          onClick={() => handleClick('Sepatu Connverse')}
          className={`absolute right-[10%] top-[48%]  p-2 ${
            likes.includes('Sepatu Connverse') && 'rounded-[50%] border border-black'
          }`}
        >
          Sepatu Connverse
        </button>
        <button
          type="button"
          onClick={() => handleClick('Taylor Swift')}
          className={`absolute right-[20%] top-[68%]  p-2 ${
            likes.includes('Taylor Swift') && 'rounded-[50%] border border-black'
          }`}
        >
          Taylor Swift
        </button>
        <button
          type="button"
          onClick={() => handleClick('Matcha')}
          className={`absolute right-[70%] top-[44%]  p-2 ${
            likes.includes('Matcha') && 'rounded-[50%] border border-black'
          }`}
        >
          Matcha
        </button>
        <button
          type="button"
          onClick={() => handleClick('Semangka')}
          className={`absolute right-[40%] top-[55%]  p-2 ${
            likes.includes('Semangka') && 'rounded-[50%] border border-black'
          }`}
        >
          Semangka
        </button>
        <button
          type="button"
          onClick={() => handleClick('Hujan')}
          className={`absolute left-[10%] top-[52%]  p-2 ${
            likes.includes('Hujan') && 'rounded-[50%] border border-black'
          }`}
        >
          Hujan
        </button>
        <button
          type="button"
          onClick={() => handleClick('Puzzle')}
          className={`absolute bottom-[15%] right-[20%]  p-2 ${
            likes.includes('Puzzle') && 'rounded-[50%] border border-black'
          }`}
        >
          Puzzle
        </button>
        <button
          type="button"
          onClick={() => handleClick('Kebun')}
          className={`absolute bottom-[10%] left-[20%]  p-2 ${
            likes.includes('Kebun') && 'rounded-[50%] border border-black'
          }`}
        >
          Kebun
        </button>
      </div>
    </div>
  )
}
