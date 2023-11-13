'use client'

import { useState } from 'react'
import { ChromePicker } from 'react-color'

import { useDraw } from '@/hooks/useDraw'

export default function GamePage() {
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

  return (
    <div className="w-w-full flex h-screen flex-col items-center justify-center bg-white">
      <div className="flex flex-col gap-10 pr-10">
        <ChromePicker color={color} onChange={(e) => setColor(e.hex)} />
        <button type="button" className="rounded-md border border-black p-2" onClick={clear}>
          Clear canvas
        </button>
      </div>
      <canvas
        ref={canvasRef}
        onMouseDown={onMouseDown}
        width={750}
        height={750}
        className="rounded-md border border-black"
      />
    </div>
  )
}
