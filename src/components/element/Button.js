export function Button({ children, type, onClick }) {
  const primary =
    'rounded-full text-white bg-green-600 text-sm font-medium w-full h-10 px-6 py-2 justify-center'
  const secondary =
    'rounded-full bg-white text-green-soft-500 border border-green-soft-500 w-full h-10 px-6 py-2 justify-center'
  return (
    <button type="button" onClick={onClick} className={type === 'secondary' ? secondary : primary}>
      {children}
    </button>
  )
}

export default Button
