import Link from 'next/link'
import { IoArrowForward } from 'react-icons/io5'

export function CardBook({ data }) {
  return (
    <Link href={`/home${data?.link}`}>
      <div className="relative flex h-[130px] w-full max-w-[388px] flex-row justify-end">
        <div className="absolute left-0 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-[3px] border-cream-light-50 bg-green-500 text-cream-light-50">
          <IoArrowForward className="h-5 w-5" />
        </div>
        <div className="flex h-full w-[94%] flex-col gap-2 rounded-2xl border-4 border-cream-light-50 bg-cream-light-50 py-3 pl-9 pr-4">
          <div className="w-fit rounded-lg bg-cream-dark-200 px-3 py-[2px] text-xs text-green-soft-600">
            {data?.bagian}
          </div>
          <p className="text-base font-bold text-green-700">{data?.judul}</p>
          <p className="line-clamp-2 text-xs text-neutral-500">{data?.isi}</p>
        </div>
      </div>
    </Link>
  )
}

export default CardBook
