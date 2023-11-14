'use client'

import { useEffect, useState } from 'react'
import { ChromePicker } from 'react-color'

import { useDraw } from '@/hooks/useDraw'

export default function CanvasGame() {
  const [color, setColor] = useState('#000')

  function drawLine({ prevPoint, currentPoint, ctx }) {
    const { x: currX, y: currY } = currentPoint
    const lineColor = color
    const lineWidth = 5

    const startPoint = prevPoint ?? currentPoint
    ctx.beginPath()
    ctx.lineWidth = lineWidth
    ctx.strokeStyle = lineColor
    ctx.moveTo(startPoint.x, startPoint.y)
    ctx.lineTo(currX, currY)
    ctx.stroke()

    ctx.fillStyle = lineColor
    ctx.beginPath()
    ctx.arc(startPoint.x, startPoint.y, 2, 0, 2 * Math.PI)
    ctx.fill()
  }
  const { canvasRef, onMouseDown, clear } = useDraw(drawLine)
  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d')
    ctx.canvas.width = window.innerWidth
    ctx.canvas.height = window.innerHeight
  }, [canvasRef])

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-white">
      <div className="flex flex-col gap-10 pr-10">
        <ChromePicker color={color} onChange={(e) => setColor(e.hex)} />
        <button type="button" className="rounded-md border border-black p-2" onClick={clear}>
          Clear canvas
        </button>
      </div>
      <div className="relative w-full">
        <canvas
          ref={canvasRef}
          onMouseDown={onMouseDown}
          className="rounded-md border border-black"
        />
      </div>
    </div>
  )
}
