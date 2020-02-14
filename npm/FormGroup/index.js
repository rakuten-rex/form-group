'use strict';

if (process.env.NODE_ENV === 'production') {
  require('./FormGroup.production.min.css');
  module.exports = require('./FormGroup.production.min.js');
} else {
  require('./FormGroup.development.css');
  module.exports = require('./FormGroup.development.js');
}
