import React from 'react'
import './Button.css'

export default function Button({children, onClick, className}) {
  return (
    <div>
        <button id="teste" onClick={onClick} className={className}>{children}</button>
    </div>
  )
}
