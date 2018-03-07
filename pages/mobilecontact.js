module.exports = function(browser){
  this.mobileresize = function(){
//    var useelements = browser.page.elements();
    browser.resizeWindow(500, 961)
  };
  this.checkmenuoptions = function(){
    var useelements = browser.page.elements();
    browser.useXpath()
    browser.click('//*[contains(concat( " ", @class, " " ), concat( " ", "meanmenu-reveal", " " ))]')
    browser.useCss()
    browser.pause(2500)
    useelements.verify.visible('@contactus','Contact Us Link')
    useelements.verify.visible('@findlocation','Find Location Link')
    useelements.verify.visible('@careerslink','Careers Link')
    useelements.verify.containsText('@servicegrid','UNIFORMS & APPAREL')
    useelements.verify.containsText('@servicegrid','FACILITY SERVICES')
    useelements.verify.containsText('@servicegrid','FIRST AID & SAFETY')
    useelements.verify.containsText('@servicegrid','FIRE PROTECTION')
    useelements.verify.containsText('@servicegrid','COMPLIANCE TRAINING')
    useelements.verify.containsText('@servicegrid','FLAME RESISTANT CLOTHING')
    useelements.verify.containsText('@servicegrid','TILE & CARPET CLEANING')
    useelements.verify.containsText('@servicegrid','RESTROOM & HYGIENE SOLUTIONS')
    browser.saveScreenshot('./reports/cintastesting/MobileView.png')
    return browser;
  };
};
