import classNames from 'classnames'
import React, { useEffect } from 'react'

export interface ToastProps {
  id: string
  destroy: () => void
  title: string
  content: string
  duration?: number
  type: ToastType
}

export type ToastType = 'normal' | 'success' | 'error' | 'warning'

const Toast: React.FC<ToastProps> = props => {
  const { destroy, content, title, duration = 0, id, type } = props
  const classes = classNames('toast', {
    [`toast-${type}`]: type,
  })

  useEffect(() => {
    if (!duration) return

    const timer = setTimeout(() => {
      destroy()
    }, duration)

    return () => clearTimeout(timer)
  }, [destroy, duration])

  return (
    <div className={classes}>
      <div className="header">
        <div>
          {title} {id}
        </div>
        <button onClick={destroy}>X</button>
      </div>
      <div className="toast-body">{content}</div>
    </div>
  )
}

const shouldRender = (prevProps: ToastProps, nextProps: ToastProps) => {
  return prevProps.id === nextProps.id
}

export default React.memo(Toast, shouldRender)
