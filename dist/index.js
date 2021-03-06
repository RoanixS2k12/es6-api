'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});
require('whatwg-fetch');

/**
 * Api base class
 * @protected
 */

var API = (function () {
    function API() {
        _classCallCheck(this, API);
    }

    _createClass(API, null, [{
        key: 'get',

        /**
         * Retrieve data from the specified endpoint
         * @param  {String} url     Endpoint from which you want to retrieve data
         * @return {Promise}        Promise object containing the Array parsed from the json response
         */
        value: function get(url) {

            return fetch(url, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(function (res) {
                return res.json();
            });
        }

        /**
         * Post data to the specified endpoint
         * @param  {String}     url     Endpoint to which you want to post data
         * @param  {Object}     data    Data you want to post to the specified endpoint
         * @return {Promise}            Promise object containing the Array parsed from the json response
         */
    }, {
        key: 'post',
        value: function post(url, data) {
            return fetch(url, {
                method: 'post',
                dataType: 'json',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(function (res) {
                return res.json();
            });
        }
    }]);

    return API;
})();

exports['default'] = API;
module.exports = exports['default'];
