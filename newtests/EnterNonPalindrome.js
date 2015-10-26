/**
 * Created by svjat on 10/25/15.
 */
module.exports = {
    'Test': function (client) {
        var page = client.page.Palindrome();

        page.navigate()
            .assert.title("Palindrome")
            .assert.visible("@inputField")
            .setValue('@inputField', ['123bcd!'])
            .click(('@submit'))
            .assert.containsText("@results", 'There is no palindrome in entered string1')
        client.end();
    }
};
