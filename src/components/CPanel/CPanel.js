import Element from '../Element';

require('../../style/components/_panel.scss');

export default {
  extends: Element,
  render() {
    const { config } = this;
    const data = {
      key: this.schema.uid,
      class: {
        [`${this.$options.name}--spaced`]: this.config.spaced,
      },
      props: {
        color: config.color,
        dark: this.isThemeDark,
        light: this.isThemeLight,
        flat: config.flat,
      },
      style: {
        width: config.width,
        height: config.height,
      },
    };
    const style = {
      width: '100%',
      height: '100%',
    };

    const children = this.renderChildElement('div', { style });

    return this.renderElement('v-card', data, children, true);
  },
};
