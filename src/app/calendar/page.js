'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { IoChevronBackCircle, IoChevronBackOutline, IoChevronForwardCircle } from 'react-icons/io5'

import { useGetCurhat } from '@/hooks/curhat'
import { Emoticon } from '@/lib/emot'

function getDaysInMonth(month, year) {
  const date = new Date(year, month, 1)
  const days = []
  if (date.getDay() !== 0) {
    const temp = new Date(date)
    temp.setDate(temp.getDate() - date.getDay())
    while (temp.getDate() !== date.getDate()) {
      days.push(new Date(temp))
      temp.setDate(temp.getDate() + 1)
    }
  }
  while (date.getMonth() === month || days.length < 42) {
    days.push(new Date(date))
    date.setDate(date.getDate() + 1)
  }
  return Array.from({ length: 6 }, () => days.splice(0, 7))
}

export default function MoodCalendar() {
  const { data } = useGetCurhat()
  const date = new Date()
  const [month, setMonth] = useState(date.getMonth())
  const year = date.getFullYear()
  const hari = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab']
  const bulan = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ]
  const daysInMonthForCalendar = useMemo(() => getDaysInMonth(month, year), [month, year])
  return (
    <div className="h-full min-h-screen w-full bg-cream-200">
      <div className="flex w-full flex-row items-center justify-between bg-white px-5 pb-8 pt-3">
        <Link href="/home">
          <IoChevronBackOutline className="h-6 w-6 self-start justify-self-start text-green-500" />
        </Link>
        <p className="place-self-center self-center justify-self-center text-center text-xl font-semibold text-green-700">
          Mood Calendar
        </p>
        <div />
      </div>
      <div className="flex w-full flex-col rounded-b-xl bg-white px-5 pb-2">
        <div className="flex w-full flex-row justify-between">
          <div className="flex flex-col">
            <p className="text-sm text-cream-dark-600">Hai bagaimana hari mu?</p>
            <p className="text-xl font-semibold text-green-500">
              {`${bulan[month]} ${year.toString()}`}
            </p>
          </div>
          <div className="flex flex-row gap-5">
            <button type="button" onClick={() => setMonth(month - 1)}>
              <IoChevronBackCircle className="h-8 w-8 text-green-600" />
            </button>
            <button type="button" onClick={() => setMonth(month - 1)}>
              <IoChevronForwardCircle className="h-8 w-8 text-green-600" />
            </button>
          </div>
        </div>
        <div>
          <table className="mt-6 w-full table-fixed border-collapse">
            <thead>
              <tr>
                {hari.map((item) => (
                  <th
                    key={item}
                    className="w-[14.28%] text-center text-sm font-semibold text-green-500"
                  >
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {daysInMonthForCalendar.map((item) => (
                <tr
                  key={item[0].toString() + item[1].toString()}
                  className="h-[48px] items-center justify-center"
                >
                  {item.map((numberDay) => {
                    const tzoffset = new Date(numberDay).getTimezoneOffset() * 60000
                    const localISOTime = new Date(numberDay - tzoffset).toISOString()
                    const moody = data?.[0]?.curhat?.find(
                      (e) => e.tanggal === localISOTime.split('T')[0],
                    )
                    let emot = ''
                    if (moody?.mood === 1) {
                      emot = 'bg-emoticon-500'
                    }
                    if (moody?.mood === 2) {
                      emot = 'bg-emoticon-400'
                    }
                    if (moody?.mood === 3) {
                      emot = 'bg-emoticon-300'
                    }
                    if (moody?.mood === 4) {
                      emot = 'bg-emoticon-200'
                    }
                    if (moody?.mood === 5) {
                      emot = 'bg-emoticon-100'
                    }

                    return (
                      <td
                        key={numberDay.toString()}
                        className={` items-center justify-center duration-100`}
                      >
                        <div
                          className={`mx-auto flex h-[28px] w-[28px] flex-col items-center  justify-center rounded-full ${
                            numberDay.getMonth() === month ? 'text-neutral-700' : 'text-neutral-300'
                          } ${emot}`}
                        >
                          <p
                            className={`flex items-center justify-center rounded-full text-sm font-medium ${
                              moody && 'text-white '
                            } `}
                          >
                            {numberDay.getDate()}
                          </p>
                        </div>
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-full px-5">
        <div className="mt-5 flex w-full flex-row justify-center gap-3 rounded-2xl bg-white  py-2">
          <button
            type="button"
            className="flex h-[74px] w-16 flex-col items-center justify-center gap-1 rounded-lg px-1 py-2 text-emoticon-500"
          >
            <Emoticon className="h-8 w-8" number={1} />
            Awful
          </button>
          <button
            type="button"
            className="flex h-[74px] w-16 flex-col items-center justify-center gap-1 rounded-lg px-1 py-2 text-emoticon-400"
          >
            <Emoticon className="h-8 w-8" number={2} />
            Bad
          </button>
          <button
            type="button"
            className="flex h-[74px] w-16 flex-col items-center justify-center gap-1 rounded-lg px-1 py-2 text-emoticon-300"
          >
            <Emoticon className="h-8 w-8" number={3} />
            Meh
          </button>
          <button
            type="button"
            className="flex h-[74px] w-16 flex-col items-center justify-center gap-1 rounded-lg px-1 py-2 text-emoticon-200"
          >
            <Emoticon className="h-8 w-8" number={4} />
            Good
          </button>
          <button
            type="button"
            className="flex h-[74px] w-16 flex-col items-center justify-center gap-1 rounded-lg px-1 py-2 text-emoticon-100"
          >
            <Emoticon className="h-8 w-8" number={5} />
            Rad
          </button>
        </div>
        {/* <p className="mt-5 text-2xl font-semibold text-green-800">Mood Chart</p> */}
      </div>
    </div>
  )
}
