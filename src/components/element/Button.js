import { AiOutlineLoading3Quarters } from 'react-icons/ai'

export function Button({ children, type, onClick, loading = false }) {
  const primary = `rounded-full text-white text-sm font-medium w-full h-10 px-6 py-2 justify-center flex flex-row items-center gap-2 ${
    loading ? 'cursor-not-allowed disabled bg-green-400' : 'bg-green-600'
  }`
  const secondary = `rounded-full bg-white 0 border w-full h-10 px-6 py-2 justify-center flex flex-row items-center gap-2 ${
    loading
      ? 'border-green-soft-400 text-green-soft-400 cursor-not-allowed disabled'
      : 'text-green-soft-500 border-green-soft-500'
  }`
  return (
    <button
      disabled={loading}
      type="button"
      onClick={onClick}
      className={type === 'secondary' ? secondary : primary}
    >
      {loading && <AiOutlineLoading3Quarters className="h-5 w-5 animate-spin" />} {children}
    </button>
  )
}

export default Button
