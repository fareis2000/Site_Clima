import React from 'react'
import './Buttontwo.css'

export default function Button({children, onClick, className}) {
  return (
    <div>
        <button id="dois" onClick={onClick} className={className}>{children}</button>
    </div>
  )
}
