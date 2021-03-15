/* eslint-disable import/no-anonymous-default-export */
import Logo from './Logo'

export default {
  title: '쿠팡/UI/Logo',
  Component: Logo,
}

const Template = (args) => <Logo {...args} />

export const Black = Template.bind({});
export const Color = Template.bind({});
export const Mono = Template.bind({});

Black.args = {
  type: 'black',
  title: 'Coupang Black Logo',
}

Color.args = {
  type: 'color',
  title: 'Coupang Color Logo',
}

Mono.args = {
  type: 'mono',
  title: 'Coupang Mono Logo',
}