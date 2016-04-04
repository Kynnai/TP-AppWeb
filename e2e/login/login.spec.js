'use strict';

var config = browser.params;

describe('Login View', function() {
  var page;

  beforeEach(function() {
    browser.get("/login");
  });

  it('Regarder si le titre contient Connexion', function() {
    expect(element(by.id('banner')).getText()).toBe('Connexion');
  });

  it("Regarder si la page contient le champ pour entrer le Nom d'utilisateur(Courriel)", function() {
    expect(element(by.id('inputUserEmail')).isPresent());
  });

  it("Regarder si la page contient le model du champ pour entrer le Nom d'utilisateur(Courriel)", function() {
    expect(element(by.model('user.email')).isPresent());
  });

  it("Test de connexion Réussis", function() {
    element(by.model('user.email')).sendKeys('Eti@test2.com');
    element(by.model('user.password')).sendKeys('asd');
    element(by.id('btnConnect')).click();
    expect(browser.get("/main"));
  });

  it("Test de connexion Échouer, le mots de passe n'est pas bon", function() {
    element(by.model('user.email')).sendKeys('Eti@test2.com');
    element(by.model('user.password')).sendKeys('asdf');
    element(by.id('btnConnect')).click();
    expect(element(by.id('registrationMessage')).getText()).toBe('401 Bad credentials');
  });

  it("Test de connexion Échouer, le courriel n'est pas bon", function() {
    element(by.model('user.email')).sendKeys('Eti@tes.com');
    element(by.model('user.password')).sendKeys('asd');
    element(by.id('btnConnect')).click();
    expect(element(by.id('registrationMessage')).getText()).toBe('401 Bad credentials');
  });

  it("Test de connexion Échouer, tout les données son érroner", function() {
    element(by.model('user.email')).sendKeys('Eti@tes.com');
    element(by.model('user.password')).sendKeys('asdf');
    element(by.id('btnConnect')).click();
    expect(element(by.id('registrationMessage')).getText()).toBe('401 Bad credentials');
  });

  it("Regarder si la page contient le champ pour entrer le mot de passe", function() {
    expect(element(by.id('inputUserPassword')).isPresent());
  });

  it("Regarder si la page contient le model du champ pour entrer le mot de passe", function() {
    expect(element(by.model('user.password')).isPresent());
  });

  it("Regarder si la page contient le bouton Envoyer", function() {
    expect(element(by.id('btnConnect')).isPresent());
  });

  it("Regarder si la page contient le bouton Effacer", function() {
    expect(element(by.id('btnErase')).isPresent());
  });
});
