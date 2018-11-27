const itemInterface = [
  {
    name: 'title',
    type: 'String',
    label: 'Title',
  },
  {
    name: 'description',
    type: 'String',
    label: 'Description',
  },
  {
    name: 'thumb',
    type: 'Image',
    label: 'Image',
  },
  {
    name: 'icon',
    type: 'Icon',
    label: 'Icon',
  },
];

export default {
  group: 'widgets',
  type: 'list',
  name: 'List',
  icon: 'list',
  actions: [
    {
      name: 'setDataSource',
      help: 'Sets table data source from event data',
    },
    {
      name: 'setPage',
      help: 'Go to page (pagination) from event data',
    },
    {
      name: 'setRowsPerPage',
      help: 'Set rowsPerPage from event data',
    },
  ],
  events: [
    {
      name: 'DataSourceChanged',
      help: 'Fires when table data source is changed',
    },
    {
      name: 'SelectedItemChanged',
      help: 'Fires when table item gets selected',
      schema: itemInterface,
    },
    {
      name: 'PaginationChanged',
      help: 'Fires when table page gets changed',
    },
  ],
  options: {
    color: true,
    header: {
      type: 'input',
      name: 'Header',
      value: null,
      priority: 2,
    },
    flat: {
      type: 'check',
      name: 'No Shadow',
      value: false,
      priority: 3,
    },
    hideActions: {
      type: 'check',
      name: 'Hide Actions',
      value: false,
      priority: 4,
    },
    imageRadius: {
      type: 'check',
      name: 'Image Radius',
      value: true,
      priority: 5,
    },
    fluid: {
      type: 'check',
      name: 'Full Width',
      value: true,
      priority: 6,
    },
    noOfRows: {
      type: 'select',
      name: 'Grid Type',
      items: [
        {
          name: '1',
          value: '12',
        },
        {
          name: '2',
          value: '6',
        },
        {
          name: '3',
          value: '4',
        },
      ],
      value: '12',
      priority: 7,
    },
    spacing: {
      type: 'select',
      name: 'Spacing',
      items: [
        {
          name: 'None',
          value: '',
        },
        {
          name: 'Extra-Small',
          value: 'xs',
        },
        {
          name: 'Small',
          value: 'sm',
        },
        {
          name: 'Medium',
          value: 'md',
        },
        {
          name: 'Large',
          value: 'lg',
        },
        {
          name: 'Extra-Large',
          value: 'xl',
        },
      ],
      value: 'md',
      priority: 8,
    },
    noDataText: {
      type: 'input',
      group: 'localization',
      name: 'No Data Text',
      value: null,
      priority: 9,
    },
    noResultsText: {
      type: 'input',
      group: 'localization',
      name: 'No Results Text',
      value: null,
      priority: 10,
    },
    rowsPerPageText: {
      type: 'input',
      group: 'localization',
      name: 'Rows Per Page Text',
      value: null,
      priority: 11,
    },
    dataSource: {
      type: 'dataSource',
      group: 'data',
      name: 'Data Source',
      value: null,
      priority: 12,
      schema: itemInterface,
    },
    rowsPerPageItems: {
      type: 'input',
      group: 'data',
      name: 'Rows Per Page Items',
      value: null,
      priority: 13,
    },
    rowsPerPage: {
      type: 'input',
      group: 'data',
      name: 'Rows Per Page',
      value: 5,
      priority: 14,
    },
    startPage: {
      type: 'input',
      group: 'data',
      name: 'Start With Page',
      value: 1,
      priority: 15,
    },
    sortBy: {
      type: 'input',
      group: 'data',
      name: 'Sort Items By',
      value: null,
      priority: 16,
    },
    sortDescending: {
      type: 'check',
      group: 'data',
      name: 'Sort Descending',
      value: false,
      priority: 17,
    },
    theme: true,
  },
};
