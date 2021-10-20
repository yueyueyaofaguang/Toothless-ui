import { nanoid } from 'nanoid'
import { type } from 'os'
import React from 'react'
import ReactDOM from 'react-dom'
import Toast, { ToastProps, ToastType } from './Toast'
import ToastList from './ToastList'

interface ToastOptions {
  id?: string
  title: string
  content: string
  duration?: number
  type?: ToastType
}

export class ToastManager {
  private containerRef: HTMLDivElement
  private toasts: ToastProps[] = []

  constructor() {
    const body = document.getElementsByTagName('body')[0] as HTMLBodyElement
    const toastContainer = document.createElement('div') as HTMLDivElement
    toastContainer.id = 'toast-container-main'
    body.insertAdjacentElement('beforeend', toastContainer)
    this.containerRef = toastContainer
  }

  public show(options: ToastOptions): void {
    const toastId = nanoid()
    const toast: ToastProps = {
      id: toastId,
      type: 'normal',
      ...options, // if id is passed within options, it will overwrite the auto-generated one
      destroy: () => this.destroy(options.id ?? toastId),
    }

    this.toasts = [toast, ...this.toasts]
    this.render()
  }

  public destroy(id: string): void {
    this.toasts = this.toasts.filter((toast: ToastProps) => toast.id !== id)
    this.render()
  }

  private render(): void {
    const toastsList = <ToastList list={this.toasts}></ToastList>
    ReactDOM.render(toastsList, this.containerRef)
  }
}

export const toast = new ToastManager()
