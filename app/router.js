import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('api-explorer', function() {
    this.route('env', { path: ':env' });
  });
});

export default Router;
