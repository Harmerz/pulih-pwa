'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { useState } from 'react'

import { Button } from '@/components/element'

export default function Screen() {
  const router = useRouter()
  const [form, setForm] = useState({})
  const onFinish = async () => {
    console.log(form)
    try {
      const res = await signIn('credentials', {
        redirect: false,
        ...form,
      })
      if (!res?.error) {
        router.refresh()
      }
    } catch (err) {
      throw Error.message(err)
    }
  }
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-white">
      <div className="relative aspect-[252/304] w-4/5 max-w-[156px]">
        <Image src="/assets/images/logo.png" fill alt="logo" />
      </div>
      <form className="mt-14 flex w-4/5 max-w-[252px] flex-col gap-6">
        <div className="relative">
          <div className="absolute -top-2 left-4  bg-white px-1 text-xs text-green-600">
            Email/Username
          </div>
          <input
            onChange={(e) => {
              if (e.target.value.includes('@')) {
                setForm({
                  ...form,
                  email: e.target.value,
                })
              } else {
                setForm({
                  ...form,
                  username: e.target.value,
                })
              }
            }}
            required
            type="text"
            placeholder="input"
            className="w-full rounded-lg border border-b border-neutral-500 px-4 py-2 text-black"
          />
        </div>
        <div className="relative">
          <div className="absolute -top-2 left-4 bg-white px-1 text-xs text-green-600">
            Password
          </div>
          <input
            onChange={(e) =>
              setForm({
                ...form,
                password: e.target.value,
              })
            }
            required
            type="password"
            placeholder="input"
            className="w-full rounded-lg border border-neutral-500 bg-white px-4 py-2 text-black"
          />
        </div>
        <div className="mt-20">
          <Button type="primary" onClick={onFinish}>
            Masuk
          </Button>
        </div>
      </form>
    </div>
  )
}
