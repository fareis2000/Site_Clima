import React from 'react'
import './Popup.css'

export default function Popup({ message, children, duration = 3000, onClose }) {
  // support both a message prop and children for flexibility
  const text = message || children
  const [isVisible, setIsVisible] = React.useState(true)

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      if (onClose) {
        onClose()
      }
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  if (!isVisible) {
    return null
  }

  return (
    <div>
      {isVisible && (
        <div className="popup">
          <div className="popup-container">
            <p>{text}</p>
            <button onClick={() => setIsVisible(false)}>❌</button>
          </div>
        </div>
      )}
    </div>
  )
}
