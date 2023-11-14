'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { IoChevronBackOutline, IoSend } from 'react-icons/io5'

export default function BendaSekitar() {
  const [form, setForm] = useState({})
  const [sekitar, setSekitar] = useState(JSON.parse(localStorage?.getItem('sekitar') ?? '{}'))
  const handleClick = () => {
    localStorage.setItem('sekitar', JSON.stringify(form))
    setSekitar(JSON.parse(localStorage?.getItem('sekitar') ?? '{}'))
  }
  useEffect(() => {
    setSekitar(JSON.parse(localStorage?.getItem('sekitar') ?? '{}'))
  }, [])
  return (
    <div className="flex h-screen w-full flex-col bg-white px-5 pt-3">
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
        <p className="text-justify text-black">
          Ketika kamu merasa sendiri, ketahuilah selalu ada benda-benda di sekitarmu yang
          menemanimu. Mereka ada dalam beragam rupa dan warna. Sekarang, sentuhlah benda-benda
          tersebut, lalu kelompokkan benda-benda ini menurut jenisnya di bawah ini!
        </p>
        <div className="mt-2">
          <p className="text-2xl text-black">Benda Keras</p>
          {sekitar?.keras ? (
            <div className="w-full rounded-2xl border-2 border-black px-3 py-3 pr-12 text-xl text-black">
              {sekitar.keras}
            </div>
          ) : (
            <div className="relative">
              <input
                onChange={(e) => {
                  setForm({
                    ...form,
                    keras: e.target.value,
                  })
                }}
                placeholder="isi disini..."
                type="text"
                className="w-full rounded-2xl border-2 border-black px-3 py-3 pr-12 text-xl text-black"
              />
              <button type="button" onClick={handleClick}>
                <IoSend className="absolute right-3 top-1/2 h-8 w-8 -translate-y-1/2 text-black" />
              </button>
            </div>
          )}
        </div>
        <div className="mt-2">
          <p className="text-2xl text-black">Benda Lembut</p>
          {sekitar?.lembut ? (
            <div className="w-full rounded-2xl border-2 border-black px-3 py-3 pr-12 text-xl text-black">
              {sekitar.lembut}
            </div>
          ) : (
            <div className="relative">
              <input
                onChange={(e) => {
                  setForm({
                    ...form,
                    lembut: e.target.value,
                  })
                }}
                placeholder="isi disini..."
                type="text"
                className="w-full rounded-2xl border-2 border-black px-3 py-3 pr-12 text-xl text-black"
              />
              <button type="button" onClick={handleClick}>
                <IoSend className="absolute right-3 top-1/2 h-8 w-8 -translate-y-1/2 text-black" />
              </button>
            </div>
          )}
        </div>
        <div className="mt-2">
          <p className="text-2xl text-black">Benda Hangat</p>
          {sekitar?.hangat ? (
            <div className="w-full rounded-2xl border-2 border-black px-3 py-3 pr-12 text-xl text-black">
              {sekitar.hangat}
            </div>
          ) : (
            <div className="relative">
              <input
                onChange={(e) => {
                  setForm({
                    ...form,
                    hangat: e.target.value,
                  })
                }}
                placeholder="isi disini..."
                type="text"
                className="w-full rounded-2xl border-2 border-black px-3 py-3 pr-12 text-xl text-black"
              />
              <button type="button" onClick={handleClick}>
                <IoSend className="absolute right-3 top-1/2 h-8 w-8 -translate-y-1/2 text-black" />
              </button>
            </div>
          )}
        </div>
        <div className="mt-2">
          <p className="text-2xl text-black">Benda Dingin</p>
          {sekitar?.dingin ? (
            <div className="w-full rounded-2xl border-2 border-black px-3 py-3 pr-12 text-xl text-black">
              {sekitar.dingin}
            </div>
          ) : (
            <div className="relative">
              <input
                onChange={(e) => {
                  setForm({
                    ...form,
                    dingin: e.target.value,
                  })
                }}
                placeholder="isi disini..."
                type="text"
                className="w-full rounded-2xl border-2 border-black px-3 py-3 pr-12 text-xl text-black"
              />
              <button type="button" onClick={handleClick}>
                <IoSend className="absolute right-3 top-1/2 h-8 w-8 -translate-y-1/2 text-black" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
