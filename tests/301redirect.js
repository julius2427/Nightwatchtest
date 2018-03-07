module.exports = {
  'Cintas US SSL Homepage' : function(browser){
    browser
    .url('http://www.cintas.com')
    browser.waitForElementVisible('body', 3000, false);
    browser.verify.urlEquals('https://www.cintas.com/', 'SSL Test1 Homepage');

  },
  'Verify US SSL Uniform Work Apparel' : function (browser) {
    browser
    .url('http://cintas.com/uniform-work-apparel')
    browser.waitForElementVisible('body', 3000, false);
    browser.verify.urlContains('https://www.cintas.com/uniform-work-apparel', 'SSL Test2 Uniform-Work-Apparel')
  },
  'Cintas CA SSL' : function(browser){
    browser
    .url('http://www.cintas.ca')
    browser.waitForElementVisible('body', 3000, false);
    browser.verify.urlEquals('https://www.cintas.ca/','SSL Test3 CA Homepage')
    browser.end();
  }
};
