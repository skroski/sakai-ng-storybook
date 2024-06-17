import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { ButtonDemoComponent } from './buttondemo.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ButtonDemoComponent> = {
  title: 'Components/Buttons',
  component: ButtonDemoComponent,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    backgroundColor: {
      control: 'color',
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<ButtonDemoComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

/** Primary Button Description  */
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Primary',
    backgroundColor: 'blue',
    size: 'small',
  },
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' }
    }
  }
};

export const Secondary: Story = {
  args: {
    label: 'Button',
    backgroundColor: 'white',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
