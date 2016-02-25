import Ember from 'ember';
import config from '../config/environment';

export default Ember.Controller.extend({
  swaggerUrl: config.APP.swaggerRoot,

  init() {
    this._super(...arguments);
    console.log(this.get('swaggerUrl'));
  }
});
