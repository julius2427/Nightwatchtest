var us = "us"
var canada = "canada"
var frenchca = "frenchca"

module.exports = {
  'Mobile Contact Smoke Test': function(browser){
    browser.page.staginglogin().staging(us)
    browser.page.staginglogin().loginstaging()
    browser.page.staginglogin().checkuserlogin()
    browser.page.mobilecontact().mobileresize()
    browser.page.mobilecontact().checkmenuoptions()
    .end()
  }
};
