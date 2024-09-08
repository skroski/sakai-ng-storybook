import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { TreeDemoComponent } from './treedemo.component';
import { NodeService } from 'src/app/demo/service/node.service';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories

const meta: Meta<TreeDemoComponent> = {
  title: 'Components/TreeDemo',
  component: TreeDemoComponent,

  decorators: [
    moduleMetadata({
      providers: [
        NodeService
      ],
    }),
  ],
  tags: ['autodocs'],

  argTypes: {
    value: { control: 'object' },
    cols: { control: 'object' },
    expandedIcon: { control: 'text' },
    collapsedIcon: { control: 'text' },
    selectionMode: { control: 'text' }
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};


export default meta;
type Story = StoryObj<TreeDemoComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    value: [],
    expandedIcon: 'pi pi-folder',
    collapsedIcon: 'pi pi-folder-open',
    cols: [
      { field: 'name', header: 'Name' },
      { field: 'size', header: 'Size' },
      { field: 'type', header: 'Type' }
    ],
    selectionMode: 'single',

  },
};

export const Secondary: Story = {
  args: {
    selectionMode: 'single',
    cols: [
      { field: 'name', header: 'Name' },
      { field: 'size', header: 'Size' },
      { field: 'type', header: 'Type' }
    ],
    value: [{
      "key": "0",
      "label": "Documents",
      "data": "Documents Folder",
      "icon": "pi pi-fw pi-inbox",
      "children": [{
        "key": "0-0",
        "label": "Work",
        "data": "Work Folder",
        "icon": "pi pi-fw pi-cog",
        "children": [{ "key": "0-0-0", "label": "Expenses.doc", "icon": "pi pi-fw pi-file", "data": "Expenses Document" }, { "key": "0-0-1", "label": "Resume.doc", "icon": "pi pi-fw pi-file", "data": "Resume Document" }]
      },
      {
        "key": "0-1",
        "label": "Home",
        "data": "Home Folder",
        "icon": "pi pi-fw pi-home",
        "children": [{ "key": "0-1-0", "label": "Invoices.txt", "icon": "pi pi-fw pi-file", "data": "Invoices for this month" }]
      }]
    },
    {
      "key": "1",
      "label": "Events",
      "data": "Events Folder",
      "icon": "pi pi-fw pi-calendar",
      "children": [
        { "key": "1-0", "label": "Meeting", "icon": "pi pi-fw pi-calendar-plus", "data": "Meeting" },
        { "key": "1-1", "label": "Product Launch", "icon": "pi pi-fw pi-calendar-plus", "data": "Product Launch" },
        { "key": "1-2", "label": "Report Review", "icon": "pi pi-fw pi-calendar-plus", "data": "Report Review" }]
    }],
  },
};

export const Large: Story = {
  args: {
    selectionMode: 'single',
    cols: [
      { field: 'name', header: 'Name' },
      { field: 'size', header: 'Size' },
      { field: 'type', header: 'Type' }
    ],
    value: [{
      "key": "0",
      "label": "Documents",
      "data": "Documents Folder",
      "icon": "pi pi-fw pi-inbox",
      "children": [{
        "key": "0-0",
        "label": "Work",
        "data": "Work Folder",
        "icon": "pi pi-fw pi-cog",
        "children": [{ "key": "0-0-0", "label": "Expenses.doc", "icon": "pi pi-fw pi-file", "data": "Expenses Document" }, { "key": "0-0-1", "label": "Resume.doc", "icon": "pi pi-fw pi-file", "data": "Resume Document" }]
      },
      {
        "key": "0-1",
        "label": "Home",
        "data": "Home Folder",
        "icon": "pi pi-fw pi-home",
        "children": [{ "key": "0-1-0", "label": "Invoices.txt", "icon": "pi pi-fw pi-file", "data": "Invoices for this month" }]
      }]
    },
    {
      "key": "1",
      "label": "Events",
      "data": "Events Folder",
      "icon": "pi pi-fw pi-calendar",
      "children": [
        { "key": "1-0", "label": "Meeting", "icon": "pi pi-fw pi-calendar-plus", "data": "Meeting" },
        { "key": "1-1", "label": "Product Launch", "icon": "pi pi-fw pi-calendar-plus", "data": "Product Launch" },
        { "key": "1-2", "label": "Report Review", "icon": "pi pi-fw pi-calendar-plus", "data": "Report Review" }]
    }],
  },

};

export const Small: Story = {
  args: {
    selectionMode: 'single',
    cols: [
      { field: 'name', header: 'Name' },
      { field: 'size', header: 'Size' },
      { field: 'type', header: 'Type' }
    ],
    value: [{
      "key": "0",
      "label": "Documents",
      "data": "Documents Folder",
      "icon": "pi pi-fw pi-inbox",
      "children": [{
        "key": "0-0",
        "label": "Work",
        "data": "Work Folder",
        "icon": "pi pi-fw pi-cog",
        "children": [{ "key": "0-0-0", "label": "Expenses.doc", "icon": "pi pi-fw pi-file", "data": "Expenses Document" }, { "key": "0-0-1", "label": "Resume.doc", "icon": "pi pi-fw pi-file", "data": "Resume Document" }]
      },
      {
        "key": "0-1",
        "label": "Home",
        "data": "Home Folder",
        "icon": "pi pi-fw pi-home",
        "children": [{ "key": "0-1-0", "label": "Invoices.txt", "icon": "pi pi-fw pi-file", "data": "Invoices for this month" }]
      }]
    },
    {
      "key": "1",
      "label": "Events",
      "data": "Events Folder",
      "icon": "pi pi-fw pi-calendar",
      "children": [
        { "key": "1-0", "label": "Meeting", "icon": "pi pi-fw pi-calendar-plus", "data": "Meeting" },
        { "key": "1-1", "label": "Product Launch", "icon": "pi pi-fw pi-calendar-plus", "data": "Product Launch" },
        { "key": "1-2", "label": "Report Review", "icon": "pi pi-fw pi-calendar-plus", "data": "Report Review" }]
    }],
  },
};
