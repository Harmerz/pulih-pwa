'use client'

import { message } from 'antd'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { Button } from '@/components/element'
import { useSignUp } from '@/hooks/user'

export default function Screen() {
  const [form, setForm] = useState({})
  const [notMatch, setNotMatch] = useState(false)

  const [messageApi, contextHolder] = message.useMessage()
  const { mutate: SignUp, data, isError } = useSignUp()
  const router = useRouter()

  const success = (succ) => {
    messageApi.open({
      type: 'success',
      content: succ,
    })
  }

  const error = (err) => {
    messageApi.open({
      type: 'success',
      content: `Error ${err}`,
    })
  }

  const onFinish = async () => {
    try {
      SignUp(form)
      success(data?.message)
      router.push('/signin')
      router.refresh()
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err)
    }
    if (isError) error(data)
  }

  return (
    <>
      {contextHolder}
      <div className="flex h-screen w-full flex-col items-center justify-center bg-white">
        <p className="text-2xl font-semibold text-green-700">Buat Akun Baru</p>
        <form className="mt-14 flex w-4/5 max-w-[252px] flex-col gap-6">
          <div className="relative">
            <div className="absolute -top-2 left-4  bg-white px-1 text-xs text-green-600">
              Full Name
            </div>
            <input
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value,
                })
              }
              required
              type="text"
              placeholder="Username"
              className="w-full rounded-lg border border-b border-neutral-500 px-4 py-2 text-black"
            />
          </div>
          <div className="relative">
            <div className="absolute -top-2 left-4  bg-white px-1 text-xs text-green-600">
              Username
            </div>
            <input
              onChange={(e) =>
                setForm({
                  ...form,
                  username: e.target.value,
                })
              }
              required
              type="text"
              placeholder="Username"
              className="w-full rounded-lg border border-b border-neutral-500 px-4 py-2 text-black"
            />
          </div>
          <div className="relative">
            <div className="absolute -top-2 left-4  bg-white px-1 text-xs text-green-600">
              Email
            </div>
            <input
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value,
                })
              }
              required
              type="email"
              placeholder="Email"
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
              placeholder="Password"
              className="w-full rounded-lg border border-neutral-500 bg-white px-4 py-2 text-black"
            />
          </div>
          <div className="relative">
            <div className="absolute -top-2 left-4 bg-white px-1 text-xs text-green-600">
              Re-enter Password
            </div>
            <input
              onChange={(e) => {
                if (e.target.value !== form.password) {
                  setNotMatch(true)
                } else {
                  setNotMatch(false)
                }
              }}
              required
              type="password"
              placeholder="Re-enter Password"
              className="w-full rounded-lg border border-neutral-500 bg-white px-4 py-2 text-black"
            />
            {notMatch && (
              <div className="text-sm text-red-500">*Please enter the match password</div>
            )}{' '}
          </div>
          <div className="mt-20">
            <Button type="primary" onClick={onFinish}>
              Daftar
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
