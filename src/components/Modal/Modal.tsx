import classNames from 'classnames'
import React, { ReactNode } from 'react'
import Button from '../Button/Button'

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
          <Button data-testid="cancel" onClick={handleClose}>
            Return
          </Button>
          <Button data-testid="confirm" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  )
}

Modal.defaultProps = {
  visible: true,
  title: '这是一个标题',
  onCancel: () => {
    console.log('cancel')
  },
  onConfirm: () => {
    console.log('confirm')
  },
}

export default Modal
