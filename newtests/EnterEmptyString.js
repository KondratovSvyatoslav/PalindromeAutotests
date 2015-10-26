/**
 * Created with JetBrains WebStorm.
 * User: svjatoslav.kondratov
 * Date: 10/26/15
 * Time: 12:09 PM
 * To change this template use File | Settings | File Templates.
 */
module.exports = {
    'Test': function (client) {
        var page = client.page.Palindrome();

        page.navigate()
            .assert.title("Palindrome")
            .assert.visible("@inputField")
            .setValue('@inputField', [''])
            .click(('@submit'))
            .assert.containsText("@results", 'There is no palindrome in entered string')
        client.end();
    }
};