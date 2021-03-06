
export default {
  type: 'page',
  name: 'Page',
  icon: 'browser',
  hidden: true,
  actions: [
    {
      name: 'navigateToPage',
      data: {
        page: {
          name: 'Page',
          type: 'select',
          valueType: 'string',
          items: '=$app.pages',
          itemValue: 'path',
          itemText: 'name',
        },
      },
    },
  ],
  events: [
    { name: 'Loading' },
  ],
  optionGroups: {
    template: {
      key: 'template',
      name: 'Templates',
    },
    layout: {
      key: 'layout',
      name: 'Layouts',
    },
    meta: {
      key: 'meta',
      name: 'Meta',
    },
  },
  options: {
    color: true,
    name: {
      type: 'input',
      name: 'Name',
      value: null,
      priority: 1,
    },
    path: {
      type: 'input',
      name: 'Path',
      value: null,
      priority: 2,
      validation: {
        required: true,
        path: true,
        uniquePath: true,
      },
    },
    parent: {
      type: 'select',
      name: 'Parent',
      value: null,
      displayProp: 'name',
      clearable: true,
      valueProp: 'uid',
      items: '=$app.pages',
      filterItemsOut: '=$activePage.name',
      priority: 3,
    },
    icon: {
      type: 'iconSource',
      name: 'Icon',
      value: null,
      priority: 4,
    },
    landingPage: {
      type: 'check',
      name: 'Set as landing page',
      hint: 'Overrides root \'/\' path',
      value: false,
      priority: 5,
    },
    showInMenu: {
      type: 'check',
      name: 'Show in menu',
      value: true,
      group: 'general',
      priority: 6,
    },
    layout: {
      type: 'group',
      group: 'layout',
      layoutId: {
        type: 'select',
        name: 'Select Page Layout',
        items: '=$activeLayouts',
        displayProp: 'name',
        valueProp: 'id',
        clearable: true,
        value: null,
      },
    },
    meta: {
      type: 'group',
      group: 'meta',
      title: {
        type: 'input',
        name: 'Title',
        value: null,
      },
      description: {
        type: 'input',
        name: 'Description',
        value: null,
      },
      keywords: {
        type: 'input',
        name: 'Keywords',
        value: null,
      },
    },
    theme: true,
  },
};
