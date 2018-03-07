module.exports = {
  'Login Staging Environment' : function(browser){
    var homepage = browser.page.login();
    homepage.navigate();

    homepage
    .windowMaximize()
    .setValue('#wrap_name', 'julius.jackson')
    .setValue('#wrap_password','+-bwB]}Z')
    .pause(3000)
    .click('.sfSave')
    .pause(5000)
  },

  'Check if User Already Logged In' : function(browser){
    browser
    .waitForElementVisible('.sfForm', defaultMaximumWaitTime, false, function (result){
    if(result.value){
      browser.click('.sfLinkBtn.sfPrimary')
      browser.waitForElementVisible('.sfSubmitBtn', 2000)
//      browser.click('.sfSubmitBtn')
      .pause(1000)
      browser.acceptAlert()
      .pause(5000)
      console.log('Made it here')
    }
    else
    {
      console.log('User was already logged in.')
    }
    })
  },
/*
  'Staging Cintas Open Website' : function (browser) {
    browser
      .windowMaximize()
      .url('https://stage.cintas.com')
      .waitForElementVisible('body', 1000);
//    return browser;
  },
*/
   'Open Contact Form' : function(browser) {
     browser
      .click('#HeaderContactUs')
      .pause(3000)
   },
   'Set Required Fields' : function(browser){
     browser
     //Clear Values
     .clearValue('#InputFirstName')
     .clearValue('#InputLastName')
     .clearValue('#InputCompany')
     .clearValue('#InputAddress')
     .clearValue('#InputPostalCode')
     .clearValue('#InputPhone')
     .clearValue('#InputComments')
     .clearValue('#InputEmail')
//
     .setValue('#InputFirstName', 'RealartAutomatedFirst')
     .setValue('#InputLastName', 'RealartTestAutomatedLast')
     .setValue('#InputCompany', 'Real Art Test Automated Company')
     .setValue('#InputAddress', 'Real Art Test Automated Address')
     .setValue('#InputPostalCode', '45324')
     .setValue('#InputPhone', '1234567890')
     .setValue('#InputEmail', 'automatedrealarttest@gmail.com')
     .click('#ContactInterestOptions_0')
     .click('#ContactInterestOptions_1')
     .click('#ContactInterestOptions_2')
     .click('#ContactInterestOptions_3')
     .click('#ContactInterestOptions_4')
     .click('#ContactInterestOptions_5')
     .click('#ContactInterestOptions_6')
     .click('#ContactInterestOptions_7')


     .click('#InputSubmitButton')
     .waitForElementVisible('.modalWindow', 2000)
     .click('#modal-deny')
   },
  'Check Contact Form Sent' : function(browser){
    browser
      browser.verify.visible('#ThankYouContainer','Thank you message should be visible');
      browser.pause(5000)

  },
  'Save Screenshot' : function(browser){
    browser
    .saveScreenshot('./reports/cintastesting/FirefoxDesktop.png')
    .pause(5000)
    .end();
  }
};
