import { MeditasiCard } from './MeditasiCard'

export function Meditasi() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-3">
      <MeditasiCard />
      <MeditasiCard />
      <MeditasiCard />
      <MeditasiCard />
    </div>
  )
}

export default Meditasi
