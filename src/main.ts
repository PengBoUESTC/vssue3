import type { App, Plugin, Component } from 'vue'
import { Vssue } from '~/types/vssue';
import i18n from './i18n/index' 
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
    app.use(i18n)
    app.component('Vssue', VssueComponent);
  },

  VssueComponent: VssueComponent as unknown as Component,
};

export { VssueComponent };
export default VssuePlugin;
