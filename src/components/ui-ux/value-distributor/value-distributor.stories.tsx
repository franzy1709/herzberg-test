import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import { ValueDistributor, ValueDistributorProps } from './value-distributor';

export default {
  title: 'Herzberg/ValueDistributor',
  component: ValueDistributor
}

const Template: Story<ValueDistributorProps> = (args) => <ValueDistributor {...args} />;

export const Default = Template.bind({});
Default.args = {}