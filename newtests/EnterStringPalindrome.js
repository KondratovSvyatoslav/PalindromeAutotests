/**
 * Created by svjat on 10/25/15.
 */

module.exports = {
    'Test': function (client) {
        var page = client.page.Palindrome();

        page.navigate()
            .assert.title("Palindrome")
            .assert.visible("@inputField")
            .setValue('@inputField', ['yabxyzyxba1'])
            .click(('@submit'))
            .assert.containsText("@results", 'Following palindromes found:')
            .assert.containsText("@results", 'abxyzyxba')
            .assert.containsText("@results", 'bxyzyxb')
            .assert.containsText("@results", 'xyzyx')
            .assert.containsText("@results", 'yzy');
            client.end();
    }
};