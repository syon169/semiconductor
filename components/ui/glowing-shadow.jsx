"use client"

import { ReactNode } from "react"
import "./glowing-shadow.css"

export function GlowingShadow({ children }) {
  return (
    <div className="glow-container" role="button">
      <span className="glow"></span>
      <div className="glow-content">{children}</div>
    </div>
  )
}
