import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import { HerzbergRibbon, HerzbergRibbonProps } from './herzberg-ribbon';
import herzbergTest from './fixtures/herzberg.json'

export default {
  title: 'Herzberg Ribbon/View',
  component: HerzbergRibbon
}

const Template: Story<HerzbergRibbonProps> = (args) => <HerzbergRibbon {...args} />;

export const Default = Template.bind({});
Default.args = {
  testQuestions: herzbergTest
}