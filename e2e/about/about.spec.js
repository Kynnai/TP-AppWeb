'use strict';

var config = browser.params;

describe('About View', function() {
  var page;
  var today;
  var message;
  var email;

  beforeEach(function() {
    browser.get("/about");
    today = new Date();
    email = today.getHours()+today.getMinutes()+today.getSeconds()+"@"+today.getDay()+today.getMonth()+today.getYear()+".com";
    message = today.getHours()+"h"+today.getMinutes()+"m"+today.getSeconds()+"s"+"  "+today.getDay()+"/"+today.getMonth()+"/"+today.getYear();
  });

  it('1.  Regarder si le titre contient Contact', function() {
    expect(element(by.id('banner')).getText()).toBe('Contact');
  });

  it("2.  Regarder si la page contient le champ pour entrer le Nom d'utilisateur", function() {
    expect(element(by.id('inputUserName')).isDisplayed()).toBeTruthy();
  });

  it("3.  Regarder si la page contient le model du champ pour entrer le Nom d'utilisateur", function() {
    expect(element(by.model('user.name')).isDisplayed()).toBeTruthy();
  });

  it("4.  Regarder si le message d'erreur pour le Nom d'utilisateur n'est pas visible", function() {
    expect(element(by.id('errorMessageUserName')).isDisplayed()).toBeFalsy();
  });

  it("5.  Regarder si le message pour le Nom d'utilisateur fonctionne lorsqu'on efface le Nom d'utilisateur", function() {
    element(by.model('user.name')).sendKeys('Etienne');
    element(by.model('user.name')).clear();
    expect(element(by.id('errorMessageUserName')).isDisplayed()).toBeTruthy();
    expect(element(by.id('errorMessageUserName')).getText()).toBe('Veuillez indiquer votre nom!');
  });

  it("6.  Regarder si la page contient le model de la liste déroulante pour choisir la raison", function() {
    expect(element(by.model('user.reason')).isDisplayed()).toBeTruthy();
  });

  it("7.  Regarder si la liste déroulante pour choisir la raison contien Bug trouvé", function() {
    expect(element(by.cssContainingText('option', 'Bug trouvé')).click().isDisplayed()).toBeTruthy();
  });

  it("8.  Regarder si la liste déroulante pour choisir la raison contien Commentaire", function() {
    expect(element(by.cssContainingText('option', 'Commentaire')).click().isDisplayed()).toBeTruthy();
  });

  it("9.  Regarder si la liste déroulante pour choisir la raison contien Plainte", function() {
    expect(element(by.cssContainingText('option', 'Plainte')).click().isDisplayed()).toBeTruthy();
  });

  it("10. Regarder si la liste déroulante pour choisir la raison contien Recommendations", function() {
    expect(element(by.cssContainingText('option', 'Recommendations')).click().isDisplayed()).toBeTruthy();
  });

  it("11. Regarder si la page contient le champ pour entrer l'Email", function() {
    expect(element(by.id('inputEmail')).isDisplayed()).toBeTruthy();
  });

  it("12. Regarder si la page contient le model du champ pour entrer l'Email", function() {
    expect(element(by.model('user.email')).isDisplayed()).toBeTruthy();
  });

  it("13. Regarder si le message d'erreur pour l'Email n'est pas visible", function() {
    expect(element(by.id('errorMessageEmail')).isDisplayed()).toBeFalsy();
  });

  it("14. Regarder si le message pour le Courriel fonctionne lorsqu'on efface le Courriel", function() {
    element(by.model('user.email')).sendKeys(email);
    element(by.model('user.email')).clear();
    expect(element(by.id('errorMessageEmail')).isDisplayed()).toBeTruthy();
    expect(element(by.id('errorMessageEmail')).getText()).toBe('Veuiller entrer une adresse courriel valide!');
  });

  it("15. Regarder si la page contient le champ pour entrer l'Email", function() {
    expect(element(by.id('inputEmail')).isDisplayed()).toBeTruthy();
  });

  it("16. Regarder si la page contient le model du champ pour entrer l'Email", function() {
    expect(element(by.model('user.email')).isDisplayed()).toBeTruthy();
  });

  it("17. Regarder si le message d'erreur pour le Message n'est pas visible", function() {
    expect(element(by.id('errorMessageMessage')).isDisplayed()).toBeFalsy();
  });

  it("18. Regarder si le message pour le Message fonctionne lorsqu'on efface le Message", function() {
    element(by.model('user.message')).sendKeys(message);
    element(by.model('user.message')).clear();
    expect(element(by.id('errorMessageMessage')).isDisplayed()).toBeTruthy();
    expect(element(by.id('errorMessageMessage')).getText()).toBe('Veuillez entrer un message!');
  });

  it("19. Regarder si la page contient le bouton Envoyer", function() {
    expect(element(by.id('btnSend')).isDisplayed()).toBeTruthy();
  });

  it("20. Regarder si le bouton Envoyer est désactivé", function() {
    expect(element(by.id('btnSend')).isDisabled);
  });

  it("21. Regarder si la page contient le bouton Effacer", function() {
    expect(element(by.id('btnErase')).isDisplayed()).toBeTruthy();
  });

  it("22. Lors d'un contact réussis la bannière apparait", function() {
    element(by.model('user.name')).sendKeys('Etienne');
    element(by.cssContainingText('option', 'Bug')).click();
    element(by.model('user.email')).sendKeys(email);
    element(by.model('user.message')).sendKeys(message);
    element(by.id('btnSend')).click();
    expect(element(by.id('successBanner')).isDisplayed()).toBeTruthy();
  });

  it("23. Lors d'un contact réussis le message apparait dans la bannière de succès", function() {
    element(by.model('user.name')).sendKeys('Etienne');
    element(by.cssContainingText('option', 'Bug')).click();
    element(by.model('user.email')).sendKeys(email);
    element(by.model('user.message')).sendKeys(message);
    element(by.id('btnSend')).click();
    expect(element(by.id('successBanner')).getText()).toBe('Nous avons bien reçu votre message!');
  });

});


