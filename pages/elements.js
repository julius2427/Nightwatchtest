module.exports = {
  elements: {
    loginname: '#wrap_name',
    loginpassword: '#wrap_password',
    loginbutton: '.sfSave',
    maincontactform: '.contact_box.contactNavClick',
    firstname: '#InputFirstName',
    lastname: '#InputLastName',
    company: '#InputCompany',
    address: '#InputAddress',
    postalcode: '#InputPostalCode',
    phone: '#InputPhone',
    comments: '#InputComments',
    email: '#InputEmail',
    checkbox1: '#ContactInterestOptions_0',
    checkbox2: '#ContactInterestOptions_1',
    checkbox3: '#ContactInterestOptions_2',
    checkbox4: '#ContactInterestOptions_3',
    checkbox5: '#ContactInterestOptions_4',
    checkbox6: '#ContactInterestOptions_5',
    checkbox7: '#ContactInterestOptions_6',
    checkbox8: '#ContactInterestOptions_7',
    submit:'#InputSubmitButton',
    modalconfirm: '#modal-confirm',
    submitoriginal: '#modal-deny',
    servicegrid: '#service_grid-mobile',
    careerslink: '#CareersLink',
    findlocation: '#MobileHeaderPlaceHolder_T981C7CEC020_LocationFinderLink',
    contactus: '#ContactUsLink',
    findlocation: '#HeaderNavLocationFinder',
    locationinput: '#locationFinderFindALocationInputSearch',
    locationinput2: '#lf-lb-searchInput'
  },
  url: function(){
    return this.api.launch_url;
  }
}
