exports.config = {


    capabilities: {
        'browserName': 'chrome'
    },

    onPrepare: function () {
        browser.ignoreSynchronization = true;
    },

    framework: 'jasmine',
    frameworkPath: require.resolve('jasmine'),

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 99990000
    },

    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['tests/e2e/*_spec.js'],

    baseUrl: 'http://playback.php01.dev.pls.life'
};