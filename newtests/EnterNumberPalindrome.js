/**
 * Created by svjat on 10/25/15.
 */
module.exports = {
    'Test': function (client) {
        var page = client.page.Palindrome();
        page.navigate()
            .assert.title("Palindrome")
            .assert.visible("@inputField")
            .setValue('@inputField', ['1221'])
            .click(('@submit'))
            .assert.containsText("@results", 'Following palindromes found:')
            .assert.containsText("@results", '1221')
            .assert.containsText("@results", '22');
        client.end();
    }
};
