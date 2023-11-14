'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { IoChevronBackOutline } from 'react-icons/io5'

import { Button } from '@/components/element'
import { useChatMutation } from '@/hooks/curhat'
import { Emoticon } from '@/lib/emot'

export default function TulisCurhat() {
  const [mood, setMood] = useState(0)

  const [form, setForm] = useState()
  const { mutate: Update, data, isError, isSuccess, isLoading } = useChatMutation()
  const router = useRouter()
  const onFinish = async () => {
    try {
      Update({
        curhat: {
          ...form,
          mood,
        },
      })
      if (isSuccess) {
        router.push('/curhat')
        router.refresh()
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err)
    }
    if (isError) console.log(data)
  }
  console.log(isSuccess, isLoading, isError)
  const Clear = () => {
    setForm()
    setMood(0)
    document.getElementById('myForm').reset()
  }
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
      <form
        id="myForm"
        className="-mt-[124px] flex h-full min-h-screen w-full flex-col gap-5 bg-cream-light-50 px-5 pt-44"
      >
        <div className="relative">
          <div className="absolute -top-2 left-4 bg-cream-light-50 px-1 text-xs text-green-600">
            Tanggal
          </div>
          <input
            onChange={(e) => {
              setForm({
                ...form,
                tanggal: e.target.value,
              })
            }}
            value={form?.tanggal}
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
            onChange={(e) => {
              setForm({
                ...form,
                judul: e.target.value,
              })
            }}
            value={form?.judul}
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
            onChange={(e) => {
              setForm({
                ...form,
                isi: e.target.value,
              })
            }}
            value={form?.isi}
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
            onChange={(e) => {
              setForm({
                ...form,
                untuk: e.target.value,
              })
            }}
            value={form?.untuk}
            type="text"
            placeholder="input"
            className=" w-full rounded-lg border border-neutral-500 bg-cream-light-50 px-4 py-2 text-black"
          />
        </div>
        <div className="mt-5 text-xs font-medium text-neutral-500">Pilih mood Anda</div>
        <div className="flex w-full flex-row justify-between">
          <button
            type="button"
            onClick={() => setMood(1)}
            className={` ${
              mood === 1 ? 'border border-cream-light-600 text-emoticon-500' : 'text-cream-dark-300'
            } flex h-[74px] w-16 flex-col items-center justify-center gap-1 rounded-lg px-1 py-2`}
          >
            <Emoticon className="h-8 w-8" number={1} />
            Awful
          </button>
          <button
            type="button"
            onClick={() => setMood(2)}
            className={` ${
              mood === 2 ? 'border border-cream-light-500 text-emoticon-500' : 'text-cream-dark-300'
            } flex h-[74px] w-16 flex-col items-center justify-center gap-1 rounded-lg px-1 py-2`}
          >
            <Emoticon className="h-8 w-8" number={2} />
            Bad
          </button>
          <button
            type="button"
            onClick={() => setMood(3)}
            className={` ${
              mood === 3 ? 'border border-cream-light-600 text-emoticon-300' : 'text-cream-dark-300'
            } flex h-[74px] w-16 flex-col items-center justify-center gap-1 rounded-lg px-1 py-2`}
          >
            <Emoticon className="h-8 w-8" number={3} />
            Meh
          </button>
          <button
            type="button"
            onClick={() => setMood(4)}
            className={` ${
              mood === 4 ? 'border border-cream-light-600 text-emoticon-200' : 'text-cream-dark-300'
            } flex h-[74px] w-16 flex-col items-center justify-center gap-1 rounded-lg px-1 py-2`}
          >
            <Emoticon className="h-8 w-8" number={4} />
            Good
          </button>
          <button
            type="button"
            onClick={() => setMood(5)}
            className={` ${
              mood === 5 ? 'border border-cream-light-600 text-emoticon-100' : 'text-cream-dark-300'
            } flex h-[74px] w-16 flex-col items-center justify-center gap-1 rounded-lg px-1 py-2`}
          >
            <Emoticon className="h-8 w-8" number={5} />
            Rad
          </button>
        </div>
        <div className="flex w-full flex-row justify-between gap-16">
          <Button type="secondary" onClick={() => Clear}>
            Bersihkan
          </Button>
          <Button type="primary" loading={isLoading} onClick={onFinish}>
            Simpan
          </Button>
        </div>
      </form>
    </div>
  )
}
