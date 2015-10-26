/**
 * Created by svjat on 10/25/15.
 */
module.exports = {
    'Test': function (client) {
        var page = client.page.Palindrome();

        page.navigate()
            .assert.title("Palindrome")
            .assert.visible("@inputField")
            .setValue('@inputField', ['!;!'])
            .click(('@submit'))
            .assert.containsText("@results", 'Following palindromes found:')
            .assert.containsText("@results", '!;!');
        client.end();
    }
};
