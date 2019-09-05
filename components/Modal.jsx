import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

const Modal = ({ children }) => {
  const elRef = useRef(null)
  if (!elRef.current) {
    const div = document.createElement('div')
    elRef.current = div
  }

  useEffect(() => {
    const modalRoot = document.getElementById('modal')
    modalRoot.appendChild(elRef.current)

    if (modalRoot !== null) {
      container.appendChild(elem)
    } else console.log('aaaaa')

    return () => modalRoot.removeChild(elRef.current)
  }, []) // Empty array added so useffect only runs once

  return createPortal(<div>{children}</div>, elRef.current)
}

export default Modal
git
