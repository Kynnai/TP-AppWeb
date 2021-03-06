'use strict';

var config = browser.params;

describe('About View', function() {
  var page;

  beforeEach(function() {
    browser.get("/about");
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

  it("Regarder si la page contient le champ pour entrer l'Email", function() {
    expect(element(by.id('inputEmail')).isPresent());
  });

  it("Regarder si la page contient le model du champ pour entrer l'Email", function() {
    expect(element(by.model('user.email')).isPresent());
  });

  it("Regarder si la page contient le champ pour entrer le mot de passe", function() {
    expect(element(by.id('inputPassword')).isPresent());
  });

  it("Regarder si la page contient le model du champ pour entrer le mot de passe", function() {
    expect(element(by.model('user.password')).isPresent());
  });

  it("Regarder si la page contient le champ pour entrer la confirmation du mot de passe", function() {
    expect(element(by.id('inputConfPassword')).isPresent());
  });

  it("Regarder si la page contient le model du champ pour entrer la confirmation du mot de passe", function() {
    expect(element(by.model('user.confPassword')).isPresent());
  });

  it("Regarder si la page contient le bouton Envoyer", function() {
    expect(element(by.id('btnSubmit')).isPresent());
  });

  it("Regarder si la page contient le bouton Effacer", function() {
    expect(element(by.id('btnErase')).isPresent());
  });

  /*it("Regarder", function() {
      expect(element.all(by.repeater('reason in myReason')).get(2)).toBe("Bug trouvé");
    });*/

});


