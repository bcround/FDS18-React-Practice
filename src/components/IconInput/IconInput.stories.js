/* eslint-disable import/no-anonymous-default-export */
import IconInput from './IconInput'

export default {
  title: '쿠팡/Form/IconInput',
  Component: IconInput,
}

const Template = (args) => <IconInput {...args} />

export const EmailIconInput = Template.bind({})
export const PasswordIconInput = Template.bind({})

EmailIconInput.args = {
  type: 'email',
}


PasswordIconInput.args = {
  type: 'password',
  visible: false,
}