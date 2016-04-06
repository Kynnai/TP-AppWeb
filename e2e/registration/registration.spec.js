'use strict';

var config = browser.params;

describe('Registration View', function() {
  var page;
  var no = 0;
  no += 1;

  beforeEach(function() {
    browser.get("/registration");
  });

  it('1.  Regarder si le titre contient Inscription', function() {
    expect(element(by.id('banner')).getText()).toBe('Inscription');
  });

  it("2.  Regarder si la page contient le champ pour entrer le Prénom d'utilisateur", function() {
    expect(element(by.id('inputUserFirstName')).isDisplayed()).toBeTruthy();
  });

  it("3.  Regarder si la page contient le model du champ pour entrer le Prénom d'utilisateur", function() {
    expect(element(by.model('user.firstName')).isDisplayed()).toBeTruthy();
  });

  it("4.  Regarder si la page contient le champ pour entrer le Nom d'utilisateur", function() {
    expect(element(by.id('inputUserLastName')).isDisplayed()).toBeTruthy();
  });

  it("5.  Regarder si la page contient le model du champ pour entrer le Nom d'utilisateur", function() {
    expect(element(by.model('user.lastName')).isDisplayed()).toBeTruthy();
  });

  it("6.  Regarder si la page contient le champ pour entrer l'Email", function() {
    expect(element(by.id('inputUserEmail')).isDisplayed()).toBeTruthy();
  });

  it("7.  Regarder si la page contient le model du champ pour entrer l'Email", function() {
    expect(element(by.model('user.email')).isDisplayed()).toBeTruthy();
  });

  it("8.  Regarder si la page contient le champ pour entrer le mot de passe", function() {
    expect(element(by.id('inputUserPassword')).isDisplayed()).toBeTruthy();
  });

  it("9.  Regarder si la page contient le model du mot de passe", function() {
    expect(element(by.model('user.password')).isDisplayed()).toBeTruthy();
  });

  it("10. Regarder si la page contient le champ pour entrer la confirmation du mot de passe", function() {
    expect(element(by.id('inputUserConfPassword')).isDisplayed()).toBeTruthy();
  });

  it("11. Regarder si la page contient le model de la confirmation du mot de passe", function() {
    expect(element(by.model('user.confPassword')).isDisplayed()).toBeTruthy();
  });

  it("12. Regarder si la page contient le bouton Soumettre", function() {
    expect(element(by.id('btnSubmit')).isDisplayed()).toBeTruthy();
  });

  it("13. Regarder si la page contient le bouton Effacer", function() {
    expect(element(by.id('btnErase')).isDisplayed()).toBeTruthy();
  });

});
