/* eslint-disable import/no-anonymous-default-export */
import Button from './Button'

export default {
  title: '쿠팡/Form/Button',
  Component: Button,
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({});
export const PrimaryDisabled = Template.bind({});
export const Secondary = Template.bind({});
export const SecondaryDisabled = Template.bind({});

Primary.args = {
  mode: 'primary',
  children: '로그인',
  buttonType: 'submit',
}

PrimaryDisabled.args = {
  mode: 'primary',
  disabled: true,
  children: '로그인',
  buttonType: 'submit',
}

Secondary.args = {
  mode: 'secondary',
  children: '회원가입',
  buttonType: 'submit',
}

SecondaryDisabled.args = {
  mode: 'secondary',
  children: '회원가입',
  disabled: true,
  buttonType: 'submit',
}