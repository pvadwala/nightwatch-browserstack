require('dotenv').config();

nightwatch_config = {
  src_folders : [ "tests/host" ],
  page_objects_path : "pages",

  selenium : {
    start_process : true,
    server_path : require('selenium-server-standalone-jar').path,
    cli_args : {
            'webdriver.chrome.driver' : require('chromedriver').path,
            'webdriver.gecko.driver' : require('geckodriver').path
        }
  },

  test_settings: {
    default: {
    },
    chrome: {
      desiredCapabilities: {
        browserName: "chrome"
      }
    },
    firefox: {
      desiredCapabilities: {
        browserName: "firefox"
      }
    }
  },

  test_workers: {
    enabled: true,
    workers: 10
  }
};

module.exports = nightwatch_config;
