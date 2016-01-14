import Ember from 'ember';

export default Ember.Controller.extend({
  swaggerUrl: 'https://opendataqa.arcgis.com/api/v2/swagger.json',
  env: Ember.computed('swaggerUrl', function() {
    let url = this.get('swaggerUrl');
    let env;

    if (url.indexOf('opendatadev') !== -1) {
      env = 'dev';
    } else if (url.indexOf('opendataqa') !== -1) {
      env = 'qa';
    } else if (url.indexOf('opendata') !== -1) {
      env = 'production';
    } else {
      env = 'qa';
    }

    return env;
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
