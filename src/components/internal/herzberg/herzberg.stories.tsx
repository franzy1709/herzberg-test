import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import { Herzberg, HerzbergProps } from './herzberg';

export default {
  title: 'Herzberg/View',
  component: Herzberg
}

const Template: Story<HerzbergProps> = (args) => <Herzberg {...args} />;

export const Default = Template.bind({});
Default.args = {
  testQuestions: [
    ['Для тебя важна хорошо оплачиваемая работа, даже если ты не получаешь должного признания.',
    'Для тебя важно признание и похвала, даже если оплата не так высока.']
  ]
}