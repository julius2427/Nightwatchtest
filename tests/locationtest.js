var us = "us"
var canada = "canada"
var frenchca = "frenchca"
var devus = "devus"
var devcafr = "devcafr"

module.exports = {
  'US Location Finder': function(browser){
    browser.page.staginglogin().staging(us)
    browser.page.locationfinder().findlocationlink(us)
    browser.page.locationfinder().invalidresults(us)
//    browser.page.staginglogin().loginstaging()
//    browser.page.staginglogin().checkuserlogin()
    .end()
},
  'CA Location Finder': function(browser){
    browser.page.staginglogin().staging(frenchca)
    browser.page.locationfinder().findlocationlink(frenchca)
    browser.page.locationfinder().invalidresults(frenchca)
    .end()

  }
};


/*
  'Save Screenshot' : function(browser){
    browser
    .saveScreenshot('./reports/cintastesting/FirefoxDesktop.png')
    .pause(5000)
    .end();
  }
*/
