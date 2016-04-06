'use strict';

var config = browser.params;

describe('Registration View', function() {
  var page;

  beforeEach(function() {
    browser.get("/registration");
  });

  it('Regarder si le titre contient Inscription', function() {
    expect(element(by.id('banner')).getText()).toBe('Inscription');
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

  it("Regarder si la page contient le sélecteur pour la Raison", function() {
    expect(element(by.id('inputaboutreason')).isPresent());
  });

  it("Regarder si la page contient le model du sélecteur pour la Raison", function() {
    expect(element(by.model('user.reason')).isPresent());
  });

  it("Regarder si la page contient le champ pour entrer l'Email", function() {
    expect(element(by.id('inputEmail')).isPresent());
  });

  it("Regarder si la page contient le model du champ pour entrer l'Email", function() {
    expect(element(by.model('user.email')).isPresent());
  });

  it("Regarder si la page contient le champ pour entrer le message", function() {
    expect(element(by.id('inputMessage')).isPresent());
  });

  it("Regarder si la page contient le model du champ pour entrer le message", function() {
    expect(element(by.model('user.message')).isPresent());
  });

  it("Regarder si la page contient le bouton Envoyer", function() {
    expect(element(by.id('btnSend')).isPresent());
  });

  it("Regarder si la page contient le bouton Effacer", function() {
    expect(element(by.id('btnErase')).isPresent());
  });
});
