export default {
  group: 'actions',
  type: 'button',
  name: 'Button',
  icon: 'crop_landscape',
  actions: [
    {
      name: 'setItemDisabledValue',
      help: 'Input field disabled value',
    },
  ],
  events: [
    {
      name: 'Clicked',
      help: 'Fires when button is clicked',
    },
  ],
  options: {
    color: true,
    label: {
      type: 'input',
      name: 'Button Label',
      value: 'Button',
      priority: 1,
    },
    icon: {
      type: 'iconSource',
      name: 'Icon Source',
      value: null,
      priority: 3,
    },
    iconPosition: {
      type: 'select',
      name: 'Icon Position',
      items: [
        {
          name: 'Left',
          value: 'left',
        },
        {
          name: 'Right',
          value: 'right',
        },
      ],
      returnObject: false,
      displayProp: 'name',
      valueProp: 'value',
      value: 'left',
      priority: 4,
    },
    displayAsIcon: {
      type: 'check',
      name: 'Display Button As Icon',
      value: false,
      priority: 5,
    },
    round: {
      type: 'check',
      name: 'Round Button',
      value: false,
      priority: 9,
    },
    flat: {
      type: 'check',
      name: 'No Background',
      value: false,
      priority: 8,
    },
    block: {
      type: 'check',
      name: '100% Width',
      value: false,
      priority: 6,
    },
    depressed: {
      type: 'check',
      name: 'No Shadow',
      value: false,
      priority: 7,
    },
    disabled: {
      type: 'check',
      name: 'Disabled',
      value: false,
      priority: 10,
    },
    theme: true,
  },
};
