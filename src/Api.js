require('whatwg-fetch');

/**
 * Api base class
 * @protected
 */
export default class API {

    /**
     * Retrieve data from the specified endpoint
     * @param  {String} url     Endpoint from which you want to retrieve data
     * @return {Promise}        Promise object containing the Array parsed from the json response
     */
    static get(url) {

        return fetch(url, {
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded'
            }
        }).then(function(res){
            return res.json();
        });
    }

    /**
     * Post data to the specified endpoint
     * @param  {String}     url     Endpoint to which you want to post data
     * @param  {Object}     data    Data you want to post to the specified endpoint
     * @return {Promise}            Promise object containing the Array parsed from the json response
     */
    static post(url, data) {
        return fetch(url, {
            method : 'post',
            dataType: 'json',
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json'
            },
            body : JSON.stringify(data)
        }).then(function(res) {
            return res.json();
        });
    }
}
