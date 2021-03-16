/* eslint-disable import/no-anonymous-default-export */
import Checkbox from './Checkbox'

export default {
  title: '쿠팡/Form/Checkbox',
  Component: Checkbox,
}

const Template = (args) => <Checkbox {...args} />

export const Checked = Template.bind({})
