import { Emoticon } from '@/lib/emot'

export function BoxCurhat({ curhat }) {
  const date = new Date(curhat?.tanggal)
  const dateSplit = date.toString().split(' ')
  const numberCurhat = curhat?.mood
  let color = 'text-emoticon-500'
  if (numberCurhat === 5) color = 'text-emoticon-100'
  if (numberCurhat === 4) color = 'text-emoticon-200'
  if (numberCurhat === 3) color = 'text-emoticon-300'
  if (numberCurhat === 2) color = 'text-emoticon-400'

  return (
    <div className="flex w-full max-w-[356px] flex-col rounded-2xl bg-white p-4">
      <div className="flex w-full flex-row gap-2">
        <div className="aspex-square w-11 items-center justify-center rounded-lg bg-neutral-100 p-1 text-center text-green-500">
          <p className="text-xs font-medium">{dateSplit?.[0]}</p>
          <p className="text-base font-bold">{dateSplit?.[2]}</p>
        </div>
        <div className="flex grow flex-col gap-1">
          <p className="text-base font-semibold text-green-700">{curhat?.judul}</p>
          <p className="text-xs font-medium text-green-400">{curhat?.untuk}</p>
        </div>
        <Emoticon number={curhat.mood} className={`h-8 w-8 ${color}`} />
      </div>
      <div className="mt-3 line-clamp-2 text-xs text-neutral-500">{curhat?.isi}</div>
    </div>
  )
}

export default BoxCurhat
