/* eslint-disable import/no-anonymous-default-export */
import Input from './Input'

export default {
  title: '쿠팡/Form/Input',
  Component: Input,
}

const Template = (args) => <Input {...args} />

export const EmailInput = Template.bind({})
// export const EmailInputNormal = Template.bind({})
export const PasswordInput = Template.bind({})
// export const PasswordInputNormal = Template.bind({})

EmailInput.args = {
  type: 'email',
  // state: 'inputed',
}

// EmailInputNormal.args = {
//   type: 'email',
//   state: 'normal',
// }

PasswordInput.args = {
  type: 'password',
  // state: 'inputed',
  visible: false,
}

// PasswordInputNormal.args = {
//   type: 'password',
//   // state: 'normal',
//   visible: false,
// }
