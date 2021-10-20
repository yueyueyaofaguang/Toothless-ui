import classNames from 'classnames'
import React, { ReactNode } from 'react'

export interface ModalProps {
  visible: Boolean
  title: string
  onConfirm: () => void
  onCancel: () => void
  children?: ReactNode
}

const Modal: React.FC<ModalProps> = props => {
  const handleClose = () => {
    props.onCancel()
  }

  const handleSubmit = () => {
    props.onConfirm()
  }

  const classes = classNames('modal-container', {
    hidden: !props.visible,
  })

  return (
    <div className={classes}>
      <div className="modal">
        <div className="header">
          <div>{props.title}</div>
          <button onClick={handleClose}>X</button>
        </div>
        <div className="main">{props.children}</div>
        <div className="footer">
          <button data-testid="cancel" onClick={handleClose}>
            Return
          </button>
          <button data-testid="confirm" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
