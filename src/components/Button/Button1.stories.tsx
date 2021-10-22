import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from './Button'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Button1',
  component: Button,
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = args => (
  <Button {...args}>Button组件</Button>
)

export const Large = Template.bind({})
Large.args = {
  size: 'lg',
}

export const Small = Template.bind({})
Small.args = {
  size: 'sm',
}

export const Primary = Template.bind({})
Primary.args = {
  btnType: 'primary',
}

export const Danger = Template.bind({})
Danger.args = {
  btnType: 'danger',
}

export const Link = Template.bind({})
Link.args = {
  btnType: 'link',
}
