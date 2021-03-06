import { merge } from 'lodash';
import Element from '../Element';

require('../../style/components/_layout.scss');

const getLayoutAttrs = () => {
  const attrs = {
    'data-layout': true,
  };
  return attrs;
};

export default {
  extends: Element,
  methods: {
    renderMenu() {
      return this.$createElement(
        'c-menu',
        {
          props: {
            definition: merge({}, this.config.elements[0], {
              absolute: false,
              isVisible: true,
              layout: 'mini',
              main: true,
              permanent: true,
            }),
          },
          attrs: getLayoutAttrs(),
        },
      );
    },
    renderContent() {
      return this.$createElement('v-content', {},
        [
          this.$createElement('v-container', {
            attrs: {
              'fill-height': true,
              fluid: true,
            },
            class: 'layout-container',
          },
          [
            this.$createElement('v-layout', {},
              [
                this.$createElement('v-flex', {}, [
                  this.$scopedSlots.default(),
                ]),
              ]),
          ]),
        ]);
    },
    renderDesner() {
      // TODO when we get definition this will be separate component
      return this.$createElement('v-navigation-drawer', {
        props: {
          app: true,
          absolute: false,
          fixed: true,
          isVisible: true,
          miniVariant: true,
          permanent: true,
          right: true,
        },
        attrs: getLayoutAttrs(),
      });
    },
  },
  render() {
    if (this.config.layoutType === 'blank') {
      return this.renderElement('v-app', {
        class: 'blank',
        attrs: getLayoutAttrs(),
        props: {
          [this.config.theme]: true,
        },
      },
      [
        this.renderContent(),
      ]);
    }
    // Just standard layout for now
    const children = [
      this.renderMenu(),
      this.renderContent(),
      this.renderDesner(),
    ];

    return this.renderElement('v-app', {
      attrs: getLayoutAttrs(),
      props: {
        [this.config.theme]: true,
      },
    }, children);
  },
};
