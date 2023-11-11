'use client'

import { useState } from 'react'

import { BottomBar } from '@/components/element'
import { Meditasi, Relaksasi } from '@/components/page/relaksasi'

export default function RelaksasiPage() {
  const [menu, setMenu] = useState('meditasi')
  return (
    <div className="h-full min-h-screen bg-cream-200 pb-20">
      <div className=" fixed flex w-full flex-col rounded-b-lg bg-white px-5 pt-4">
        <p className="text-sm text-cream-dark-600">Relaksasi</p>
        <p className="text-xl font-semibold text-green-700">Tenangkan diri kamu...</p>
        <div className="mt-4 flex flex-row justify-around">
          <button
            type="button"
            onClick={() => setMenu('meditasi')}
            className={`${
              menu === 'meditasi'
                ? 'border-b-2 border-green-500  text-green-500'
                : 'text-cream-dark-600'
            } pb-3 text-sm font-medium`}
          >
            Meditasi
          </button>
          <button
            type="button"
            onClick={() => setMenu('relaksasi')}
            className={`${
              menu === 'relaksasi'
                ? 'border-b-2 border-green-500 pb-3 text-green-500'
                : 'text-cream-dark-600'
            }  pb-3 text-sm font-medium`}
          >
            Relaksasi
          </button>
        </div>
      </div>
      <div className="pt-36">{menu === 'meditasi' ? <Meditasi /> : <Relaksasi />}</div>{' '}
      <BottomBar />
    </div>
  )
}
