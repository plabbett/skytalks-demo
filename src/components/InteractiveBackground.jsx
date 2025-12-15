'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

// Long signal paths that span across the viewport (in viewport pixel coordinates)
// These create visible trails across the spotlight area
const LONG_SIGNAL_PATHS = [
  // Long horizontal paths at pattern y-coordinates (scaled to viewport)
  { id: 'long-h1', yOffset: 20, length: 400, deadEnd: true, vertical: false },
  { id: 'long-h2', yOffset: 50, length: 400, deadEnd: true, vertical: false },
  { id: 'long-h3', yOffset: 80, length: 400, deadEnd: true, vertical: false },
  // Long vertical paths at pattern x-coordinates
  { id: 'long-v1', xOffset: 20, length: 400, deadEnd: true, vertical: true },
  { id: 'long-v2', xOffset: 50, length: 400, deadEnd: true, vertical: true },
  { id: 'long-v3', xOffset: 80, length: 400, deadEnd: true, vertical: true },
]

export function InteractiveBackground() {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 })
  const [isHovering, setIsHovering] = useState(false)
  const [signals, setSignals] = useState([])
  const containerRef = useRef(null)
  const signalIdRef = useRef(0)
  const timerRef = useRef(null)
  const mousePosRef = useRef({ x: -1000, y: -1000 })

  // Spawn a new signal on a random circuit path at the current mouse position
  const spawnSignal = useCallback((currentMousePos) => {
    const pathDef = LONG_SIGNAL_PATHS[Math.floor(Math.random() * LONG_SIGNAL_PATHS.length)]
    const id = signalIdRef.current++
    const patternSize = 100

    // Calculate signal path based on mouse position and path definition
    let startX, startY, endX, endY, path

    if (pathDef.vertical) {
      // Vertical path - align to the nearest pattern grid line
      const gridX = Math.floor(currentMousePos.x / patternSize) * patternSize + pathDef.xOffset
      startX = gridX
      startY = currentMousePos.y - 200 // Start above mouse
      endX = gridX
      endY = currentMousePos.y + 200 // End below mouse
      path = `M${startX} ${startY} V${endY}`
    } else {
      // Horizontal path - align to the nearest pattern grid line
      const gridY = Math.floor(currentMousePos.y / patternSize) * patternSize + pathDef.yOffset
      startX = currentMousePos.x - 200 // Start left of mouse
      startY = gridY
      endX = currentMousePos.x + 200 // End right of mouse
      endY = gridY
      path = `M${startX} ${startY} H${endX}`
    }

    // Animation duration - longer for longer visible effect
    const duration = 1500 + Math.random() * 500

    const newSignal = {
      id,
      path,
      length: pathDef.length,
      duration,
      fizzling: false,
      endX,
      endY,
      deadEnd: pathDef.deadEnd,
    }

    setSignals(prev => [...prev, newSignal])

    // Trigger fizzle effect near end of signal animation
    if (pathDef.deadEnd) {
      setTimeout(() => {
        setSignals(prev =>
          prev.map(s => s.id === id ? { ...s, fizzling: true } : s)
        )
      }, duration * 0.85)
    }

    // Remove signal after animation completes (including fizzle time)
    setTimeout(() => {
      setSignals(prev => prev.filter(s => s.id !== id))
    }, duration + 600)
  }, [])

  // Schedule next signal spawn with random delay (3-10 seconds)
  const scheduleNextSignal = useCallback(() => {
    const delay = 3000 + Math.random() * 7000 // 3-10 seconds
    timerRef.current = setTimeout(() => {
      if (mousePosRef.current.x > 0) {
        spawnSignal(mousePosRef.current)
      }
      scheduleNextSignal()
    }, delay)
  }, [spawnSignal])

  useEffect(() => {
    const handleMouseMove = (e) => {
      const pos = { x: e.clientX, y: e.clientY }
      setMousePosition(pos)
      mousePosRef.current = pos
      setIsHovering(true)
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
      mousePosRef.current = { x: -1000, y: -1000 }
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  // Start/stop signal spawning based on hovering state
  useEffect(() => {
    if (isHovering) {
      // Initial signal after a short delay when hovering starts
      const initialDelay = setTimeout(() => {
        if (mousePosRef.current.x > 0) {
          spawnSignal(mousePosRef.current)
        }
        scheduleNextSignal()
      }, 1500)

      return () => {
        clearTimeout(initialDelay)
        if (timerRef.current) {
          clearTimeout(timerRef.current)
        }
      }
    } else {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [isHovering, spawnSignal, scheduleNextSignal])

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Pattern layer with mask */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: isHovering ? 1 : 0,
          maskImage: `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 100%)`,
        }}
      >
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Circuit pattern */}
            <pattern
              id="circuit-pattern"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              {/* Horizontal circuit traces */}
              <path
                d="M0 20 H30 M40 20 H60 M70 20 H100"
                stroke="rgba(99, 102, 241, 0.15)"
                strokeWidth="1"
                fill="none"
              />
              <path
                d="M0 50 H20 M30 50 H70 M80 50 H100"
                stroke="rgba(99, 102, 241, 0.12)"
                strokeWidth="1"
                fill="none"
              />
              <path
                d="M0 80 H40 M50 80 H100"
                stroke="rgba(99, 102, 241, 0.15)"
                strokeWidth="1"
                fill="none"
              />

              {/* Vertical circuit traces */}
              <path
                d="M20 0 V30 M20 40 V60 M20 70 V100"
                stroke="rgba(99, 102, 241, 0.12)"
                strokeWidth="1"
                fill="none"
              />
              <path
                d="M50 0 V20 M50 30 V80 M50 90 V100"
                stroke="rgba(99, 102, 241, 0.15)"
                strokeWidth="1"
                fill="none"
              />
              <path
                d="M80 0 V50 M80 60 V100"
                stroke="rgba(99, 102, 241, 0.12)"
                strokeWidth="1"
                fill="none"
              />

              {/* Circuit nodes */}
              <circle cx="20" cy="20" r="3" fill="rgba(99, 102, 241, 0.2)" />
              <circle cx="50" cy="50" r="2" fill="rgba(99, 102, 241, 0.25)" />
              <circle cx="80" cy="20" r="2" fill="rgba(99, 102, 241, 0.15)" />
              <circle cx="20" cy="80" r="2" fill="rgba(99, 102, 241, 0.18)" />
              <circle cx="80" cy="80" r="3" fill="rgba(99, 102, 241, 0.22)" />

              {/* Lock symbol (privacy) */}
              <g transform="translate(45, 75)">
                <rect x="0" y="4" width="10" height="8" rx="1" fill="none" stroke="rgba(99, 102, 241, 0.2)" strokeWidth="1" />
                <path d="M2 4 V2 A3 3 0 0 1 8 2 V4" fill="none" stroke="rgba(99, 102, 241, 0.2)" strokeWidth="1" />
              </g>

              {/* Key symbol (cryptography) */}
              <g transform="translate(70, 45)">
                <circle cx="4" cy="4" r="3" fill="none" stroke="rgba(99, 102, 241, 0.18)" strokeWidth="1" />
                <path d="M7 4 H15 M12 4 V7 M14 4 V6" stroke="rgba(99, 102, 241, 0.18)" strokeWidth="1" fill="none" />
              </g>

              {/* Binary/data dots */}
              <circle cx="35" cy="35" r="1" fill="rgba(99, 102, 241, 0.15)" />
              <circle cx="38" cy="35" r="1" fill="rgba(99, 102, 241, 0.1)" />
              <circle cx="35" cy="38" r="1" fill="rgba(99, 102, 241, 0.12)" />
              <circle cx="65" cy="65" r="1" fill="rgba(99, 102, 241, 0.15)" />
              <circle cx="68" cy="65" r="1" fill="rgba(99, 102, 241, 0.1)" />

              {/* Connection lines with corners */}
              <path
                d="M30 20 L30 30 L40 30"
                stroke="rgba(99, 102, 241, 0.12)"
                strokeWidth="1"
                fill="none"
              />
              <path
                d="M70 50 L70 60 L80 60"
                stroke="rgba(99, 102, 241, 0.1)"
                strokeWidth="1"
                fill="none"
              />
            </pattern>

            {/* Secondary encryption pattern */}
            <pattern
              id="crypto-pattern"
              x="0"
              y="0"
              width="200"
              height="200"
              patternUnits="userSpaceOnUse"
            >
              {/* Encryption block symbols */}
              <rect x="10" y="10" width="20" height="20" rx="2" fill="none" stroke="rgba(129, 140, 248, 0.08)" strokeWidth="1" strokeDasharray="3,2" />
              <rect x="170" y="70" width="20" height="20" rx="2" fill="none" stroke="rgba(129, 140, 248, 0.08)" strokeWidth="1" strokeDasharray="3,2" />
              <rect x="90" y="150" width="20" height="20" rx="2" fill="none" stroke="rgba(129, 140, 248, 0.08)" strokeWidth="1" strokeDasharray="3,2" />

              {/* Network connection nodes */}
              <circle cx="100" cy="100" r="4" fill="none" stroke="rgba(129, 140, 248, 0.1)" strokeWidth="1" />
              <line x1="100" y1="96" x2="100" y2="60" stroke="rgba(129, 140, 248, 0.06)" strokeWidth="1" />
              <line x1="104" y1="100" x2="140" y2="100" stroke="rgba(129, 140, 248, 0.06)" strokeWidth="1" />
              <line x1="96" y1="100" x2="60" y2="100" stroke="rgba(129, 140, 248, 0.06)" strokeWidth="1" />
              <line x1="100" y1="104" x2="100" y2="140" stroke="rgba(129, 140, 248, 0.06)" strokeWidth="1" />

              {/* Shield symbol (security) */}
              <path
                d="M150 20 L150 35 Q150 45 140 50 Q150 45 160 50 Q160 45 160 35 L160 20 Z"
                fill="none"
                stroke="rgba(129, 140, 248, 0.1)"
                strokeWidth="1"
              />

              {/* Map pin (location privacy) */}
              <g transform="translate(40, 120)">
                <path
                  d="M10 0 A10 10 0 1 1 10 20 A10 10 0 0 1 10 0 M10 20 L10 30"
                  fill="none"
                  stroke="rgba(129, 140, 248, 0.08)"
                  strokeWidth="1"
                />
                <circle cx="10" cy="10" r="4" fill="none" stroke="rgba(129, 140, 248, 0.08)" strokeWidth="1" />
              </g>
            </pattern>
            {/* Signal glow filter */}
            <filter id="signal-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Fizzle particle filter */}
            <filter id="fizzle-glow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* CSS Animations */}
          <style>{`
            @keyframes signal-travel {
              0% {
                stroke-dashoffset: var(--path-length);
                opacity: 0;
              }
              5% {
                opacity: 1;
              }
              95% {
                opacity: 1;
              }
              100% {
                stroke-dashoffset: 0;
                opacity: 0.8;
              }
            }

            @keyframes trail-travel {
              0% {
                stroke-dashoffset: var(--path-length);
                opacity: 0;
              }
              5% {
                opacity: 0.6;
              }
              70% {
                opacity: 0.5;
              }
              100% {
                stroke-dashoffset: 0;
                opacity: 0;
              }
            }

            @keyframes signal-pulse {
              0%, 100% {
                opacity: 0.7;
              }
              50% {
                opacity: 1;
              }
            }

            @keyframes fizzle-particle {
              0% {
                opacity: 1;
                transform: translate(0, 0) scale(1);
              }
              100% {
                opacity: 0;
                transform: translate(var(--dx), var(--dy)) scale(0);
              }
            }

            @keyframes fizzle-spark {
              0% {
                opacity: 1;
                r: 2;
              }
              50% {
                opacity: 0.8;
                r: 3;
              }
              100% {
                opacity: 0;
                r: 0;
              }
            }

            .signal-path {
              animation: signal-travel var(--duration) ease-out forwards,
                         signal-pulse 150ms ease-in-out infinite;
            }

            .signal-trail {
              animation: trail-travel var(--duration) ease-out forwards;
            }

            .fizzle-particle {
              animation: fizzle-spark 400ms ease-out forwards;
            }
          `}</style>

          {/* Apply both patterns */}
          <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
          <rect width="100%" height="100%" fill="url(#crypto-pattern)" />

          {/* Render active signals */}
          {signals.map((signal) => {
            // Pre-calculated particle angles (deterministic based on index)
            const particleAngles = [15, 75, 135, 195, 255, 315]
            const particleDistances = [8, 10, 7, 12, 9, 11]
            const headLength = 60 // Bright signal head
            const trailLength = 320 // Long trail - spans most of spotlight

            return (
              <g key={signal.id}>
                {/* Fading trail behind the signal */}
                <path
                  className="signal-trail"
                  d={signal.path}
                  stroke="rgba(147, 197, 253, 0.4)"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  style={{
                    '--path-length': signal.length,
                    '--duration': `${signal.duration}ms`,
                    strokeDasharray: `${trailLength} ${signal.length + 100}`,
                    strokeDashoffset: signal.length,
                  }}
                />
                {/* Bright signal head */}
                <path
                  className="signal-path"
                  d={signal.path}
                  stroke="rgba(147, 197, 253, 1)"
                  strokeWidth="3"
                  fill="none"
                  filter="url(#signal-glow)"
                  strokeLinecap="round"
                  style={{
                    '--path-length': signal.length,
                    '--duration': `${signal.duration}ms`,
                    strokeDasharray: `${headLength} ${signal.length + 100}`,
                    strokeDashoffset: signal.length,
                  }}
                />

                {/* Fizzle effect at dead ends */}
                {signal.fizzling && signal.deadEnd && (
                  <g transform={`translate(${signal.endX}, ${signal.endY})`}>
                    {/* Central spark */}
                    <circle
                      className="fizzle-particle"
                      cx="0"
                      cy="0"
                      r="4"
                      fill="rgba(251, 191, 36, 0.9)"
                      filter="url(#fizzle-glow)"
                    />
                    {/* Scattered particles */}
                    {particleAngles.map((angleDeg, i) => {
                      const angle = angleDeg * (Math.PI / 180)
                      const distance = particleDistances[i]
                      return (
                        <circle
                          key={i}
                          className="fizzle-particle"
                          cx="0"
                          cy="0"
                          r="3"
                          fill={i % 2 === 0 ? 'rgba(251, 191, 36, 0.8)' : 'rgba(239, 68, 68, 0.7)'}
                          filter="url(#fizzle-glow)"
                          style={{
                            '--dx': `${Math.cos(angle) * distance}px`,
                            '--dy': `${Math.sin(angle) * distance}px`,
                            animationDelay: `${i * 40}ms`,
                          }}
                        />
                      )
                    })}
                  </g>
                )}
              </g>
            )
          })}
        </svg>
      </div>

      {/* Subtle glow effect at cursor */}
      <div
        className="pointer-events-none absolute h-[400px] w-[400px] rounded-full transition-opacity duration-500"
        style={{
          left: mousePosition.x - 200,
          top: mousePosition.y - 200,
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.03) 0%, transparent 70%)',
          opacity: isHovering ? 1 : 0,
        }}
      />
    </div>
  )
}
