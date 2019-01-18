import { binding } from '@nsoft/chameleon-sdk/src/utility';

const itemInterface = [
  {
    name: 'text',
    type: 'String',
    label: 'Text',
  },
];

export default {
  group: 'inputs',
  type: 'rich-text',
  name: 'Rich Text',
  icon: 'text_format',
  optionGroups: {
    data: {
      key: 'data',
      name: 'Data',
    },
    validation: {
      key: 'validation',
      name: 'Validation',
    },
  },
  actions: [
    {
      name: 'setDataSource',
      help: 'Sets text data source from event data',
    },
  ],
  events: [
    {
      name: 'DataSourceChanged',
      help: 'Fires when text data source is changed',
    },
    {
      name: 'Changed',
      help: 'Text input changed',
    },
    {
      name: 'FocusedIn',
      help: 'Focused in',
    },
    {
      name: 'FocusedOut',
      help: 'Focused out / Blurred',
    },
  ],
  options: {
    name: {
      type: 'fieldNameInput',
      name: 'Input Name',
      value: null,
      priority: 1,
      validation: {
        required: true,
      },
    },
    toolbar: {
      type: 'select',
      name: 'Select RichText Type',
      value: {
        id: 1,
        value: 'default',
        label: 'Default',
      },
      displayProp: 'label',
      valueProp: 'value',
      items: [
        {
          id: 1,
          value: 'default',
          label: 'Default',
        },
        {
          id: 2,
          value: 'mini',
          label: 'Mini',
        },
        {
          id: 3,
          value: 'basic',
          label: 'Basic',
        },
        {
          id: 4,
          value: 'advanced',
          label: 'Advanced',
        },
        {
          id: 5,
          value: 'full',
          label: 'Full',
        },
      ],
      priority: 2,
    },
    theme: true,
    value: {
      type: 'input',
      group: 'data',
      name: 'Input Source',
      value: null,
      disabled: {
        current: false,
        default: false,
        expression: binding.setExpression('<%= element.dataSource != null %>'),
      },
      priority: 2,
    },
    dataSource: {
      type: 'dataSource',
      group: 'data',
      name: 'Data Source',
      value: null,
      schema: itemInterface,
      disabled: {
        current: false,
        default: false,
        expression: binding.setExpression('<%= element.value != null && element.value.length > 0 %>'),
      },
      priority: 1,
    },
    validation: {
      type: 'group',
      group: 'validation',
      required: {
        type: 'check',
        name: 'Enable required',
        value: false,
      },
    },
  },
};
