'use strict';

var config = browser.params;

describe('About View', function() {
  var page;
  var today;

  beforeEach(function() {
    browser.get("/about");
    today = new Date()
  });

  it('Regarder si le titre contient Contact', function() {
    expect(element(by.id('banner')).getText()).toBe('Contact');
  });

  it("Regarder si la page contient le champ pour entrer le Prénom d'utilisateur", function() {
    expect(element(by.id('inputUserFirstName')).isPresent());
  });

  it("Regarder si la page contient le model du champ pour entrer le Prénom d'utilisateur", function() {
    expect(element(by.model('user.firstName')).isPresent());
  });

  it("Regarder si la page contient le champ pour entrer le Nom d'utilisateur", function() {
    expect(element(by.id('inputUserName')).isPresent());
  });

  it("Regarder si la page contient le model du champ pour entrer le Nom d'utilisateur", function() {
    expect(element(by.model('user.name')).isPresent());
  });

  it("Regarder si la page contient le model de la liste déroulante pour choisir la raison", function() {
    expect(element(by.model('user.reason')).isPresent());
  });

  it("Regarder si la liste déroulante pour choisir la raison contien Bug trouvé", function() {
    expect(element(by.cssContainingText('option', 'Bug trouvé')).click().isPresent());
  });

  it("Regarder si la liste déroulante pour choisir la raison contien Commentaire", function() {
    expect(element(by.cssContainingText('option', 'Commentaire')).click().isPresent());
  });

  it("Regarder si la liste déroulante pour choisir la raison contien Plainte", function() {
    expect(element(by.cssContainingText('option', 'Plainte')).click().isPresent());
  });

  it("Regarder si la liste déroulante pour choisir la raison contien Recommendations", function() {
    expect(element(by.cssContainingText('option', 'Recommendations')).click().isPresent());
  });

  it("Regarder si la page contient le champ pour entrer l'Email", function() {
    expect(element(by.id('inputEmail')).isPresent());
  });

  it("Regarder si la page contient le model du champ pour entrer l'Email", function() {
    expect(element(by.model('user.email')).isPresent());
  });

  it("Regarder si la page contient le bouton Envoyer", function() {
    expect(element(by.id('btnSend')).isPresent());
  });

  it("Regarder si le bouton Envoyer est désactivé", function() {
    expect(element(by.id('btnSend')).isDisabled);
  });

  it("Regarder si la page contient le bouton Effacer", function() {
    expect(element(by.id('btnErase')).isPresent());
  });

  it("Lors d'un contact réussis la bannière apparait", function() {
    element(by.model('user.name')).sendKeys('Etienne');
    element(by.cssContainingText('option', 'Bug')).click();
    element(by.model('user.email')).sendKeys(today.getHours()+today.getMinutes()+today.getSeconds()+"@"+today.getDay()+today.getMonth()+today.getYear()+".com");
    element(by.model('user.message')).sendKeys(today.getHours()+"h"+today.getMinutes()+"m"+today.getSeconds()+"s"+"  "+today.getDay()+"/"+today.getMonth()+"/"+today.getYear());
    element(by.id('btnSend')).click();
    expect(element(by.id('successBanner')).isPresent());
  });

  it("Lors d'un contact réussis le message apparait dans la bannière de succès", function() {
    element(by.model('user.name')).sendKeys('Etienne');
    element(by.cssContainingText('option', 'Bug')).click();
    element(by.model('user.email')).sendKeys(today.getHours()+today.getMinutes()+today.getSeconds()+"@"+today.getDay()+today.getMonth()+today.getYear()+".com");
    element(by.model('user.message')).sendKeys(today.getHours()+"h"+today.getMinutes()+"m"+today.getSeconds()+"s"+"  "+today.getDay()+"/"+today.getMonth()+"/"+today.getYear());
    element(by.id('btnSend')).click();
    expect(element(by.id('successBanner')).getText()).toBe('Nous avons bien reçu votre message!');
  });

});


