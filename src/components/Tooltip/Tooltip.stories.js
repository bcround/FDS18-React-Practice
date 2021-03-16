/* eslint-disable import/no-anonymous-default-export */
import Tooltip from './Tooltip'

export default {
  title: '쿠팡/UI/Tooltip',
  Component: Tooltip,
}

const Template = (args) => <Tooltip {...args} />

export const Top = Template.bind({});
export const Bottom = Template.bind({});
export const Left = Template.bind({});
export const Right = Template.bind({});

Top.args = {
  orientation: 'top',
}

Bottom.args = {
  orientation: 'bottom',
}

Left.args = {
  orientation: 'left',
}

Right.args = {
  orientation: 'right',
}