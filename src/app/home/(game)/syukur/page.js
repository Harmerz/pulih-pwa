'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { IoChevronBackOutline, IoCloseOutline, IoSend } from 'react-icons/io5'

export default function BendaSekitar() {
  const [input, setInput] = useState()
  const [listInput, setListInput] = useState([])
  const handleClick = () => {
    setListInput([...listInput, input])
    setInput('')
  }
  const handleDelete = (value) => {
    setListInput(listInput.filter((e) => e !== value))
  }
  useEffect(() => {
    localStorage.setItem('syukur', JSON.stringify(listInput))
  }, [listInput])

  useEffect(() => {
    setListInput(JSON.parse(localStorage.getItem('syukur') ?? '{}'))
  }, [])

  return (
    <div className="flex h-screen w-full flex-col bg-white pt-3">
      <div className="px-5">
        <div className="flex w-full flex-row items-center justify-between bg-white px-5 pb-8 pt-3">
          <Link href="/home">
            <IoChevronBackOutline className="h-6 w-6 self-start justify-self-start text-green-500" />
          </Link>
          <p className="place-self-center self-center justify-self-center text-center text-xl font-semibold text-green-700">
            Benda Sekitar Kamu
          </p>
          <div />
        </div>
        <div className="font-moreSugar">
          <p className="text-end text-xl text-black">Apa yang kamu syukuri dari hidupmu?</p>
          <ul className="mt-4 list-inside list-disc text-black">
            {listInput.map((item) => (
              <li key={item} className="relative mt-2 border-b border-black pb-2 pr-8 text-black">
                {item}
                <button type="button" onClick={() => handleDelete(item)}>
                  <IoCloseOutline className="absolute right-2 top-1/2 h-6 w-6 -translate-y-1/2" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="fixed bottom-0 w-full">
        <div className="relative">
          <input
            onChange={(e) => setInput(e.target.value)}
            placeholder="isi disini..."
            value={input}
            type="text"
            className="w-full border-2 border-black px-3 py-3 pr-12 text-xl text-black"
          />
          <button type="button" onClick={handleClick}>
            <IoSend className="absolute right-3 top-1/2 h-8 w-8 -translate-y-1/2 text-black" />
          </button>
        </div>
      </div>
    </div>
  )
}
