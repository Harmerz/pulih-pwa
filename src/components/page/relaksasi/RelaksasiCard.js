export function RelaksasiCard() {
  return (
    <div className="flex w-[90%] max-w-[364px] flex-row gap-3 rounded-2xl bg-white p-3">
      <div className="w-1/5 rounded-lg bg-green-500" />
      <div className="flex w-1/5 grow flex-col gap-2">
        <p className="text-base font-semibold text-green-700">Nama Meditasi</p>
        <p className="text-xs text-neutral-500">
          Cobalah diam sejenak dan introspeksi diri sendiri, apa yang menyebebkan kamu menjadi marah
        </p>
        <div className="flex flex-row gap-2 text-xs font-medium text-green-500">
          <p>14 min</p>
          <p>#tones</p>
        </div>
      </div>
    </div>
  )
}

export default RelaksasiCard
