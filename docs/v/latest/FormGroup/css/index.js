'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('../FormGroup.production.min.css');
} else {
  module.exports = require('../FormGroup.development.css');
}
