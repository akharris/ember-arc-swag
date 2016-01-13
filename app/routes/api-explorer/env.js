import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let model = Ember.Object.extend();
    model.env = params.env;

    return model;
  },

  apiHost: Ember.computed('model', function() {
    let env = model.env;
    let url;
    if (env === "production") {
      url = 'https://opendata.arcgis.com/api/v2/swagger.json';
    } else {
      url = `https://opendata${env}.arcgis.com/api/v2/swagger.json`;
    }

    return url;
  })
});
