'use strict';

var config = browser.params;

describe('Registration View', function() {
  var page;
  var password;
  var email;
  var firstName = "Étienne";
  var lastName = "Gélinas-Gagnon";

  beforeEach(function() {
    browser.get("/registration");
    var today = new Date();
    email = today.getHours()+""+today.getMinutes()+""+today.getSeconds()+"@"+today.getDay()+""+today.getMonth()+""+today.getYear()+".com";
    password = today.getHours()+""+today.getMinutes()+""+today.getSeconds();
  });

  it('1.  Regarder si le titre contient Inscription', function() {
    expect(element(by.id('banner')).getText()).toBe('Inscription');
  });

  it("2.  Regarder si la page contient le champ pour entrer le prénom d'utilisateur", function() {
    expect(element(by.id('inputUserFirstName')).isDisplayed()).toBeTruthy();
  });

  it("3.  Regarder si la page contient le model du champ pour entrer le prénom d'utilisateur", function() {
    expect(element(by.model('user.firstName')).isDisplayed()).toBeTruthy();
  });

  it("4.  Regarder si le message d'erreur pour le prénom n'est pas visible", function() {
    expect(element(by.id('errorMessageFirstName')).isDisplayed()).toBeFalsy();
  });

  it("5.  Regarder si le message pour le rénom fonctionne lorsqu'on efface le prénom", function() {
    element(by.model('user.firstName')).sendKeys(firstName);
    element(by.model('user.firstName')).clear();
    expect(element(by.id('errorMessageFirstName')).isDisplayed()).toBeTruthy();
  });

  it("6.  Regarder si la page contient le champ pour entrer le Nom d'utilisateur", function() {
    expect(element(by.id('inputUserLastName')).isDisplayed()).toBeTruthy();
  });

  it("7.  Regarder si la page contient le model du champ pour entrer le Nom d'utilisateur", function() {
    expect(element(by.model('user.lastName')).isDisplayed()).toBeTruthy();
  });

  it("8.  Regarder si le message d'erreur pour le prénom n'est pas visible", function() {
    expect(element(by.id('errorMessageLastName')).isDisplayed()).toBeFalsy();
  });

  it("9.  Regarder si le message pour le prénom fonctionne lorsqu'on efface le prénom", function() {
    element(by.model('user.lastName')).sendKeys(lastName);
    element(by.model('user.lastName')).clear();
    expect(element(by.id('errorMessageLastName')).isDisplayed()).toBeTruthy();
  });

  it("10. Regarder si la page contient le champ pour entrer l'Email", function() {
    expect(element(by.id('inputUserEmail')).isDisplayed()).toBeTruthy();
  });

  it("11. Regarder si la page contient le model du champ pour entrer l'Email", function() {
    expect(element(by.model('user.email')).isDisplayed()).toBeTruthy();
  });

  it("12. Regarder si le message d'erreur pour le Courriel n'est pas visible", function() {
    expect(element(by.id('errorMessageEmail')).isDisplayed()).toBeFalsy();
  });

  it("13. Regarder si le message pour le Courriel fonctionne lorsqu'on efface le Courriel", function() {
    element(by.model('user.email')).sendKeys(email);
    element(by.model('user.email')).clear();
    expect(element(by.id('errorMessageEmail')).isDisplayed()).toBeTruthy();
  });

  it("14. Regarder si la page contient le champ pour entrer le mot de passe", function() {
    expect(element(by.id('inputUserPassword')).isDisplayed()).toBeTruthy();
  });

  it("15. Regarder si la page contient le model du mot de passe", function() {
    expect(element(by.model('user.password')).isDisplayed()).toBeTruthy();
  });

  it("16. Regarder si le message d'erreur pour le Mot de passe n'est pas visible", function() {
    expect(element(by.id('errorMessagePassword')).isDisplayed()).toBeFalsy();
  });

  it("17. Regarder si le message pour le Mot de passe fonctionne lorsqu'on efface le Mot de passe", function() {
    element(by.model('user.password')).sendKeys(password);
    element(by.model('user.password')).clear();
    expect(element(by.id('errorMessagePassword')).isDisplayed()).toBeTruthy();
  });

  it("18. Regarder si la page contient le champ pour entrer la confirmation du mot de passe", function() {
    expect(element(by.id('inputUserConfPassword')).isDisplayed()).toBeTruthy();
  });

  it("19. Regarder si la page contient le model de la confirmation du mot de passe", function() {
    expect(element(by.model('user.confPassword')).isDisplayed()).toBeTruthy();
  });

  it("20. Regarder si le message d'erreur pour la confirmation du mot de passe différent n'est pas visible", function() {
    expect(element(by.id('errorMessageConfPasswordDiff')).isDisplayed()).toBeFalsy();
  });

  it("21. Regarder si le message pour le mot de passe fonctionne lorsqu'on efface un mot de passe différent", function() {
    element(by.model('user.password')).sendKeys(password);
    element(by.model('user.confPassword')).sendKeys(password+"a");
    element(by.model('user.confPassword')).clear();
    expect(element(by.id('errorMessageConfPasswordDiff')).isDisplayed()).toBeTruthy();
  });

  it("22. Regarder si le message d'erreur pour la confirmation du mot de passe n'est pas visible", function() {
    expect(element(by.id('errorMessageConfPasswordDiff')).isDisplayed()).toBeFalsy();
  });

  it("23. Regarder si le message pour la confirmation du mot de passe fonctionne lorsqu'on efface la confirmation du mot de passe", function() {
    element(by.model('user.confPassword')).sendKeys(password);
    element(by.model('user.confPassword')).clear();
    expect(element(by.id('errorMessageConfPasswordDiff')).isDisplayed()).toBeTruthy();
  });

  it("24. Regarder si la page contient le bouton Soumettre", function() {
    expect(element(by.id('btnSubmit')).isDisplayed()).toBeTruthy();
  });

  it("25. Regarder si la page contient le bouton Effacer", function() {
    expect(element(by.id('btnErase')).isDisplayed()).toBeTruthy();
  });

  it("26. Inscription réussis", function() {
    element(by.model('user.firstName')).sendKeys(firstName);
    element(by.model('user.lastName')).sendKeys(lastName);
    element(by.model('user.email')).sendKeys(email);
    element(by.model('user.password')).sendKeys(password);
    element(by.model('user.confPassword')).sendKeys(password);
    element(by.id('btnSubmit')).click();
    expect(element(by.repeater('msg in messageServeur').row(1)).getText()).toBe('Votre inscription est confirmée!');
  });

  it("27. Inscription échoué, message serveur retourne une erreur", function() {
    element(by.model('user.firstName')).sendKeys("a");
    element(by.model('user.lastName')).sendKeys(lastName);
    element(by.model('user.email')).sendKeys(email);
    element(by.model('user.password')).sendKeys(password);
    element(by.model('user.confPassword')).sendKeys(password);
    element(by.id('btnSubmit')).click();
    expect(element(by.repeater('error in messageServeur').row(2)).getText()).toBe('410 Validation Failed');
  });

  it("28. Inscription échoué, message serveur retourne une erreur pour le prénom", function() {
    element(by.model('user.firstName')).sendKeys("a");
    element(by.model('user.lastName')).sendKeys(lastName);
    element(by.model('user.email')).sendKeys(email);
    element(by.model('user.password')).sendKeys(password);
    element(by.model('user.confPassword')).sendKeys(password);
    element(by.id('btnSubmit')).click();
    expect(element(by.repeater('error in messageServeur').row(3)).getText()).toBe('firstname : Your firstname must have at least 3 characters.');
  });

  it("29. Inscription échoué, message serveur retourne une erreur pour le nom", function() {
    element(by.model('user.firstName')).sendKeys(firstName);
    element(by.model('user.lastName')).sendKeys("a");
    element(by.model('user.email')).sendKeys(email);
    element(by.model('user.password')).sendKeys(password);
    element(by.model('user.confPassword')).sendKeys(password);
    element(by.id('btnSubmit')).click();
    expect(element(by.repeater('error in messageServeur').row(3)).getText()).toBe('lastname : Your lastname must have at least 3 characters.');
  });

  it("30. Inscription échoué, message serveur retourne une erreur pour le email", function() {
    element(by.model('user.firstName')).sendKeys(firstName);
    element(by.model('user.lastName')).sendKeys(lastName);
    element(by.model('user.email')).sendKeys("a@a.a");
    element(by.model('user.password')).sendKeys(password);
    element(by.model('user.confPassword')).sendKeys(password);
    element(by.id('btnSubmit')).click();
    expect(element(by.repeater('error in messageServeur').row(3)).getText()).toBe('email : Cette valeur est déjà utilisée.');
  });

  it("31. Inscription échoué, message serveur retourne une erreur pour le mot de passe", function() {
    element(by.model('user.firstName')).sendKeys(firstName);
    element(by.model('user.lastName')).sendKeys(lastName);
    element(by.model('user.email')).sendKeys(email);
    element(by.model('user.password')).sendKeys("a");
    element(by.model('user.confPassword')).sendKeys("a");
    element(by.id('btnSubmit')).click();
    expect(element(by.repeater('error in messageServeur').row(3)).getText()).toBe('password : Your password must have at least 3 characters.');
  });
});
