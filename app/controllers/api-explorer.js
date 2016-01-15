import Ember from 'ember';
import config from '../config/environment';

export default Ember.Controller.extend({
  swaggerUrl: config.APP.swaggerRoot,
  env: Ember.computed('swaggerUrl', function() {
    let url = this.get('swaggerUrl');
    let env;

    if (url.indexOf('opendatadev') !== -1) {
      env = 'dev';
    } else if (url.indexOf('opendataqa') !== -1) {
      env = 'qa';
    } else if (url.indexOf('opendata') !== -1) {
      env = 'production';
    } else if (url.indexOf('localdata') !== -1) {
      env = 'local';
    } else {
      env = 'qa';
    }

    return env;
  }),

  isLocal: Ember.computed('env', function() {
    return this.get('env') === 'local';
  }),
  isDev: Ember.computed('env', function() {
    return this.get('env') === 'dev';
  }),
  isQa: Ember.computed('env', function() {
    return this.get('env') === 'qa';
  }),
  isProd: Ember.computed('env', function() {
    return this.get('env') === 'production';
  }),

  actions: {
    updateUrl(newUrl) {
      this.set('swaggerUrl', newUrl);
      window.swaggerUi.options.url = newUrl;
      window.swaggerUi.load();
    }
  }
});
