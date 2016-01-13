import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let model = Ember.Object.create();
    model.set('env', params.env);

    return model;
  }
});
