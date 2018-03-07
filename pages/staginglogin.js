module.exports = function (browser){
  this.staging = function(logincountry){
    browser
      .windowMaximize()
      if(logincountry === 'us'){
        browser.url('https://cintas-stage.willin.gs')
        browser.pause(2000)
      }
      else if(logincountry === "canada"){
        browser.url('https://cintas-stage-ca.willin.gs')
        browser.pause(2000)
      }
      else if(logincountry === "frenchca"){
        browser.url('https://cintas-stage-ca.willin.gs/fr')
        browser.pause(2000)
      }
      else if(logincountry === "devus"){
        browser.url('https://cintas-stage.willin.gs')
        browser.pause(5000)
      }
      else if(logincountry === "devcafr"){
        browser.url('https://cintas-stage-ca.willin.gs/fr')
        browser.pause(5000)
      }
      else{
        console.log("We got problems man")
      }
      browser.waitForElementVisible('body', 1000)
      return browser;
  };
  this.loginstaging = function(){
    browser
    var useelements = browser.page.elements();
    useelements.setValue('@loginname', 'julius.jackson')
    useelements.setValue('@loginpassword', '+-bwB]}Z')
    useelements.click('@loginbutton')
    return browser;
  };
  this.checkuserlogin = function(){
    browser
    .element('css selector', '.sfForm'.unavailable, function (result){
    if(result.value)
    {
        browser.click('.sfLinkBtn.sfPrimary')
        browser.waitForElementVisible('.sfSubmitBtn', 2000)
  //      browser.click('.sfSubmitBtn')
        .pause(1000)
        browser.acceptAlert()
        .pause(5000)
        console.log('Logged User Out')
    }
    else
    {
      console.log('Did nothing as user was not loggged in')
    }
    })

    return browser;
  };
};
