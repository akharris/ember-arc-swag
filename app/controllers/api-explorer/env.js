import Ember from 'ember';

export default Ember.Controller.extend({
  apiHost: Ember.computed('model', function() {
    let env = this.get('model').env;
    let url;

    if (env === "production") {
      url = 'https://opendata.arcgis.com/api/v2/swagger.json';
    } else {
      url = `https://opendata${env}.arcgis.com/api/v2/swagger.json`;
    }

    return url;
  }),

  loading: false

});
