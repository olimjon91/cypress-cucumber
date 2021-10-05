const report = require('multiple-cucumber-html-reporter');

report.generate({
  jsonDir: 'Result-json',
  reportPath: './test-results/',
  metadata:{
    browser: {
      name: 'chrome',
      version: '60'
    },
    device: 'Local test machine',
    platform: {
      name: 'ubuntu',
      version: '16.04'
    }
  },
  customData: {
    title: 'Run info',
    data: [
      {label: 'Project', value: 'RPS-ProjectName'}
    ]
  }
});
