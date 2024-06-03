import type { App, Plugin, Component } from 'vue'
import { Vssue } from '~/types/vssue';
import VssueComponent from './Vssue.vue';

const VssuePlugin: Vssue.Plugin & Plugin = {
  get version() {
    return process.env.VUE_APP_VERSION as string;
  },

  installed: false,

  install(app: App, options?: Partial<Vssue.Options>) {
    if (this.installed) {
      return false;
    }
    this.installed = true;

    app.component('Vssue', {
      functional: true,

      props: {
        title: {
          type: String,
          required: false,
          default: undefined,
        },
        issueId: {
          type: [Number, String],
          required: false,
          default: undefined,
        },
        options: {
          type: Object,
          required: false,
          default: undefined,
        },
      },

      render(h, { data, props }) {
        return h(VssueComponent, {
          ...data,
          props: {
            title: props.title,
            issueId: props.issueId,
            options: Object.assign({}, options, props.options),
          },
        });
      },
    });
  },

  VssueComponent: VssueComponent as unknown as Component,
};

export { VssueComponent };
export default VssuePlugin;
