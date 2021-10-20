import React, { FC } from 'react'
import Toast, { ToastProps } from './Toast'

interface ToastListProps {
  list: ToastProps[]
}

const ToastList: FC<ToastListProps> = ({ list }) => {
  return (
    <>
      {list.map(ToastProps => (
        <Toast {...ToastProps} key={ToastProps.id}></Toast>
      ))}
    </>
  )
}

export default ToastList
