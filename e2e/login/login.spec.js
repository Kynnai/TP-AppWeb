'use strict';

var config = browser.params;

describe('Registration View', function() {
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

  it("Regarder si la page contient le champ pour entrer le mot de passe", function() {
    expect(element(by.id('inputUserPassword')).isPresent());
  });

  it("Regarder si la page contient le model du champ pour entrer le mot de passe", function() {
    expect(element(by.model('user.password')).isPresent());
  });

  it("Regarder si la page contient le bouton Envoyer", function() {
    expect(element(by.id('btnSend')).isPresent());
  });

  it("Regarder si la page contient le bouton Effacer", function() {
    expect(element(by.id('btnErase')).isPresent());
  });
});
