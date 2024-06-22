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
    }

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
    backgroundColor: '#363030',
    size: 'medium',
    border: "2px solid #1B1818",
    color: 'white',
    borderRadius: '8px',
  },
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' }
    }
  }
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    label: 'Secondary',
    backgroundColor: '#6B6161',
    border: "2px solid #363030",

  },
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' }
    }
  }
};
export const Disable: Story = {
  args: {
    ...Primary.args,
    label: 'Disable',
    backgroundColor: '#B6AFAF',
    border: "2px solid #867979",

  },
};
export const Success: Story = {
  args: {
    ...Primary.args,
    label: 'Success',
    backgroundColor: '#29A3A3',
    border: "2px solid #0A5C5C",

  },
};
export const Warning: Story = {
  args: {
    ...Primary.args,
    label: 'Warning',
    backgroundColor: '#D19847',
    border: "2px solid #D17547",

  },
};

export const Danger: Story = {
  args: {
    ...Primary.args,
    label: 'Danger',
    backgroundColor: '#BF404A',
    border: "2px solid #821720",

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
