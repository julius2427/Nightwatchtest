module.exports = {
  'Cintas Open Website' : function (browser) {
    browser
      .windowMaximize()
      .url('https://cintas.com')
      .waitForElementVisible('body', 1000);
//    return browser;
  },

   'Open Contact Form' : function(browser) {
     browser
      .click('#headerContactLink')
      .pause(3000)

      //create function to clear all fields
      //create function to insert all fields
      //create function to select checkboxes
      //create function to submit
      //create function to verify submission entered

   },
   'Set Required Fields' : function(browser){
     browser
//     .clearValue('#HeaderPlaceHolder_T981C7CEC019_firstName')
     .setValue('#HeaderPlaceHolder_T981C7CEC019_firstName', 'RealartTestFirst')
//     .clearValue('#HeaderPlaceHolder_T981C7CEC019_lastName')
     .setValue('#HeaderPlaceHolder_T981C7CEC019_lastName', 'RealartTestLast')
     .setValue('#HeaderPlaceHolder_T981C7CEC019_company', 'Real Art Test Company')
     .setValue('#HeaderPlaceHolder_T981C7CEC019_postalCode', '45324')
     .setValue('#HeaderPlaceHolder_T981C7CEC019_phone', '1234567890')
     .setValue('#HeaderPlaceHolder_T981C7CEC019_email', 'realarttest@gmail.com')
     .click('#HeaderPlaceHolder_T981C7CEC019_chklUserInterests1_0')
     .click('#HeaderPlaceHolder_T981C7CEC019_chklUserInterests1_1')
     .click('#HeaderPlaceHolder_T981C7CEC019_chklUserInterests1_2')
     .click('#HeaderPlaceHolder_T981C7CEC019_chklUserInterests1_3')
     .click('#HeaderPlaceHolder_T981C7CEC019_chklUserInterests1_4')
     .click('#HeaderPlaceHolder_T981C7CEC019_chklUserInterests1_5')
     .click('#HeaderPlaceHolder_T981C7CEC019_chklUserInterests1_6')
     .click('#HeaderPlaceHolder_T981C7CEC019_chklUserInterests1_7')

     .pause(3000)
     .end();
     return browser;
   }
};
