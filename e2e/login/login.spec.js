'use strict';

var config = browser.params;

describe('Login View', function() {
  var page;

  beforeEach(function() {
    browser.get("/login");
  });

  it("1.  Regarder si la nav-bar contient l'onglet Accueil", function() {
    expect(element(by.id('main')).getText()).toBe('Accueil');
  });

  it("2.  Regarder si la nav-bar contient l'onglet Recherche", function() {
    expect(element(by.id('search')).getText()).toBe('Recherche');
  });

  it("3.  Regarder si la nav-bar contient l'onglet Contact", function() {
    expect(element(by.id('about')).getText()).toBe('Contact');
  });

  it("4.  Regarder si la nav-bar contient l'onglet Inscription", function() {
    expect(element(by.id('registration')).getText()).toBe('Inscription');
  });

  it("5.  Regarder si la nav-bar contient l'onglet Connexion", function() {
    expect(element(by.id('login')).getText()).toBe('Connexion');
  });

  it("6.  Regarder si la nav-bar ne contient pas l'onglet Liste de film(Avant la connexion)", function() {
    expect(element(by.id('playList')).isPresent()).toBe(false);
  });

  it("7.  Regarder si la nav-bar ne contient pas l'onglet Déconnexion(Avant la connexion)", function() {
    expect(element(by.id('logout')).isPresent()).toBe(false);
  });

  it("8.  Regarder si la nav-bar ne contient pas le nom d'utilisateur(Avant la connexion)", function() {
    expect(element(by.id('username')).isPresent()).toBe(false);
  });

  it('9.  Regarder si le titre contient Connexion', function() {
    expect(element(by.id('banner')).getText()).toBe('Connexion');
  });

  it("10. Regarder si la page contient le champ pour entrer le Nom d'utilisateur(Courriel)", function() {
    expect(element(by.id('inputUserEmail')).isDisplayed()).toBeTruthy();
  });

  it("11. Regarder si la page contient le model du champ pour entrer le Nom d'utilisateur(Courriel)", function() {
    expect(element(by.model('user.email')).isDisplayed()).toBeTruthy();
  });

  it("12. Connexion Réussis l'email apparait dans la nav-bar", function() {
    element(by.model('user.email')).sendKeys('Eti@test2.com');
    element(by.model('user.password')).sendKeys('asd');
    element(by.id('btnConnect')).click();
    expect(element(by.id('username')).getText()).toBe('Eti@test2.com');
  });

  it("13. Connexion Réussis l'onglet l'Liste de film apparait dans la nav-bar", function() {
    element(by.model('user.email')).sendKeys('Eti@test2.com');
    element(by.model('user.password')).sendKeys('asd');
    element(by.id('btnConnect')).click();
    expect(element(by.id('playList')).getText()).toBe('Liste de Film');
  });

  it("14. Connexion Réussis l'onglet Déconnexion apparait dans la nav-bar", function() {
    element(by.model('user.email')).sendKeys('Eti@test2.com');
    element(by.model('user.password')).sendKeys('asd');
    element(by.id('btnConnect')).click();
    expect(element(by.id('logout')).getText()).toBe('Déconnexion');
  });

  it("16. Connexion Réussis l'onglet Connexion disparait de la nav-bar", function() {
    element(by.model('user.email')).sendKeys('Eti@test2.com');
    element(by.model('user.password')).sendKeys('asd');
    element(by.id('btnConnect')).click();
    expect(element(by.id('login')).isPresent()).toBe(false);
  });

  it("17. Connexion Réussis l'onglet Inscription disparait de la nav-bar", function() {
    element(by.model('user.email')).sendKeys('Eti@test2.com');
    element(by.model('user.password')).sendKeys('asd');
    element(by.id('btnConnect')).click();
    expect(element(by.id('registration')).isPresent()).toBe(false);
  });

  it("18. Connexion Réussis redirection vers la page d'accueil", function() {
    element(by.model('user.email')).sendKeys('Eti@test2.com');
    element(by.model('user.password')).sendKeys('asd');
    element(by.id('btnConnect')).click();
    expect(element(by.id('banner')).getText()).toBe("Six films de l'année 2016 !");
  });

  it("19. Connexion Échouer, le mots de passe n'est pas bon", function() {
    element(by.model('user.email')).sendKeys('Eti@test2.com');
    element(by.model('user.password')).sendKeys('asdf');
    element(by.id('btnConnect')).click();
    expect(element(by.id('registrationMessage')).getText()).toBe('401 Bad credentials');
  });

  it("20. Connexion Échouer, le courriel n'est pas bon", function() {
    element(by.model('user.email')).sendKeys('Eti@tes.com');
    element(by.model('user.password')).sendKeys('asd');
    element(by.id('btnConnect')).click();
    expect(element(by.id('registrationMessage')).getText()).toBe('401 Bad credentials');
  });

  it("21. Connexion Échouer, tout les données son érroner", function() {
    element(by.model('user.email')).sendKeys('Eti@tes.com');
    element(by.model('user.password')).sendKeys('asdf');
    element(by.id('btnConnect')).click();
    expect(element(by.id('registrationMessage')).getText()).toBe('401 Bad credentials');
  });

  it("22. Regarder si la page contient le champ pour entrer le mot de passe", function() {
    expect(element(by.id('inputUserPassword')).isDisplayed()).toBeTruthy();
  });

  it("23. Regarder si la page contient le model du champ pour entrer le mot de passe", function() {
    expect(element(by.model('user.password')).isDisplayed()).toBeTruthy();
  });

  it("24. Regarder si le message d'erreur pour le Courriel n'est pas visible", function() {
    expect(element(by.id('errorMessageEmail')).isDisplayed()).toBeFalsy();
  });

  it("25. Regarder si le message pour le Courriel fonctionne lorsqu'on efface le courriel", function() {
    element(by.model('user.email')).sendKeys('Eti@test.com');
    element(by.model('user.email')).clear();
    expect(element(by.id('errorMessageEmail')).isDisplayed()).toBeTruthy();
  });

  it("26. Regarder si le message d'erreur pour le mot de passe n'est pas visible", function() {
    expect(element(by.id('errorMessagePassword')).isDisplayed()).toBeFalsy();
  });

  it("27. Regarder si le message pour le Courriel fonctionne lorsqu'on efface le mot de passe", function() {
    element(by.model('user.password')).sendKeys('asdf');
    element(by.model('user.password')).clear();
    expect(element(by.id('errorMessagePassword')).isDisplayed()).toBeTruthy();
  });

  it("28. Regarder si la page contient le bouton Envoyer", function() {
    expect(element(by.id('btnConnect')).isDisplayed()).toBeTruthy();
  });

  it("29. Regarder si le bouton Connecté est désactivé", function() {
    expect(element(by.id('btnConnect')).isDisabled);
  });

  it("30. Regarder si la page contient le bouton Effacer", function() {
    expect(element(by.id('btnErase')).isDisplayed()).toBeTruthy();
  });

  it("31. Regarder si le bouton Effacer fonctionne", function() {
    element(by.model('user.email')).sendKeys('Eti@tes.com');
    element(by.model('user.password')).sendKeys('asdf');
    element(by.id('btnErase')).click();
    expect(element(by.model('user.email')).getText()).toBe('');
    expect(element(by.model('user.password')).getText()).toBe('');
  });

});
