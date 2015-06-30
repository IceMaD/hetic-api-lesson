var angular = require('angular');

var apiReader = angular.module('apiReader', [require('angular-ui-router')]);

apiReader.config(require('./routing.js'));
