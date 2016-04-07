'use strict';

var config = browser.params;

describe('Logout View', function() {

  beforeEach(function() {
    browser.get("/login");
    element(by.model('user.email')).sendKeys('Eti@test2.com');
    element(by.model('user.password')).sendKeys('asd');
    element(by.id('btnConnect')).click();
  });

  it("1.  Regarder si le titre contient Vous êtes maintenant déconnecté! ", function() {
    element(by.id('logout')).click();
    browser.get("/logout");
    browser.get("/logout");
    expect(element(by.id('banner')).getText()).toBe("Vous êtes maintenant déconnecté!");
  });

  it("2.  Regarder si la nav-bar contient l'onglet accueil", function() {
    expect(element(by.id('main')).getText()).toBe('Accueil');
  });

  it("3.  Regarder si la nav-bar contient l'onglet recherche", function() {
    expect(element(by.id('search')).getText()).toBe('Recherche');
  });

  it("4.  Regarder si la nav-bar contient l'onglet liste de film", function() {
    expect(element(by.id('playList')).getText()).toBe('Liste de Film');
  });

  it("5.  Regarder si la nav-bar contient l'onglet contact", function() {
    expect(element(by.id('about')).getText()).toBe('Contact');
  });

  it("6.  Regarder si la nav-bar contient le username", function() {
    expect(element(by.id('username')).getText()).toBe('Eti@test2.com');
  });

  it("7.  Regarder si la nav-bar contient l'onglet déconnexion", function() {
    expect(element(by.id('logout')).getText()).toBe('Déconnexion');
  });

  it("8.  Regarder si la nav-bar ne contient pas l'onglet Liste de film(Après la déconnexion)", function() {
    element(by.id('logout')).click();
    expect(element(by.id('playList')).isPresent()).toBe(false);
  });

  it("9.  Regarder si la nav-bar ne contient pas l'onglet Déconnexion(Après la déconnexion)", function() {
    element(by.id('logout')).click();
    expect(element(by.id('logout')).isPresent()).toBe(false);
  });

  it("10. Regarder si la nav-bar ne contient pas le nom d'utilisateur(Après la déconnexion)", function() {
    element(by.id('logout')).click();
    expect(element(by.id('username')).isPresent()).toBe(false);
  });

  it('11. Regarder si le titre contient Connexion(Après la déconnexion)', function() {
    element(by.id('logout')).click();
    expect(element(by.id('login')).getText()).toBe('Connexion');
  });

  it("12. Déconnexion Réussis redirection vers la page d'accueil(Après la déconnexion)", function() {
    element(by.id('logout')).click();
    expect(element(by.id('banner')).getText()).toBe("Six films de l'année 2016 !");
  });

});
