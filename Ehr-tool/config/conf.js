
var HtmlReporter = require('protractor-beautiful-reporter');

// An example configuration file.
exports.config = {
    directConnect: true,
  
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      'browserName': 'chrome'
    },
  
    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',
    onPrepare: function () {
     browser.manage().window().maximize();
      jasmine.getEnv().addReporter(new HtmlReporter({
        baseDirectory: 'Reports/screenshots'
     }).getJasmine2Reporter());
    },
    // Spec patterns are relative to the current working directory when
    // protractor is called.
    specs: ['../test/*_spec.js'],
  
    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
      defaultTimeoutInterval: 30000
    }
  };
  