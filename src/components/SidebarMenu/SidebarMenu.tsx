import React, { useState, useRef, useEffect } from 'react'
import './DraggableLine.css'

interface DraggableLineProps {
  initialPosition: number
  onChangePosition: (newPosition: number) => void
}

const DraggableLine: React.FC<DraggableLineProps> = ({
  initialPosition,
  onChangePosition,
}) => {
  const [position, setPosition] = useState(initialPosition)
  const lineRef = useRef<HTMLDivElement>(null)
  const [dragging, setDragging] = useState(false)

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!dragging) return

      const newPosition = event.clientX
      const containerRect =
        lineRef.current?.parentElement?.getBoundingClientRect()

      if (containerRect) {
        const minX = containerRect.left
        const maxX = containerRect.right
        const clampedPosition = Math.min(maxX, Math.max(minX, newPosition))
        setPosition(clampedPosition)
        onChangePosition(clampedPosition)
      }
    }

    const handleMouseUp = () => {
      setDragging(false)
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }

    const handleMouseDown = () => {
      setDragging(true)
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
    }

    if (lineRef.current) {
      lineRef.current.addEventListener('mousedown', handleMouseDown)
    }

    return () => {
      if (lineRef.current) {
        lineRef.current.removeEventListener('mousedown', handleMouseDown)
      }
    }
  }, [onChangePosition, dragging])

  return (
    <div className={`draggable-line-container ${dragging ? 'dragging' : ''}`}>
      <div
        className="draggable-line"
        style={{ left: `${position}px` }}
        ref={lineRef}
      />
    </div>
  )
}

export default DraggableLine
