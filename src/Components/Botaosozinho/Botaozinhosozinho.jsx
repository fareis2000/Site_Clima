import React from 'react'
import './botaozinhosozinho.css'

export default function botaozinhosozinho({children, onClick, className}) {
  return (
    <div>
        <button id="baixo" className={className} onClick={onClick}>{children}</button>
    </div>
  )
}
