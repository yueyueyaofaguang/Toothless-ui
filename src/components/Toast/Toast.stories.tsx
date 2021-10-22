import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Toast from './Toast'
import { toast } from './ToastManager'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Toast',
  component: Toast,
} as ComponentMeta<typeof Toast>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Toast> = args => (
  <button onClick={() => toast.show(args)}>Click Me</button>
)

export const Success = Template.bind({})
Success.args = {
  type: 'success',
}

export const Error = Template.bind({})
Error.args = {
  type: 'error',
}

export const Warning = Template.bind({})
Warning.args = {
  type: 'warning',
}
