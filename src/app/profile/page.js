'use client'

import Link from 'next/link'
import { IoPersonSharp } from 'react-icons/io5'

import { BottomBar } from '@/components/element'
import { useGetUserBoard } from '@/hooks/user'

export default function Profile() {
  const { data } = useGetUserBoard()

  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-white px-5 pt-4">
      <div className="w-full text-end">
        <Link href="/profile/edit">
          <p className="text-base text-green-500">Edit</p>
        </Link>
      </div>
      <div className="mt-5 flex w-full items-center justify-center">
        <div className=" flex h-32 w-32 items-center justify-center rounded-full bg-cream-dark-200">
          <IoPersonSharp className=" h-14 w-14" />
        </div>
      </div>
      <p className="text-xl font-medium text-green-700">{data?.username ?? ''}</p>
      <div className="mt-6 flex w-full flex-col gap-8 px-5">
        <div className="w-full border-b border-cream-dark-600 px-4 pb-2">
          <p className="text-xs font-medium text-green-600">Email</p>
          <p className="font-sm text-green-800">{data?.email ?? ''}</p>
        </div>
        <div className="w-full border-b border-cream-dark-600 px-4 pb-2">
          <p className="text-xs font-medium text-green-600">Tanggal Lahir</p>
          <p className="font-sm text-green-800">{data?.tanggallahir ?? ''}</p>
        </div>
        <div className="w-full border-b border-cream-dark-600 px-4 pb-2">
          <p className="text-xs font-medium text-green-600">Jenis Kelamin</p>
          <p className="font-sm text-green-800">{data?.sex ?? ''}</p>
        </div>
        <div className="w-full border-b border-cream-dark-600 px-4 pb-2">
          <p className="text-xs font-medium text-green-600">Nomor Telepon</p>
          <p className="font-sm text-green-800">{data?.telephone ?? ''}</p>
        </div>
        <div className="w-full border-b border-cream-dark-600 px-4 pb-2">
          <p className="text-xs font-medium text-green-600">Asal</p>
          <p className="font-sm text-green-800">{data?.asal ?? ''}</p>
        </div>
      </div>
      <BottomBar />
    </div>
  )
}
