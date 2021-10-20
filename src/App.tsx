import React, { useState } from 'react'
import Modal, { ModalProps } from './components/Modal/Modal'
import { toast } from './components/Toast/ToastManager'
import './styles/index.scss'

// display a toast message when the page loads
// you can call toast.destroy('my-id') from anywhere to remove this message manually with code
toast.show({
  id: 'my-id',
  title: 'Onload toast title',
  content: 'Onload toast body',
  duration: 10000,
  type: 'error',
})

function App() {
  const [modalProps, setModalProps] = useState<ModalProps>({
    visible: true,
    title: '宇宙在你滑动的指尖',
    onConfirm: () => {
      console.log(1)
      _closeModal()
    },
    onCancel: () => {
      console.log(2)
      _closeModal()
    },
  })

  const _closeModal = () => {
    setModalProps({
      ...modalProps,
      visible: false,
    })
  }

  return (
    <div className="App">
      {/* <header className="App-header">
        <button
          onClick={() =>
            toast.show({
              title: 'Toast title',
              content: 'Toast body',
              duration: 10000,
            })
          }
        >
          Show toast
        </button>
      </header> */}
      <Modal {...modalProps}>
        <div>123</div>
      </Modal>
    </div>
  )
}

export default App
