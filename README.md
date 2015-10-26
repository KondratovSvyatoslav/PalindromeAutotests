### Run tests
The tests for nightwatch are written using [nodeunit](https://github.com/caolan/nodeunit) as the test framework. To run the nodeunit tests do:

1. install Nodejs(https://nodejs.org/en/ )  and grunt-nightwatch-report (https://www.npmjs.com/package/grunt-nightwatch-report ) and grunt (http://gruntjs.com/installing-grunt )
2. Start selenium standalone server from Autotests root folder “java -jar selenium-server-standalone-2.48.2.jar” 
3.Run tests executing following command (currently set up to work under Windows.To run them on MacOS platform you have to replace chromedriver file in the autotests root folder with one from chromedrivers folder) 

```sh
node nightwatch –-test –-env default-Windows
./nightwatch –-test -–env default -MacOS
```
4.	After auotests finished their work you have to run “grunt” command from autotests root folder and report will be generated in the reports/summary folder. In downloaded version there is already example of test report for these tests in report/summary folder.
5.One test failed intentionally



