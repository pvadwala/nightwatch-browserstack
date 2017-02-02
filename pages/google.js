module.exports = {
  url: 'https://www.google.com',
  elements: {
    searchBar: {
      selector: 'input[type=text]'
    },
    submit: {
      selector: '//*[@name="btnG"]',
      locateStrategy: 'xpath'
    },
    pricing: {
      selector: '//a[text()="Pricing"]',
      locateStrategy: 'xpath'
    }
  },
  commands: [{
    navigateToBrowserStackPricing() {
      this.api.pause(1000);
      return this.waitForElementVisible('@pricing', 1000)
        .click('@pricing')
        .assert.title('BrowserStack Plans and Pricing');
    }
  }]
};