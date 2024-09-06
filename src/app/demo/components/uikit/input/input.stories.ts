import type { Meta, StoryObj } from '@storybook/angular';
import { InputDemoComponent } from './inputdemo.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<InputDemoComponent> = {

  title: 'Components/Inputs',
  component: InputDemoComponent,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    backgroundColor: {
      control: 'color',
    }
  },
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' }
    },
  },
};

export default meta;
type Story = StoryObj<InputDemoComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

/** Local para escrever sobre a História dos Inputs . A idéia é utilizar o PrimeNG como exemplos  */
export const Primary: Story = {

  args: {
    placeholder: 'Primary',
    backgroundColor: 'white',
    size: 'medium',
    border: "2px solid #1B1818",
    color: '#363030',
    borderRadius: '8px',
    padding: '4px',

  },

};
/** Secondary Button  */
export const Secondary: Story = {
  args: {
    ...Primary.args,
    placeholder: 'Secondary',
    color: '#6B6161',
    border: "2px solid #363030",

  },

};
export const Disable: Story = {
  args: {
    ...Primary.args,
    placeholder: 'Disable',
    color: '#B6AFAF',
    border: "2px solid #867979",

  },
};
export const Success: Story = {
  args: {
    ...Primary.args,
    placeholder: 'Success',
    color: '#29A3A3',
    border: "2px solid #0A5C5C",

  },
};
export const Warning: Story = {
  args: {
    ...Primary.args,
    placeholder: 'Warning',
    color: '#D19847',
    border: "2px solid #D17547",

  },
};

export const Danger: Story = {
  args: {
    ...Primary.args,
    placeholder: 'Danger',
    color: '#BF404A',
    border: "2px solid #821720",

  },
};

export const Large: Story = {
  args: {
    ...Primary.args,
    size: 'large',
    placeholder: 'Large Input',
  },
};

export const Small: Story = {
  args: {
    ...Primary.args,
    size: 'small',
    placeholder: 'Small Input',
  },
};
