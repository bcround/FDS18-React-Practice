/* eslint-disable import/no-anonymous-default-export */
import SignIn from '../SignIn/SignIn'

export default {
  title: '쿠팡/SignIn',
  Component: SignIn,
}

const Template = (args) => <SignIn {...args} />

export const SignInPage = Template.bind({})