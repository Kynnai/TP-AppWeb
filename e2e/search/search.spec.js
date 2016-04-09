'use strict';

var config = browser.params;

fdescribe('Search View', function() {
  var page;

  beforeEach(function() {
    browser.get("/search");
  });

  it('1.  Regarder si le titre contient Recherche de films', function() {
    expect(element(by.id('banner')).getText()).toBe('Recherche de film(s)');
  });

  it("2.  Regarder si la page contient le champ pour entrer le titre d'un film", function() {
    expect(element(by.id('searchBox')).isPresent()).toBe(true);
  });

  it("3.  Regarder si la page contient le model pour le champ pour entrer le titre d'un film", function() {
    expect(element(by.model('query')).isDisplayed()).toBeTruthy();
  });

  it("4.  Regarder si la page contient le champ pour entrer le titre d'un film", function() {
    expect(element(by.id('searchButton')).isPresent()).toBe(true);
  });

  it("5.  Utilisateur Anonyme, le bouton ajouter un film n'est pas visible", function() {
    element(by.id('searchBox')).sendKeys("the");
    element(by.id('searchButton')).click();
    expect(element(by.id('addMovie')).isPresent()).toBe(false);
  });
});
