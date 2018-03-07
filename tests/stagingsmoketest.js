var us = "us"
var canada = "canada"
var frenchca = "frenchca"
var devus = "devus"
var devcafr = "devcafr"

module.exports = {
   'US Desktop Contact Form Submission': function(browser){
    browser.page.staginglogin().staging(us)
//    browser.page.staginglogin().loginstaging()
//    browser.page.staginglogin().checkuserlogin(
    browser.page.contactform().opencontactform()
    browser.page.contactform().clearmaincontactform()
    browser.page.contactform().setmaincontactform(us)
    browser.page.contactform().addressvalidation(us)
    browser.pause(5000)
    .end()
  },
  'CA Desktop Contact Form Submission': function(browser){
    browser.page.staginglogin().staging(canada)
//    browser.page.staginglogin().loginstaging()
//    browser.page.staginglogin().checkuserlogin()
    browser.page.contactform().opencontactform()
    browser.page.contactform().clearmaincontactform()
    browser.page.contactform().setmaincontactform(canada)
    browser.page.contactform().addressvalidation(canada)
    browser.pause(5000)
    .end()
  },
  'French CA Desktop Contact Form Submission': function(browser){
    browser.page.staginglogin().staging(frenchca)
//    browser.page.staginglogin().loginstaging()
//    browser.page.staginglogin().checkuserlogin()
    browser.page.contactform().opencontactform()
    browser.page.contactform().clearmaincontactform()
    browser.page.contactform().setmaincontactform(frenchca)
    browser.page.contactform().addressvalidation(frenchca)
    browser.pause(5000)
    .end()
  }
};
