/* eslint-disable import/no-anonymous-default-export */
import Icons from './Icons'

export default {
  title: '쿠팡/UI/Icon',
  Component: Icons,
}

const Template = (args) => <Icons {...args} />

export const Letter = Template.bind({});
export const Lock = Template.bind({});
export const Hide = Template.bind({});
export const Show = Template.bind({});

Letter.args = {
  iconType: 'letter',
  title: "Letter 아이콘",
}

Lock.args = {
  iconType: 'lock',
  title: "Lock 아이콘",
}

Hide.args = {
  iconType: 'hide',
  title: "Hide 아이콘",
}

Show.args = {
  iconType: 'show',
  title: "Show 아이콘",
}