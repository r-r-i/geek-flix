// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      'karma-jasmine', //
      'karma-chrome-launcher',
      // 'karma-jasmine-html-reporter',// kjhtml
      // 'karma-coverage-istanbul-reporter',
      // '@angular-devkit/build-angular/plugins/karma',
      // 'karma-spec-reporter',
      'karma-helpful-reporter',
    ],
    client: {
      clearContext: false, // leave Jasmine Spec Runner output visible in browser
    },
    reporters: ['helpful'],
    // Optional reporter settings
    helpfulReporter: {
      // animationStyle: 'braille',
      // clearScreenBeforeEveryRun: false,
      // hideBrowser: false,
      // maxLogLines: 42,
      // removeLinesContaining: [],
      // removeTail: false,
      // renderOnRunCompleteOnly: false,
      // suppressErrorReport: false,
      // underlineFileType: '',
      // colorBrowser: 205,
      // colorConsoleLogs: 45,
      // colorFail: 9,
      // colorFirstLine: 211,
      // colorLoggedErrors: 250,
      // colorPass: 10,
      // colorSkip: 11,
      // colorTestName: 199,
      // colorUnderline: 254,
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    // browsers: ['ChromeDebugging', 'FirefoxDeveloper'],
    browsers: ['ChromeDebugging'],
    customLaunchers: {
      ChromeDebugging: {
        base: 'Chrome',
        flags: ['--remote-debugging-port=9333', '--no-sandbox'],
      },
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox'],
      },
      ChromeHeadlessCS: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox'],
      },
    },
    // singleRun: false,
    // restartOnFileChange: true,
    // concurrency: Infinity,
    // captureTimeout: 100123,
    // browserDisconnectTimeout: 20234,
    // browserDisconnectTolerance: 1,
    // browserNoActivityTimeout: 100345,
    // verboseDeprecations: true,

    // the following settings help the debugger remain connected when on a breakpoint - https://support.saucelabs.com/hc/en-us/articles/225104707-Karma-Tests-Disconnect-Particularly-When-Running-Tests-on-Safari
    // browserDisconnectTimeout: 60 * 5 * 1000, // default 2000
    // browserDisconnectTolerance: 1, // default 0
    // browserNoActivityTimeout: 4 * 60 * 1001, //default 10000
    // captureTimeout: 4 * 60 * 1002, //default 60000
  });
};
