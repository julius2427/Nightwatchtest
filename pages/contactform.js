module.exports = function(browser){
  this.opencontactform = function(){
    var useelements = browser.page.elements();
    useelements.click('@maincontactform')
    browser.pause(1000)
    //FRENCH SCENARIO HANDLING
    browser.getAttribute('.contactNav.formOpen', '', result => {
      const enabled = result && result.value !== "false" && result.value !== false;
      if(enabled){
        browser.verify.visible(".contactNav.formOpen", 'User taken back to Contact Form')
        console.log("Made it into US Contact Form")
      }
      else{
        browser.verify.visible(".contact_box.contactNavClick", 'User taken back to Contact Form')
        console.log("Made it into French CA Contact Form")
      }
    })
    browser.verify.visible(".contactNav.formOpen", 'Contact Us Form Opened')
    return browser;
  };
  this.clearmaincontactform = function(){
    var useelements = browser.page.elements();
    useelements.clearValue('@firstname')
    useelements.clearValue('@lastname')
    useelements.clearValue('@company')
    useelements.clearValue('@address')
    useelements.clearValue('@postalcode')
    useelements.clearValue('@phone')
    useelements.clearValue('@comments')
    useelements.clearValue('@email')
    return browser;

  };
  this.setmaincontactform = function(country){
    var useelements = browser.page.elements();
    useelements.setValue('@firstname', country + 'maincontactfirst')
    useelements.setValue('@lastname', country +'maincontactlast')
    useelements.setValue('@company', country + 'maincontactcompany')
    useelements.setValue('@address', country + 'usmaincontactaddress')
    useelements.setValue('@postalcode', '45324')
    useelements.setValue('@phone', '1234567890')
    useelements.setValue('@comments','Realart Automated Test Main Contact Form')
    useelements.setValue('@email', country + 'realarttest@realarttest.com')
    useelements.click('@checkbox1')
    useelements.click('@checkbox2')
    useelements.click('@checkbox3')
    useelements.click('@checkbox4')
    useelements.click('@checkbox5')
    useelements.click('@checkbox6')
    useelements.click('@checkbox7')
//  useelements.click('@checkbox8')
    return browser;
  };
  this.addressvalidation = function(logincountry){
    var useelements = browser.page.elements();
    console.log("Value for Login Country = " + logincountry)
//Submit Contact Form with invalid address information confirming error handling
    useelements.click('@submit')
    browser.pause(5000)
    browser.verify.visible(".modal-content.modalWindow", 'Address Validation Modal Available')
    if(logincountry ==="us" || logincountry === "canada"){
      browser.verify.containsText("#modal-msg", "We couldn't locate the company address you entered.", "Correct Verbiage when no matching address found")
      browser.verify.containsText("#modal-confirm","Try Again","Shows the Try Again over Update Address Option")
    }
    else{
      browser.verify.containsText("#modal-msg", "Nous n’avons pas été en mesure de localiser l’adresse entrée.", "Correct Verbiage when no matching French Address found")
      browser.verify.containsText("#modal-confirm","Veuillez essayer à nouveau","Shows the Try Again over Update Address Option")
    }
    useelements.click('@modalconfirm')

//Handle French Scenario
    browser.getAttribute('.contactNav.formOpen', '', result => {
      const enabled = result && result.value !== "false" && result.value !== false;
      if(enabled){
        browser.verify.visible(".contactNav.formOpen", 'User taken back to Contact Form')
        console.log("Made it into US Contact Form")
      }
      else{
        browser.verify.visible(".contact_box.contactNavClick", 'User taken back to Contact Form')
        console.log("Made it into French CA Contact Form")
      }
    })

    //Resetting Address Fields
    useelements.clearValue('@address')
    useelements.clearValue('@postalcode')

    //Changing Login Country Address entered to fit scenario
    if(logincountry === "us"){
      useelements.setValue('@address', '657 Hidden Valley Fairborn OH')
      useelements.setValue('@postalcode', '45322')
    }
    else if(logincountry === "canada" || logincountry === "frenchca"){
      useelements.setValue('@address', '502 Dundas Oakville, ON')
      useelements.setValue('@postalcode', 'L6H 6Y3')
    }
    else{
      useelements.setValue('@address', '657 Hidden Valley Fairborn OH')
      useelements.setValue('@postalcode', '45322')
      console.log("WE HAVE A PROBLEM WITH ADDRESS NOT BEING REGISTERED TO COUNTRY")
    }

    useelements.click('@submit')
    browser.pause(2500)
    //Submit to get update address information
    if(logincountry ==="us" || logincountry ==="canada"){
      browser.verify.containsText("#modal-msg", "We found an address that is close to yours, use this one instead?", "Correct Verbiage when Updating Address found")
      browser.verify.containsText("#modal-confirm","Update Address","Shows the Try Again over Update Address Option")
    }
    else{
      browser.verify.containsText("#modal-msg", "Nous avons trouvé une adresse à proximité de la vôtre; voulez-vous l’utiliser?", "Correct Verbiage when Updating Address found")
      browser.verify.containsText("#modal-confirm","Utiliser la nouvelle adresse","Shows the Try Again over French Update Address Option")

    }

        useelements.click('@modalconfirm')

    //Verify Thank You Container is showing after submitting
    browser.verify.visible('#ThankYouContainer','Thank you message should be visible');
  }

}
