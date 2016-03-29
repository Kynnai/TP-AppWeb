'use strict';

var config = browser.params;

describe('Search View', function() {
  var page;

  beforeEach(function() {
    browser.get("/search");
  });

  it('Regarder si le titre contient Recherche de films', function() {
    expect(element(by.id('banner')).getText()).toBe('Recherche de film(s)');
  });

  it("Regarder si la page contient le champ pour entrer le titre d'un film", function() {
    expect(element(by.id('SearchBox')).isPresent());
  });

  it("Regarder si la page contient le model pour le champ pour entrer le titre d'un film", function() {
    expect(element(by.model('query')).isPresent());
  });

  it("Regarder si la page contient le champ pour entrer le titre d'un film", function() {
    expect(element(by.id('searchButton')).isPresent());
  });
});
