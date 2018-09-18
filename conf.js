exports.config = {
    framework:'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['todo-spec.js'],
    useAllAngular2AppRoots: true,
    rootElement: '.wk_ex_iframe',

    onPrepare: function() {
      browser.ignoreSynchronization = true;
    },
    
  };
  