module.exports = function(browser){
  this.findlocationlink = function(country){
    var useelements = browser.page.elements();
    browser.pause(1000)
    useelements.click('@findlocation')
    browser.pause(1000)

    if(country === "us"){
      browser.verify.containsText(".lf-ZipSearchContainer", "Find a Location", "Verified US Location Form Available")
  }
    else if(country === "frenchca"){
      browser.verify.containsText(".lf-ZipSearchContainer", "Trouver un établissement", "Verified French Location Form Available")
    }
    useelements.setValue('@locationinput', '45402')
    useelements.setValue('@locationinput', browser.Keys.ENTER)

    browser.waitForElementVisible('#map', 2000)
    browser.click('.lf-lb-filterContainer')
    browser.verify.visible('.serviceFilterOptions', "Service Options Showing Properly")
    browser.verify.visible('.lf-lb-locationsContainer', 'Filtered Options Showing Properly')

    return browser;
  };
  this.invalidresults = function(country){
    var useelements = browser.page.elements();
    browser.pause(1000)
    useelements.click('@findlocation')
    browser.waitForElementVisible('#map', 2500)
    browser.pause(1000)

    useelements.setValue('@locationinput', 'invalidsearch')
    useelements.setValue('@locationinput', browser.Keys.ENTER)

    browser.pause(5000)

    if(country === "devus"){
      browser.verify.containsText(".lf-lb-noResults", "WE DID NOT FIND ANY LOCATIONS FOR", "US No Results Found")
  }
    else if(country === "devcafr"){
      browser.verify.containsText(".lf-lb-noResults", "NOUS N’AVONS TROUVÉ AUCUN EMPLACEMENT POUR", "French No Results Found")
    }
    return browser;
  };
}
