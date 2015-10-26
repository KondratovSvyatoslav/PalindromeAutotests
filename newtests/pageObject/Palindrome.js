/**
 * Created by svjat on 10/25/15.
 */

module.exports = {
    url: 'http://localhost:8080/Palindrome/Palindrome.html',
    elements: {

        inputField: {
            selector: 'input[type=text]'
        },
        submit: {
            selector: 'input[type=submit]'
        },
        results: {
            selector: '//*[@id="results"]',
            locateStrategy: 'xpath'
        }
    }
};
