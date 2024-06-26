import { useEffect, useRef, useState } from 'react'

export const useDraw = (onDraw) => {
  const [mouseDown, setMouseDown] = useState(false)

  const canvasRef = useRef(null)
  const prevPoint = useRef(null)

  const onMouseDown = () => setMouseDown(true)

  const clear = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')

    if (!ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }

  useEffect(() => {
    const computePointInCanvas = (e) => {
      const canvas = canvasRef.current
      if (!canvas) return

      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      // eslint-disable-next-line consistent-return
      return { x, y }
    }
    const handler = (e) => {
      if (!mouseDown) return
      const currentPoint = computePointInCanvas(e)
      console.log(e)
      const ctx = canvasRef.current?.getContext('2d')
      if (!ctx || !currentPoint) return

      onDraw({ ctx, currentPoint, prevPoint: prevPoint.current })
      prevPoint.current = currentPoint
    }

    const mouseUpHandler = () => {
      setMouseDown(false)
      console.log('UP')
      prevPoint.current = null
    }

    // Add event listeners
    canvasRef.current?.addEventListener('touchmove', handler)
    window.addEventListener('touchend', mouseUpHandler)

    // Remove event listeners
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      canvasRef?.current?.removeEventListener('touchmove', handler)
      window.removeEventListener('touchend', mouseUpHandler)
    }
  }, [onDraw])

  return { canvasRef, onMouseDown, clear }
}
export default useDraw
