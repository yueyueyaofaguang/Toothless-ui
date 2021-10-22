import Modal, { ModalProps } from './Modal'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import React, { useState } from 'react'
import Button from '../Button/Button'

export default {
  title: 'Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = () => {
  const [modalProps, setModalProps] = useState<ModalProps>({
    visible: true,
    title: '这是一个标题',
    onConfirm: () => {
      _closeModal()
    },
    onCancel: () => {
      _closeModal()
    },
  })

  const _closeModal = () => {
    setModalProps({
      ...modalProps,
      visible: false,
    })
  }

  const handleClickBtn = () => {
    setModalProps({
      ...modalProps,
      visible: true,
    })
  }

  return (
    <div className="App">
      <Button onClick={handleClickBtn}>打开Modal</Button>
      <Modal {...modalProps}>
        <div>这是内容</div>
      </Modal>
    </div>
  )
}

export const Default = Template.bind({})
