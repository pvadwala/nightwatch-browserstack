// let google = null;

module.exports = {
  before: (browser) => {
    google = browser.page.google();  
  },

  'Google\'s Search Functionality': function (browser) {
    google.navigate()
      .assert.title('Google')
      .assert.visible('@searchBar')
      .setValue('@searchBar', 'BrowserStack\n')
      .waitForElementVisible('@submit', 1000)
      .click('@submit');
    browser.pause(2000);
    google.assert.title('BrowserStack - Google Search');
    browser.expect.element('Pricing', 'link text').present
    google.navigateToBrowserStackPricing();
    browser.end();
  }
};