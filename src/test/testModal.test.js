import { cleanup, fireEvent, render } from '@testing-library/react'
import Modal from '../components/Modal/Modal'
import React from 'react'

afterEach(cleanup)

it('EventIsTrigger', () => {
  const handleCancel = jest.fn()
  const handleConfirm = jest.fn()
  const { getByTestId } = render(
    <Modal
      visible={true}
      title="123"
      onCancel={handleCancel}
      onConfirm={handleConfirm}
    />,
  )
  fireEvent.click(getByTestId('cancel'))
  fireEvent.click(getByTestId('confirm'))
  expect(handleCancel).toHaveBeenCalledTimes(1)
  expect(handleConfirm).toHaveBeenCalledTimes(1)
})
