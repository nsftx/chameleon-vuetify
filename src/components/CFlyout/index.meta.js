export default {
  type: 'flyout',
  name: 'Flyout',
  group: 'containers',
  icon: 'chrome_reader_mode',
  events: [
    {
      name: 'Closed',
      help: 'Toggle dialog visibility',
    },
    {
      name: 'Canceled',
      help: 'Cancel button pressed',
    },
    {
      name: 'Submitted',
      help: 'Submit button pressed',
    },
  ],
  options: {
    theme: true,
    name: {
      type: 'input',
      name: 'Custom Flyout Name',
      value: null,
      priority: 1,
      validation: {
        required: true,
        uniqueLayout: true,
      },
    },
    fullscreen: {
      type: 'check',
      group: 'style',
      name: 'Fullscreen',
      value: true,
      priority: 2,
    },
    persistent: {
      type: 'check',
      group: 'style',
      name: 'Persistent',
      value: false,
      priority: 3,
    },
    headerTitle: {
      type: 'input',
      name: 'Header title',
      value: null,
      priority: 3,
    },
    width: {
      type: 'sizeInput',
      name: 'Width',
      value: null,
      priority: 4,
    },
    hideOverlay: {
      type: 'check',
      group: 'style',
      name: 'Hide overlay',
      value: true,
      priority: 5,
    },
    showAvatar: {
      type: 'check',
      group: 'style',
      name: 'Show avatar',
      value: true,
      priority: 6,
    },
    showActions: {
      type: 'check',
      group: 'style',
      name: 'Show actions footer',
      value: true,
      priority: 7,
    },
    value: {
      type: 'check',
      group: 'style',
      name: 'Show flyout',
      value: false,
      priority: 8,
    },
    cancelLabel: {
      type: 'input',
      name: 'Cancel label',
      value: null,
      priority: 3,
    },
    submitLabel: {
      type: 'input',
      name: 'Submit label',
      value: null,
      priority: 3,
    },
  },
};