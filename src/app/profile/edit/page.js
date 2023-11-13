'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { IoPersonSharp } from 'react-icons/io5'

import { BottomBar } from '@/components/element'
import { useGetUserBoard, useUserSending } from '@/hooks/user'

export default function Profile() {
  const { data: user } = useGetUserBoard()
  const [form, setForm] = useState(user)
  const [modal, setModal] = useState(false)
  const [sex, setSex] = useState('')
  const { mutate: Update, data, isError } = useUserSending()
  const router = useRouter()
  const onFinish = async () => {
    try {
      Update({ ...form, sex })
      router.push('/profile')
      router.refresh()
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err)
    }
    if (isError) console.log(data)
  }
  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-white px-5 pt-4">
      <div className="flex w-full justify-between">
        <Link href="/profile">
          <p className=" text-base text-emoticon-500">Batal</p>
        </Link>
        <button type="button" onClick={onFinish}>
          <p className="text-base text-green-500">Simpan</p>
        </button>
      </div>
      <div className="mt-5 flex w-full items-center justify-center">
        <div className=" flex h-32 w-32 items-center justify-center rounded-full bg-cream-dark-200">
          <IoPersonSharp className=" h-14 w-14" />
        </div>
      </div>
      <p className="text-xl font-medium text-green-700">Username</p>
      <div className="mt-6 flex w-full flex-col gap-7 px-5">
        <div className="w-full border-b border-cream-dark-600 px-4 pb-2">
          <p className="text-xs font-medium text-green-600">Full Name</p>
          <input
            onChange={(e) => {
              setForm({
                ...form,
                name: e.target.value,
              })
            }}
            value={user?.name}
            className="font-sm w-full text-green-800 ring-transparent"
            type="email"
          />
        </div>
        <div className="w-full border-b border-cream-dark-600 px-4 pb-2">
          <p className="text-xs font-medium text-green-600">Email</p>
          <input
            onChange={(e) => {
              setForm({
                ...form,
                email: e.target.value,
              })
            }}
            value={user?.email}
            className="font-sm w-full text-green-800 ring-transparent"
            type="email"
          />
        </div>
        <div className="w-full border-b border-cream-dark-600 px-4 pb-2">
          <p className="text-xs font-medium text-green-600">Tanggal Lahir</p>
          <input
            onChange={(e) => {
              setForm({
                ...form,
                tanggallahir: e.target.value,
              })
            }}
            value={user?.tanggallahir}
            className="font-sm w-full text-green-800 ring-transparent"
            type="date"
          />
        </div>
        <div className="relative w-full border-b border-cream-dark-600 px-4 pb-2">
          <p className="text-start text-xs font-medium text-green-600">Jenis Kelamin</p>
          <button
            onClick={() => setModal(!modal)}
            type="button"
            className="font-sm h-2 w-full text-start text-green-800"
          >
            {sex ?? 'None'}
          </button>
          {modal && (
            <div className="absolute flex w-full flex-col gap-2 bg-neutral-50 text-black ">
              <button onClick={() => [setSex('Laki-laki'), setModal(false)]} type="button">
                Laki-laki
              </button>
              <button onClick={() => [setSex('Perempuan'), setModal(false)]} type="button">
                Perempuan
              </button>
            </div>
          )}
        </div>
        <div className="w-full border-b border-cream-dark-600 px-4 pb-2">
          <p className="text-xs font-medium text-green-600">Nomor Telepon</p>
          <input
            value={user?.telephone}
            onChange={(e) => {
              setForm({
                ...form,
                telephone: e.target.value,
              })
            }}
            className="font-sm w-full  text-green-800"
            type="number"
          />
        </div>
        <div className="w-full border-b border-cream-dark-600 px-4 pb-2">
          <p className="text-xs font-medium text-green-600">Asal</p>
          <input
            value={user?.asal}
            onChange={(e) => {
              setForm({
                ...form,
                asal: e.target.value,
              })
            }}
            className="font-sm w-full text-green-800 ring-0 ring-offset-0 focus:ring-0"
            type="text"
          />
        </div>
      </div>
      <BottomBar />
    </div>
  )
}
