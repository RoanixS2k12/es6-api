'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

require('whatwg-fetch');
require('es6-promise').polyfill();

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
