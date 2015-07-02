var angular = require('angular');

API_KEY = 'bcf6ff211b659eb30e136e7df58d2bca';

var apiReader = angular.module('apiReader', [require('angular-ui-router')]);

apiReader.config(require('./routing.js'));

apiReader.controller('HomeController', require('./controller/HomeController.js'));
apiReader.controller('DetailsController', require('./controller/DetailsController.js'));
